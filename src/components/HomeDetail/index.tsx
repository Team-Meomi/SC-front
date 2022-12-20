import * as S from "./styled";
import { useRouter } from "next/router";
import useSWR from 'swr';
import { MainDetailProps } from "../../types";
import { Header } from "../../common";

const HomeDetail = () => {
    const router = useRouter();
    console.log(router.pathname);
    // const { data } = useSWR<MainDetailProps>(`${router.query}/${router.query.id}`);
    return (
      <>
      <Header/>
      <S.HomeDetailWapper>
      
      </S.HomeDetailWapper>
      </>
    )
}

export default HomeDetail