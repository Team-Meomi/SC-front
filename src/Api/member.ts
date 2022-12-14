import { GetServerSidePropsContext } from "next";
import { UseSetToken } from "../Hooks";
import CustomAxios from "../Utils/lib/CustomAxios";
import { MemberController } from "../Utils/lib/urls";

export const signup = async (
	email: string,
	password: string,
	name:string,
	strNum:number,
) => {
	try {
		await CustomAxios.post(MemberController.signup(), {
			email,
			password,
			name,
			strNum
		});
	} catch (e: any) {
		if (e.message === 'Request failed with status code 409') {
			console.log("아이디가 이미 존재하는 유저입니다");
		}
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
			console.log("가입된 이메일이 아닙니다");
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
	  } catch(e){
		console.log(e);
	  }
}
