import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { AtomDarkModeState } from '../Atoms';
import storage from '../Utils/lib/storage';
 
const UseThemeEffect = () => {
  const [darkModeState ,setDarkModeState] = useRecoilState(AtomDarkModeState);
  
  useEffect(() => {
    if(!storage.getItem('theme')) {
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)',).matches;
      setDarkModeState({...darkModeState , theme:systemPrefersDark ? 'dark' : 'light'});
      document.body.dataset.theme = systemPrefersDark ? 'dark' : "light"
      storage.setItem('theme', systemPrefersDark ? 'dark' : "light"); // For CSR
      console.log("콘솔출력이 안되야됨");
    }else {
      setDarkModeState({...darkModeState , theme: storage.getItem('theme')})
      document.body.dataset.theme = storage.getItem('theme')
    }
  }, []);
}
export default UseThemeEffect;