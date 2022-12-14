//멤버
export const MemberController = {
    signin: () => {
		return `/auth/signin`;
	},
	signup: () => {
		return `/auth/signup`;
	},
}

//스터디
export const StudyController = {
	study: () => {
		return `/study`
	},
	studyDetail: (id: number) => {
		return `/study/${id}`
	},
	studyCheck: () => {
		return `/study/check`
	}
}

//컨퍼런스
export const ConfereceController = {
	conferece: () => {
		return `/conferece`
	},
	confereceDetail: (id: number) => {
		return `/conferece/${id}`
	},
	confereceCheck: () => {
		return `/study/check`
	}
}