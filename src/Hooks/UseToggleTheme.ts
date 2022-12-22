import { useRecoilState } from "recoil";
import { AtomDarkModeState } from "../Atoms";
import storage from "../Utils/lib/storage";

export default function UseToggleTheme() {
  const [darkModeState ,setDarkModeState] = useRecoilState(AtomDarkModeState);

  const save = (value: 'light' | 'dark') => {
    storage.setItem('theme', value); // For CSR
    document.cookie = `theme=${value}; path=/;`; // For SSR
  };
  console.log("저장하기");

  const toggle = () => {
    if (!darkModeState.theme) return;
    if (darkModeState.theme === 'dark') {
      console.log("다크모드임");
      setDarkModeState({...darkModeState , systemTheme:"light" })
      save('light');
    } else {
      console.log("라이트모드임");
      setDarkModeState({...darkModeState , systemTheme:"dark" })
      save('dark');
    }
  };

  return [darkModeState.theme, toggle] as const;
}