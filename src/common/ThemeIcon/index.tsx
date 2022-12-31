import { MoonIcon, SunIcon } from "../../../public/svg";
import UseToggleTheme from "../../Hooks/UseToggleTheme";

const ThemeIcon = () => {
    const [theme,] = UseToggleTheme();
    return(
        <>
        {
            theme === "light" ? (
                <SunIcon width={30}/>
            ) : (
                <MoonIcon width={27} style={{color:"white"}}/>
            )
        }
        </>
    )
}

export default ThemeIcon