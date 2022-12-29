import * as S from "./styled";
import { useRouter } from "next/router";
import useSWR from 'swr';
import { Contant, Header } from "../../common";
import { MemoIntro } from "../../../public/svg";
import { MainPageProps } from "../../types";
import { StudyController } from "../../Utils/lib/urls";
import { AtomSearchValue } from "../../Atoms";
import { useRecoilState } from "recoil";
import { useEffect } from "react";
import { UseRole } from "../../Hooks";

const Home = () => {
    const router = useRouter();
    const [searchValue, SetSearchValue] = useRecoilState<{value: string,isClick:boolean}>(AtomSearchValue);
    const { data } = useSWR<MainPageProps[]>(StudyController.Study());
    const { data:SearchData, mutate} = useSWR<MainPageProps[]>(StudyController.StudySearch(searchValue.value));
    console.log(data);
    
    useEffect(() => {
      if(searchValue.isClick){
        SetSearchValue({value: "" , isClick: false})
        mutate()
      }
    },[searchValue.value])

    useEffect(() => {
      console.log(UseRole());
    },[])

    return (
      <S.Wrapper>
        <Header/>
      <S.HomeWrapper>
        <S.IntroWapper>
          <S.IntroductionWapper>
            <S.IntroTitle>당신의 전공실력을<br/>늘려보세요!</S.IntroTitle>
            <span>컨퍼런스 , 스터디를 통해<br/>학생들과 자신의 지식을<br/>공유해보세요!</span>
            <S.CreateBtn onClick={() => router.push("/create")}>생성하기</S.CreateBtn>
          </S.IntroductionWapper>
          <MemoIntro/>
        </S.IntroWapper>

        <S.ContansWapper>
        <S.ContansMainTitle>
          {searchValue.isClick ? `"${searchValue.value}" 에 대한 검색결과입니다` : `최근 한달간 게시글`}</S.ContansMainTitle>
        <S.Contants>
        {searchValue.isClick === false ? (
            data ? (data.map((item,index) => (
            <Contant
              key={index}
              id={item.id}
              title={item.title}
              category={item.category}
              date={item.date}
              type={item.type}
            />
            ))
            ):(
              <h3>게시글이 없습니다.</h3>
            )
          ) : (
            SearchData && SearchData.length !== 0? ( SearchData.map((item,index) => (
              <Contant
                key={index}
                id={item.id}
                title={item.title}
                category={item.category}
                date={item.date}
                type={item.type}
              />
            ))
            ):(
              <h3>검색결과가 없습니다</h3>
            )
        )}
        </S.Contants>

        </S.ContansWapper>
      </S.HomeWrapper>
      </S.Wrapper>
    )
}

export default Home