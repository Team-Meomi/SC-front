import { useRecoilState } from "recoil";
import { AtomDarkModeState } from "../Atoms";
import storage from "../Utils/lib/storage";

export default function UseToggleTheme() {
  const [darkModeState ,setDarkModeState] = useRecoilState(AtomDarkModeState);

  const save = (value: 'light' | 'dark') => {
    storage.setItem('theme', value); // For CSR
    // document.cookie = `theme=${value}; path=/;`; // For SSR
  }; 

  const toggle = () => {
    console.log(darkModeState.theme);
    if (!darkModeState.theme) return;
    if (darkModeState.theme === 'dark') {
      console.log("다크모드임");
      setDarkModeState({...darkModeState , theme:"light" })
      save('light');
    } else if(darkModeState.theme === 'light') {
      console.log("라이트모드임");
      setDarkModeState({...darkModeState , theme:"dark" })
      save('dark');
    }
  };

  return [darkModeState.theme, toggle] as const;
}