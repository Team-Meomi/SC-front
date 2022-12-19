import { log } from "console";
import { GetServerSidePropsContext } from "next";
import { toast } from "react-toastify";
import { UseSetToken } from "../Hooks";
import CustomAxios from "../Utils/lib/CustomAxios";
import { ContantController, MemberController } from "../Utils/lib/urls";

export const create = async (
	title: string,
	content: string,
	category:string,
	date:string,
    maxCount:number,
    contant:string,
) => {
	try {
		const {data} = await CustomAxios.post(ContantController.Contant(contant), {
			title,
			content,
			category,
			date,
            maxCount,
		});
		console.log(data);
		return { data };
	} catch (e: any) {
		console.log(e)
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
		UseSetToken(data.accessToken, data.refreshToken , null);
	} catch (e: any) {
		if (e.message === 'Request failed with status code 404') {
			toast('가입된 이메일이 아닙니다', {type: 'warning' })
		}
	}
};
