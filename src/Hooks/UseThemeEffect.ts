import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { AtomDarkModeState } from '../Atoms';
 
export default function UseThemeEffect() {
  const [darkModeState ,setDarkModeState] = useRecoilState(AtomDarkModeState);
  useEffect(() => {
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)',).matches;
    setDarkModeState({...darkModeState , systemTheme:systemPrefersDark ? 'dark' : 'light'});
  }, [darkModeState]);

  useEffect(() => {
    if (darkModeState.theme !== 'default') {
      document.body.dataset.theme = darkModeState.theme;
    }
  }, [darkModeState.theme]);
}