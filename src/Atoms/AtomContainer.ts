import { atom } from 'recoil';


export const AtomCurrentPage = atom<string>({
	key: 'AtomCurrentPage',
	default: "home",
});

export const AtomSearchValue = atom<{value: string,isClick:boolean}>({
	key: 'AtomSearchValue',
	default: {value: "" , isClick: false},
});