import * as S from "./styled";
import { useRouter } from "next/router";
import useSWR from 'swr';
import { ConferencesProps } from "../../types";

const Home = () => {
    const router = useRouter();
    // const { data } = useSWR<ConferencesProps>("/conference");
    return (
      <S.HomeWapper>
        <S.Header>
            
        </S.Header>
        <S.CreateBtnsWapper>
          <S.CreateBtn>
              컨퍼런스<br/>만들기
          </S.CreateBtn>
          <S.CreateBtn>
              스터디<br/>만들기
          </S.CreateBtn>
        </S.CreateBtnsWapper>
        <S.InputBox>
          <input type="text" />
          <label>o</label>
        </S.InputBox>
        <S.Contans>

          <S.Contant>
            <S.ContantTop>
              <p>동아리 잡탕 컨퍼런스 입니다</p>
              <S.ConferenceText>컨퍼런스</S.ConferenceText>
            </S.ContantTop>
            <S.ContantBottom>
              <S.Topic>🟢Android</S.Topic>
              <S.Date>2022-12-16</S.Date>
            </S.ContantBottom>
          </S.Contant>

        </S.Contans>
      </S.HomeWapper>
    )
}

export default Home