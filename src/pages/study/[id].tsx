import { GetServerSideProps, NextPage } from "next";
import { SWRConfig } from "swr";
import { HomeDetail } from "../../components";
import { UseGetToken } from "../../Hooks";
import { MainDetailProps } from "../../types";
import CustomAxios from "../../Utils/lib/CustomAxios";

const StudyDetailPage:NextPage<{fallback: Record<string,MainDetailProps>}> = ({fallback}) => {
    return (
      <SWRConfig value={fallback}>
        <HomeDetail />
      </SWRConfig>
    )
}

export const  getServerSideProps: GetServerSideProps = async (ctx) => {
    const { postid } = ctx.query;  
    const { Authorization } = await UseGetToken(ctx)

    try {
      const {data:studyData} = await CustomAxios.get(`/study/${postid}` ,{headers: {Authorization}});
      return {
        props: {
          fallback: {
            '/study/1' : studyData,
          },
        },
      };
    } catch (e) {
      console.log(e);
      return { props: {} };
    }
  }

  export default StudyDetailPage