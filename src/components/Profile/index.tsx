import * as S from "./styled";
import { useRouter } from "next/router";
import { BackBtnIcon, LogoutIcon, MemoAloneicon, MemoProfileIcon } from "../../../public/svg";
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
          <BackBtnIcon />
        </S.BackBtn>
        <S.LogoutBtn onClick={handleLogoutClick}>
          <LogoutIcon />
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
          JoinedData && JoinedData.length !== 0 ? ( JoinedData.map((item,index) => (
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