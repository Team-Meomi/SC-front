import * as S from "./styled";
import { useRouter } from "next/router";
import useSWR from 'swr';
import { Contant, Header } from "../../common";
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

        <S.ContansWapper>
        <S.ContansMainTitle>12 월 최신글</S.ContansMainTitle>

        <S.Contants>

        <Contant/>
        <Contant/>
        <Contant/>
        <Contant/>
        <Contant/>
        <Contant/>
          
        </S.Contants>

        </S.ContansWapper>
      </S.HomeWapper>
    )
}

export default Home