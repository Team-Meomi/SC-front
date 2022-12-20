import * as S from "./styled";
import { useRouter } from "next/router";
import useSWR from 'swr';
import { MainDetailProps } from "../../types";
import { Header } from "../../common";
import { ProfileIcon } from "../../../public/svg";

const HomeDetail = () => {
    const router = useRouter();
    console.log(router.asPath);
    // const { data } = useSWR<MainDetailProps>(`${router.query}/${router.query.id}`);
    return (
      <>
      <Header/>
      <S.HomeDetailWapper>
        <S.LeftWapper>
        <S.BackBtn>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
        </S.BackBtn>
        <S.DecsWapper>
          <S.DecsTitle>동아리 잡탕 컨퍼런스입니다</S.DecsTitle>
          <S.DecsContent>전공동아리 시간에 동아리 잡탕에서 
            컨퍼런스를 할 계획입니다.</S.DecsContent>
          <span>전공 : AOS</span>
          <span>날짜 : 11월 23일</span>
          <span>장소 : 시청각실</span>
          <span>현재인원 : 4/18 명</span>
          <span>개설자 : 2406 박서준</span>
        </S.DecsWapper>
        <S.SubmitBtn>신청하기</S.SubmitBtn>
        </S.LeftWapper>
      
        <S.RightWapper>
    
          <S.Participant>
            <ProfileIcon/>
            <span>2209김영희</span>
          </S.Participant>
          <S.Participant>
            <ProfileIcon/>
            <span>2209김영희</span>
          </S.Participant>
          <S.Participant>
            <ProfileIcon/>
            <span>2209김영희</span>
          </S.Participant>
          <S.Participant>
            <ProfileIcon/>
            <span>2209김영희</span>
          </S.Participant>
          <S.Participant>
            <ProfileIcon/>
            <span>2209김영희</span>
          </S.Participant>
          
        </S.RightWapper>
      
      </S.HomeDetailWapper>
      </>
    )
}

export default HomeDetail