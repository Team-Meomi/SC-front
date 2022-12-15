import { GetServerSidePropsContext } from "next";
import { toast } from "react-toastify";
import { UseSetToken } from "../Hooks";
import CustomAxios from "../Utils/lib/CustomAxios";
import { MemberController } from "../Utils/lib/urls";

export const signup = async (
	email?: string,
	password?: string,
	name?:string,
	strNum?:number,
) => {
	try {
		const {data} = await CustomAxios.post(MemberController.signup(), {
			email,
			password,
			name,
			strNum
		});
		return { data };
	} catch (e: any) {
		if (e.message === 'Request failed with status code 409') {
			toast('아이디가 이미 존재하는 유저입니다', {type: 'warning' })
		}
		console.log(e.message);
		// if (e.message){
			
		// }
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
		UseSetToken(data.accessToken, data.refreshToken , null);
	} catch (e: any) {
		if (e.message === 'Request failed with status code 404') {
			toast('가입된 이메일이 아닙니다', {type: 'warning' })
		}
	}
};

export const tokenReissue = async (
	RefreshToken: string,
	ctx:GetServerSidePropsContext
) => {
	let newAuthorization:string
	try{
		const {data} = await CustomAxios.patch(`/auth/reissue`,{},{headers: {RefreshToken}});
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
