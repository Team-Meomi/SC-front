import CustomAxios from "../Utils/lib/CustomAxios";
import { StudyController } from "../Utils/lib/urls";

export const create = async (
	title: string,
	content: string,
	topic:string,
	date:string,
    maxCount:number,
	studyType:string,
) => {
	try {
		const {data} = await CustomAxios.post(StudyController.Study(), {
			title,
			content,
			category:topic,
			date,
            maxCount,
			studyType,
		});
		console.log(data);
		return { data };
	} catch (e: any) {
		console.log(e)
	}
};

export const StudyApply = async (
	id:number
) => {
	try {
		const {data} = await CustomAxios.post(StudyController.StudyId(id))
		return {data}
	} catch(e:any){
		console.log(e);
	}
}

export const StudyCancel = async (
	id:number
) => {
	try {
		const {data} = await CustomAxios.delete(StudyController.StudyCancel(id))
		return {data}
	} catch(e:any){
		console.log(e);
	}
}

export const StudyDelete = async (
	id:number
) => {
	try {
		const {data} = await CustomAxios.delete(StudyController.StudyId(id))
		return {data}
	} catch(e:any){
		console.log(e);
	}
}