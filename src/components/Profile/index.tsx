import * as S from "./styled";
import { useRouter } from "next/router";
import { MemoAloneicon, MemoProfileIcon } from "../../../public/svg";
import { useState } from "react";
import useSWR from "swr";
import { MainPageProps, Userprops } from "../../types";
import { UseRemoveToken } from "../../Hooks";

const Profile = () => {
    const router = useRouter();
    const [isOutline,setIsOutline] = useState(true);
    const { data:myData} = useSWR<Userprops>(`/user/${router.query.id}`);
    const { data:JoinedData } = useSWR<MainPageProps[]>(`/user/joined/${router.query.id}`);
    const { data:WrittenData } = useSWR<MainPageProps[]>(`/user/written/${router.query.id}`);

    const handleLogoutClick = () => {
      UseRemoveToken()
      router.push('/');
    }
    
    return (
      <S.Wrapper>
        <S.LeftWrapper>
        <S.BackBtn onClick={() => router.back()}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
        </S.BackBtn>
        <S.LogoutBtn onClick={handleLogoutClick}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
          </svg>
        </S.LogoutBtn>
            <MemoProfileIcon />
            <S.ProfileName>{myData?.stuNum}{myData?.name}</S.ProfileName>
        </S.LeftWrapper>
        <S.RightWrapper>
        <S.KindBar>
          <span style={{color: isOutline ? "#77D6B3" : "#999999" }} onClick={() => setIsOutline(true)}>개설함</span>
          <div>|</div>
          <span style={{color: isOutline ? "#999999" : "#77D6B3"}} onClick={() => setIsOutline(false)}>신청함</span>
        </S.KindBar>
      
      <S.ContantWrapper>
      {isOutline ? (
           WrittenData && WrittenData.length !== 0 ? (WrittenData.map((item,index) => (
          <S.Contant key={index} onClick={() => router.push(`/study/${item.id}`)}>
            <S.ContantTop>
              <p>{item.title}</p>
              <S.ConferenceText>{item.type}</S.ConferenceText>
            </S.ContantTop>
            <S.ContantBottom>
              <S.Topic>{item.category}</S.Topic>
              <S.Date>{item.date}</S.Date>
            </S.ContantBottom>
          </S.Contant>
          ))
        ):(
          <MemoAloneicon />
        )
      ) : ( 
          JoinedData ? ( JoinedData.map((item,index) => (
            <S.Contant key={index} onClick={() => router.push(`/study/${item.id}`)}>
              <S.ContantTop>
                <p>{item.title}</p>
                <S.ConferenceText>{item.type}</S.ConferenceText>
              </S.ContantTop>
              <S.ContantBottom>
                <S.Topic>{item.category}</S.Topic>
                <S.Date>{item.date}</S.Date>
              </S.ContantBottom>
            </S.Contant>
          ))
          ) : (
            <MemoAloneicon />
          )
      )}
    </S.ContantWrapper>

        </S.RightWrapper>
      </S.Wrapper>
    )
}

  export default Profile