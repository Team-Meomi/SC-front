import * as S from "./styled";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { AtomCurrentPage } from "../../Atoms";
import { useRecoilState } from "recoil";
import { Memosearchicon, MemoProfileIcon } from "../../../public/svg";
import { Userprops } from "../../types";
import useSWR from "swr";

const Header = () => {
    const router = useRouter();
    const [currentPage, setCurrentPage] = useRecoilState(AtomCurrentPage);
    const { data , error } = useSWR<Userprops>(`/${router.query.postid}`);    
    // console.log(error);
  useEffect(() => {
    console.log(router.pathname);
    router.pathname === "/create" ? setCurrentPage("create") : setCurrentPage("home")
  },[router])

    return (
      <S.HeaderWapper>
        <S.LeftWapper>
          <div>S&C</div>
          <div style={{backgroundSize: currentPage == "home" ? "100% 100%" : "0% 100%"}} onClick={() => router.push('/home')}>홈</div>
          <div style={{backgroundSize: currentPage == "create" ? "100% 100%" : "0% 100%"}} onClick={() => router.push('/create')}>생성하기</div>
        </S.LeftWapper>
        <S.CenterWapper>
          <label><Memosearchicon /></label>
          <input type="text" placeholder="검색어를 입력해주세요"/>
        </S.CenterWapper>
        <S.RightWapper>
          <MemoProfileIcon onClick={() => router.push(`/user/${data?.stuNum}`)} />
        </S.RightWapper>
      </S.HeaderWapper>
    )
}

  export default Header