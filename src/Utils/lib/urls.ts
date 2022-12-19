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
export const KindController = {
	kind: (kind:string) => {
		return `/user/${kind}`
	},
	kindDetail: (id: number , kind:string) => {
		return `/user/${kind}/${id}`
	},
	kindCheck: (kind:string) => {
		return `/user/${kind}/check`
	}
}