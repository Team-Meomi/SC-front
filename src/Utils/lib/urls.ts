//멤버
export const MemberController = {
    signin: () => {
		return `/user/auth/signin`;
	},
	signup: () => {
		return `/user/auth/signup`;
	},
}

// 스터디,컴퍼런스
export const ContantController = {
	Contant: (contant:string) => {
		return `/user/${contant}`
	},
	ContantDetail: (id: number , contant:string) => {
		return `/user/${contant}/${id}`
	},
	ContantCheck: (contant:string) => {
		return `/user/${contant}/check`
	}
}