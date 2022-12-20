import * as S from "./styled";
import { useRouter } from "next/router";
import useSWR from 'swr';
import { ConferencesProps } from "../../types";

const HomeDetail = () => {
    const router = useRouter();
    const { data } = useSWR<ConferencesProps>("/conference");

    return (
      <>
        
      </>
    )
}

  export default HomeDetail