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
	StudyDelete:(id:number) => {
		return `/study/${id}`
	},
	StudyDetail:(id:number) => {
		return `/study/${id}`
	}

	
}