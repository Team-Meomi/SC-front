import { toast } from "react-toastify";
import CustomAxios from "../Utils/lib/CustomAxios";
import { KindController } from "../Utils/lib/urls";

export const create = async (
    kind:string,
	title: string,
	content: string,
	category:string,
	date:string,
    maxCount:number
) => {
	try {
		const {data} = await CustomAxios.post(KindController.kind(kind), {
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
	}
};

