import CustomAxios from "../Utils/lib/CustomAxios";
import { AdminController, CommentController, StudyController } from "../Utils/lib/urls";

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
		return { data };
	} catch (e: any) {
		return { errorMsg:e.response.data.message }
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

export const StudyModify = async (
	id:number,
	title:string,
	content:string,
	category:string,
	date:string,
	maxCount:number,
) => {
	try {
		const {data} = await CustomAxios.patch(StudyController.StudyId(id),{
			title,
			content,
			category,
			date,
			maxCount
		})
		return {data}
	} catch(e:any){
		console.log(e);
	}
}

export const SearchData = async (
	value:string,
) => {
	try {
		const {data} = await CustomAxios.get(StudyController.StudySearch(value))
		return {data}
	} catch(e:any){
		console.log(e);
	}
}

export const CommentCreate = async (
	postId:number,
	comment:string,
) => {
	try {
		const {data} = await CustomAxios.post(CommentController.Comment(postId),{
			comment,
		})
		return {data}
	} catch(e:any){
		console.log(e);
	}
}

export const CommentDelete = async (
	commentId:number,
) => {
	try {
		const {data} = await CustomAxios.delete(CommentController.Comment(commentId))
		return {data}
	} catch(e:any){
		console.log(e);
	}
}

export const CommentModify = async (
	commentId:number,
	comment:string,
) => {
	try {
		const {data} = await CustomAxios.patch(CommentController.Comment(commentId),{
			comment,
		})
		return {data}
	} catch(e:any){
		console.log(e);
	}
}


export const SearchAudiovisual = async (
	classificationValue: {
		stuGrade:string,
		stuClass:string,
		stuName:string
	}
) => {
	try {
		const {data} = await CustomAxios.get(AdminController.AdminSearch("audiovisual",classificationValue))
		return {data}
	} catch(e:any){
		console.log(e);
	}
}

export const SearchHomebase = async (
	classificationValue :{
		stuGrade:string,
		stuClass:string,
		stuName:string
	}
) => {
	try {
		const {data} = await CustomAxios.get(AdminController.AdminSearch("homebase",classificationValue))
		return {data}
	} catch(e:any){
		console.log(e);
	}
}