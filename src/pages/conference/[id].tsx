import { GetServerSideProps, NextPage } from "next";
import { SWRConfig } from "swr";
import { Conference } from "../../components";
import { UseGetToken } from "../../Hooks";
import { ConferencesProps } from "../../types";
import CustomAxios from "../../Utils/lib/CustomAxios";

const ConferenceDetailPage:NextPage<{fallback: Record<string,ConferencesProps>}> = ({fallback}) => {
    return (
      <SWRConfig value={fallback}>
        <Conference />
      </SWRConfig>
    )
}

export const  getServerSideProps: GetServerSideProps = async (ctx) => {
    const { postid } = ctx.query;  
    const { Authorization } = await UseGetToken(ctx)

    try {
      const {data:conferenceDetailData} = await CustomAxios.get(`/conference${postid}`,{headers: {Authorization}});
      return {
        props: {
          fallback: {
            '/conference/1' : conferenceDetailData,
          },
        },
      };
    } catch (e) {
      console.log(e);
      return { props: {} };
    }
  }

  export default ConferenceDetailPage