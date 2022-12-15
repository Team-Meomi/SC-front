import * as S from "./styled";
import { useRouter } from "next/router";
import useSWR from 'swr';
import { ConferencesProps } from "../../types";

const ConferenceDetail = () => {
    const router = useRouter();
    const { data:conferenceDtailData , mutate } = useSWR<ConferencesProps>(`/get/${router.query.postid}`);

    return (
      <>
        
      </>
    )
}

  export default ConferenceDetail