import type { NextPage } from 'next'
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { AtomDarkModeState } from '../Atoms';
import { Promotion } from '../components';
import storage from '../Utils/lib/storage';

// const loadTheme = () => {
//   const [darkModeState ,setDarkModeState] = useRecoilState(AtomDarkModeState);
//   const theme = storage.getItem('theme');
//   if (!theme) return;
//   if (theme === 'dark') {
//     console.log("dark");
//     setDarkModeState({...darkModeState , systemTheme:"dark" })
//   } else {
//     setDarkModeState({...darkModeState , systemTheme:"light" })
//   }
//   document.body.dataset.theme = theme;
// };

const PromotionPage: NextPage = () => {
  // useEffect(() => {
  //   loadTheme();
  // },[])
  return (
      <>
       <Promotion />
      </>
  )
}

export default PromotionPage