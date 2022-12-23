//멤버
export const MemberController = {
    signin: () => {
		return `/auth/signin`;
	},
	signup: () => {
		return `/auth/signup`;
	},
	tokenReissue: () => {
		return `/auth/`
	}
}

// 전체 게시글
export const StudyController = {
	Study: () => {
		return `/study/`
	},
	StudyId:(id:number|string) => {
		return `/study/${id}`
	},
	StudyCancel:(id:number) => {
		return `/study/cancel/${id}`
	},
	StudySearch:(value:string) => {
		return `study/search?title=${value}&category=`
	},
}

export const CommentController = {
	Comment: (id:number) => {
		return `/comment/${id}`
	},
}