import { UseSetToken } from "../Hooks";
import CustomAxios from "../Utils/lib/CustomAxios";
import { MemberController } from "../Utils/lib/urls";

export const signup = async (
	email: string,
	password: string,
) => {
	try {
		await CustomAxios.post(MemberController.signup(), {
			email: email,
			password: password,
		});
	} catch (e: any) {
		if (e.message === 'Request failed with status code 409') {
			// toast.warning('이미 가입된 유저에요');
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
		console.log(e);
	}
};