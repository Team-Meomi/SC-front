import { atom } from 'recoil';


export const AtomCurrentPage = atom<string>({
	key: 'AtomCurrentPage',
	default: "home",
});