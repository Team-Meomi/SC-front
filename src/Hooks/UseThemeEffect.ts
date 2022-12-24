import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { AtomDarkModeState } from '../Atoms';
import storage from '../Utils/lib/storage';
 
const UseThemeEffect = () => {
  const [darkModeState ,setDarkModeState] = useRecoilState(AtomDarkModeState);
  console.log(storage.getItem('theme'));
  
  useEffect(() => {
    if(!storage.getItem('theme')) {
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)',).matches;
      setDarkModeState({...darkModeState , theme:systemPrefersDark ? 'dark' : 'light'});
      document.body.dataset.theme = systemPrefersDark ? 'dark' : "light"
      console.log("콘솔출력이 안되야됨");
    }else {
      setDarkModeState({...darkModeState , theme: storage.getItem('theme')})
      document.body.dataset.theme = storage.getItem('theme')
    }
  }, []);
  console.log(darkModeState.theme);

  // useEffect(() => {
  //   if (darkModeState.theme !== 'default') {
  //     document.body.dataset.theme = darkModeState.theme;
  //   }
  // }, [darkModeState.theme]);
}
export default UseThemeEffect;