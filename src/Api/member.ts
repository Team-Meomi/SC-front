import { log } from "console";
import { GetServerSidePropsContext } from "next";
import { toast } from "react-toastify";
import { UseSetToken } from "../Hooks";
import CustomAxios from "../Utils/lib/CustomAxios";
import { MemberController } from "../Utils/lib/urls";

export const signup = async (
	email: string,
	password: string,
	name:string,
	stuNum?:number,
) => {
	try {
		const {data} = await CustomAxios.post(MemberController.signup(), {
			email,
			password,
			name,
			stuNum
		});
		toast('회원가입이 되었습니다', {type:"success" })
		return { data };
	} catch (e: any) {
		return { errorMsg:e.response.data.message }
	}
};

export const signin = async (
	email: string,
	password: string,
) => {
	try {
		const { data } = await CustomAxios.post(MemberController.signin(), {
			email: email,
			password: password,
		});
		toast('로그인이 되었습니다', {type: 'success' })		
		UseSetToken(data.accessToken, data.refreshToken , null);
	} catch (e: any) {
		return {errorMsg:e.response.data.message}
	}
};

export const tokenReissue = async (
	RefreshToken: string,
	ctx:GetServerSidePropsContext|null
) => {
	let newAuthorization:string
	try{
		const {data} = await CustomAxios.patch(MemberController.tokenReissue(),{},{headers: {RefreshToken}});
		newAuthorization = data.accessToken
		RefreshToken = data.refreshToken
		UseSetToken(newAuthorization,RefreshToken,ctx)
		return {newAuthorization}
	  } catch(e:any){
		if (e.message === 'Request failed with status code 403') {
			toast('만료된 RefreshToken 입니다', {type: 'warning' })
		}else if (e.message === 'Request failed with status code 404') {
			toast('가입된 이메일이 아닙니다', {type: 'warning' })
		}
	  }
}
