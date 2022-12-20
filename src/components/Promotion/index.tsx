import * as S from "./styled";
import { useRouter } from "next/router";

const Promotion = () => {
    const router = useRouter();

    return (
      <S.Wrapper>
          <S.TitleText>
              <p>Study</p>
              <span>&</span>
              <p>Conference</p>
          </S.TitleText>
          <S.BtnWrapper>
            <S.LoginBtn onClick={() => router.push(`/auth/signin`)}>login</S.LoginBtn>
            <S.SignUpBtn onClick={() => router.push(`/auth/signup`)}>sign up</S.SignUpBtn>
          </S.BtnWrapper>
      </S.Wrapper>
    )
}

  export default Promotion