import { useRecoilState } from 'recoil';
import { AtomDarkModeState } from '../Atoms';

export function useTheme() {
  const [darkModeState ,setDarkModeState] = useRecoilState(AtomDarkModeState);
  const theme = (() => {
    if (darkModeState.systemTheme === 'not-ready') return 'light';
    if (darkModeState.theme !== 'default') return darkModeState.theme;
    return darkModeState.systemTheme;
  })();

  return theme;
}