import * as S from "./styled";
import { useRouter } from "next/router";
import { ProfileIcon } from "../../../public/svg";
import { useState } from "react";
import useSWR from "swr";
import { MainPageProps, Userprops } from "../../types";

const Profile = () => {
    const router = useRouter();
    const [ isOutline,setIsOutline] = useState(false);
    const { data:myData ,} = useSWR<Userprops>(`/${router.query.postid}`);
    const { data } = useSWR<MainPageProps>(`/`);

    return (
      <S.Wrapper>
        <S.LeftWrapper>
            <ProfileIcon />
            <S.ProfileName>{myData?.stuNum}{myData?.name}</S.ProfileName>
        </S.LeftWrapper>
        <S.RightWrapper>
        <S.KindBar>
          <span style={{color: isOutline ? "#77D6B3" : "#999999" }} onClick={() => setIsOutline(true)}>개설함</span>
          <div>|</div>
          <span style={{color: isOutline ? "#999999" : "#77D6B3"}} onClick={() => setIsOutline(false)}>신청함</span>
        </S.KindBar>

      <S.ContantWrapper>

    <S.Contant>
      <S.ContantTop>
        <p>동아리 잡탕 컨퍼런스입니다</p>
        <S.ConferenceText>컨퍼런스</S.ConferenceText>
      </S.ContantTop>
      <S.ContantBottom>
        <S.Topic>Android</S.Topic>
        <S.Date>2022-12-16</S.Date>
      </S.ContantBottom>
    </S.Contant>
    
    </S.ContantWrapper>



        </S.RightWrapper>
      </S.Wrapper>
    )
}

  export default Profile