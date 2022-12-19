import * as S from "./styled";
import { useRouter } from "next/router";
import useSWR from 'swr';
import { ConferencesProps } from "../../types";
import { Header } from "../../common";
import { Intro } from "../../../public/svg";

const Home = () => {
    const router = useRouter();
    // const { data } = useSWR<ConferencesProps>("/conference");
    return (
      <S.HomeWapper>
        <Header/>
        <S.IntroWapper>
          <S.IntroductionWapper>
            <S.IntroTitle>당신의 전공실력을<br/>늘려보세요!</S.IntroTitle>
            <span>컨퍼런스 , 스터디를 통해<br/>학생들과 자신의 지식을<br/>공유해보세요!</span>
            <S.CreateBtn>생성하기</S.CreateBtn>
          </S.IntroductionWapper>
          <Intro/>
        </S.IntroWapper>
        {/* <S.InputBox>
          <input type="text" />
          <label>o</label>
        </S.InputBox> */}
        <S.Contans>

          {/* <S.Contant>
            <S.ContantTop>
              <p>동아리 잡탕 컨퍼런스 입니다</p>
              <S.ConferenceText>컨퍼런스</S.ConferenceText>
            </S.ContantTop>
            <S.ContantBottom>
              <S.Topic>🟢Android</S.Topic>
              <S.Date>2022-12-16</S.Date>
            </S.ContantBottom>
          </S.Contant> */}

        </S.Contans>
      </S.HomeWapper>
    )
}

export default Home