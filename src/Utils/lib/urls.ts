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
		return `/user/study/`
	},
	StudyId:(id:number|string) => {
		return `/user/study/${id}`
	},
	StudyCancel:(id:number) => {
		return `/user/study/cancel/${id}`
	},
	StudySearch:(value:string) => {
		return `/user/study/search?title=${value}&category=`
	},
}

export const CommentController = {
	Comment: (id:number|string) => {
		return `/user/comment/${id}`
	},
}

export const UserController = {
	UserBase: () => {
		return `/user/`
	},
	User: (id:number|string) => {
		return `/user/${id}`
	},
	UserJoined : (id:number|string) => {
		return `/user/joined/${id}`
	},
	UserWritten : (id:number|string) => {
		return `/user/written/${id}`
	}
}

export const AdminController = {
	AdminKind: (kind:string) => {
		return `/admin/study/${kind}`
	},
	AdminSearch : (kind:string,classificationValue: {stuGrade:string,stuClass:string,stuName:string}) => {
		return `admin/study/${kind}/search?stuNum=${classificationValue.stuGrade}${classificationValue.stuClass}&stuName=${classificationValue.stuName}`
	}
}