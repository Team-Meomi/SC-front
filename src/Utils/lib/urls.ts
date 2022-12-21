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
	StudyId:(id:number) => {
		return `/study/${id}`
	},
	StudyCancel:(id:number) => {
		return `/study/cancel/${id}`
	},
	StudySearch:() => {
		return `/study/search`
	},

	
}