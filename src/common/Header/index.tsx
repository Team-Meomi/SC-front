import * as S from "./styled";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { AtomCurrentPage, AtomSearchValue } from "../../Atoms";
import { useRecoilState } from "recoil";
import { MemoProfileIcon, MoonIcon, SearchIcon, SunIcon } from "../../../public/svg";
import useSWR from "swr";
import { Userprops } from "../../types";
import UseToggleTheme from "../../Hooks/UseToggleTheme";
import { UseThemeEffect } from "../../Hooks";

const Header = () => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useRecoilState(AtomCurrentPage);
  const { data } = useSWR<Userprops>(`/user/`);
  const [searchValue, SetSearchValue] = useRecoilState<{value: string,isClick:boolean}>(AtomSearchValue);  
  const [theme , toggle] = UseToggleTheme();
  
  UseThemeEffect()
  useEffect(() => {
    router.pathname === "/create" ? setCurrentPage("create") : setCurrentPage("home")
  },[router])

  const handleClick = () => {
    SetSearchValue({...searchValue , isClick:true})   
  }
  
  const handleDarkBtnClick = () => {    
    console.log(theme);
    toggle();
  }

    return (
      <S.HeaderWapper>  
        <S.LeftWapper>
          <div>S&C</div>
          <div style={{backgroundSize: currentPage == "home" ? "100% 100%" : "0% 100%"}} onClick={() => router.push('/home')}>홈</div>
          <div style={{backgroundSize: currentPage == "create" ? "100% 100%" : "0% 100%"}} onClick={() => router.push('/create')}>생성하기</div>
        </S.LeftWapper>
        {
          currentPage === "home" ? (
          <S.CenterWapper>
            <input type="text" value={searchValue.value} onChange={(e) => SetSearchValue({...searchValue,value:e.target.value})}  placeholder="검색어를 입력해주세요" 
            onKeyDown={(e:any) => {if (e.key === 'Enter'){handleClick()}}}
            />
            <label onClick={handleClick}><SearchIcon /></label>
          </S.CenterWapper>
          ) : (
            <div/>
          )
        }
        <S.RightWapper>
        <S.DarkModeBtn onClick={handleDarkBtnClick}>
          {
            theme === "light" ? (
              <SunIcon width={30}/>
            ) : (
              <MoonIcon width={27} style={{color:"white"}}/>
            )
          }
          </S.DarkModeBtn>
          <S.ProfileBox onClick={() => router.push(`/user/${data?.id}`)}>
            <MemoProfileIcon/>
          </S.ProfileBox>
        </S.RightWapper>
      </S.HeaderWapper>
    )
}

export default Header