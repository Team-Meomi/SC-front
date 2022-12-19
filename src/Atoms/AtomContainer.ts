import { atom } from 'recoil';

export const AtomName = atom<string>({
	key: 'AtomName',
	default: "",
});

export const AtomCurrentPage = atom<string>({
	key: 'AtomCurrentPage',
	default: "home",
});