import * as S from "./styled";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { AtomCurrentPage, AtomSearchValue } from "../../Atoms";
import { useRecoilState } from "recoil";
import { Memosearchicon, MemoProfileIcon } from "../../../public/svg";
import useSWR from "swr";
import { Userprops } from "../../types";

const Header = () => {
    const router = useRouter();
    const [currentPage, setCurrentPage] = useRecoilState(AtomCurrentPage);
    const { data, error } = useSWR<Userprops>(`/`);
    const [searchValue, SetSearchValue] = useRecoilState<{value: string,isClick:boolean}>(AtomSearchValue);
      
  useEffect(() => {
    router.pathname === "/create" ? setCurrentPage("create") : setCurrentPage("home")
  },[router])

  const handleClick = () => {
    SetSearchValue({...searchValue , isClick:true})
      
  }

    return (
      <S.HeaderWapper>
        <S.LeftWapper>
          <div>S&C</div>
          <div style={{backgroundSize: currentPage == "home" ? "100% 100%" : "0% 100%"}} onClick={() => router.push('/home')}>홈</div>
          <div style={{backgroundSize: currentPage == "create" ? "100% 100%" : "0% 100%"}} onClick={() => router.push('/create')}>생성하기</div>
        </S.LeftWapper>
        <S.CenterWapper>
          <input type="text" value={searchValue.value} onChange={(e) => SetSearchValue({...searchValue,value:e.target.value})}  placeholder="검색어를 입력해주세요"/>
          <label onClick={handleClick}><Memosearchicon /></label>
        </S.CenterWapper>
        <S.RightWapper>
          <S.ProfileBox onClick={() => router.push(`/user/${data?.id}`)}>
            <MemoProfileIcon/>
          </S.ProfileBox>
        </S.RightWapper>
      </S.HeaderWapper>
    )
}

export default Header