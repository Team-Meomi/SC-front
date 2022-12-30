import * as S from "./styled";
import { useRouter } from "next/router";
import { BackBtnIcon, LogoutIcon, MemoAloneicon, MemoProfileIcon, SquareIcon } from "../../../public/svg";
import { useState } from "react";
import useSWR from "swr";
import { MainPageProps, Userprops } from "../../types";
import { UseRemoveToken } from "../../Hooks";
import { categoryArray } from "../../Utils/categoryArray";
import { UserController } from "../../Utils/lib/urls";
import { Header } from "../../common";

const Profile = () => {
    const router = useRouter();
    const [isOutline,setIsOutline] = useState(true);
    const id = router.query.id as string;
    const { data:ProfileData} = useSWR<Userprops>(UserController.User(id));
    const { data:MyData } = useSWR<Userprops>(UserController.UserBase());
    const { data:JoinedData } = useSWR<MainPageProps[]>(UserController.UserJoined(id));
    const { data:WrittenData } = useSWR<MainPageProps[]>(UserController.UserWritten(id));
    
    const handleLogoutClick = () => {
      router.push('/');
      UseRemoveToken();
    }
        
    return (
      <S.Wrapper>
        <Header />
        <S.ProfileWrapper>
        <S.LeftWrapper>
        <S.BackBtn onClick={() => router.back()}>
          <BackBtnIcon/>
        </S.BackBtn>
        <S.LogoutBtn onClick={handleLogoutClick}>
        {
          ProfileData?.id === MyData?.id &&
          <LogoutIcon />
        }
        </S.LogoutBtn>
            <MemoProfileIcon />
            <S.ProfileName onClick={() => {router.push(`/user/${ProfileData?.id}`)}}>{ProfileData?.stuNum} {ProfileData?.name}</S.ProfileName>
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
              <S.Topic>
                <SquareIcon color={categoryArray.filter((i) => i.value === item.category)[0]?.color}/>
                {item.category}
              </S.Topic>
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
                <S.Topic>
                  <SquareIcon color={categoryArray.filter((i) => i.value === item.category)[0]?.color}/>
                  {item.category}
                </S.Topic>
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
        </S.ProfileWrapper>
      </S.Wrapper>
    )
}

  export default Profile