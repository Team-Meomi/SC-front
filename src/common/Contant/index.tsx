import * as S from "./styled";
import { useRouter } from "next/router";
import { useState } from "react";

const Header = () => {
    const router = useRouter();
    return (
      <S.Contant>
      <S.ContantTop>
        <p>동아리 잡탕 컨퍼런스 입니다</p>
        <S.ConferenceText>컨퍼런스</S.ConferenceText>
      </S.ContantTop>
      <S.ContantBottom>
        <S.Topic>Android</S.Topic>
        <S.Date>2022-12-16</S.Date>
      </S.ContantBottom>
    </S.Contant>
    )
}

  export default Header