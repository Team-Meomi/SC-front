import { atom } from 'recoil';

export type DarkModeState = {
	theme: 'dark' | 'light' | 'default';
	systemTheme: 'dark' | 'light' | 'not-ready';
  };

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