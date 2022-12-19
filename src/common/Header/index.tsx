import * as S from "./styled";
import { useRouter } from "next/router";
import { useState } from "react";
import { AtomCurrentPage } from "../../Atoms";
import { useRecoilState } from "recoil";

const Header = () => {
    const router = useRouter();
    const [currentPage,] = useRecoilState(AtomCurrentPage);
    return (
      <S.HeaderWapper>
        <S.LeftWapper>
          <div>S&C</div>
          <div style={{backgroundSize: currentPage == "Home" ? "100% 100%" : "0% 100%"}} onClick={() => router.push('/home')}>홈</div>
          <div style={{backgroundSize: currentPage == "Create" ? "100% 100%" : "0% 100%"}} onClick={() => router.push('/create')}>생성하기</div>
        </S.LeftWapper>
        <S.RightWapper>
          <div>O</div>
        </S.RightWapper>
      </S.HeaderWapper>
    )
}

  export default Header