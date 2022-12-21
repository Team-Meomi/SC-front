import { atom } from 'recoil';
// import { ColorTheme } from '../styles/theme';

// interface ThemeProps { 
// 	colorTheme: ColorTheme;
// 	toggleColorTheme: () => void;
//   }

export const AtomCurrentPage = atom<string>({
	key: 'AtomCurrentPage',
	default: "home",
});

export const AtomSearchValue = atom<{value: string,isClick:boolean}>({
	key: 'AtomSearchValue',
	default: {value: "" , isClick: false},
});
// export const AtomColorTheme = atom<ThemeProps>({
// 	key: 'AtomSearchValue',
// 	default:{
// 		colorTheme: {  
// 			MAIN: 'black',
// 			SUB: 'white',
// 			BACKGROUND: '#fdfdff',
// 		},
// 		toggleColorTheme: () => { // light || dark mode를 토글합니다.
// 			return null
// 		  },
// 	}     
// });