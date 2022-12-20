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

// 스터디,컴퍼런스
export const KindController = {
	kind: (kind:string) => {
		return `/${kind}/`
	},
	kindDetail: (id: number , kind:string) => {
		return `/${kind}/${id}/`
	},
	kindCheck: (kind:string) => {
		return `/${kind}/check`
	}
}

// 전체 게시글
export const MainPageController = {
	MainPage: () => {
		return `/mainpage`
	}
}