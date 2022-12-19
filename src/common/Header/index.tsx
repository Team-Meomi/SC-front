import * as S from "./styled";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { AtomCurrentPage } from "../../Atoms";
import { useRecoilState } from "recoil";

const Header = () => {
    const router = useRouter();
    const [currentPage, setCurrentPage] = useRecoilState(AtomCurrentPage);

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
        <S.RightWapper>
          <div>O</div>
        </S.RightWapper>
      </S.HeaderWapper>
    )
}

  export default Header