import { atom } from 'recoil';

export const AtomName = atom<string>({
	key: 'AtomName',
	default: "",
});