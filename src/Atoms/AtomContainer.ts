import { atom } from 'recoil';
import { ClassificationState, DarkModeState } from '../types';

export const AtomCurrentPage = atom<string>({
	key: 'AtomCurrentPage',
	default: "/home",
});

export const AtomSearchValue = atom<{value: string,isClick:boolean}>({
	key: 'AtomSearchValue',
	default: {value: "" , isClick: false},
});

export const AtomDarkModeState = atom<DarkModeState>({
	key: 'AtomDarkModeState',
	default: {
		theme: 'default',
		systemTheme: 'not-ready',
	},
});

export const AtomClassification = atom<ClassificationState>({
	key: 'AtomClassification',
	default: {
		stuGrade: "",
		stuClass: "",
		stuName: "",
	},
});