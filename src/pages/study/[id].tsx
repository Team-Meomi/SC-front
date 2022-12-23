import { GetServerSideProps, NextPage } from "next";
import { SWRConfig } from "swr";
import { HomeDetail } from "../../components";
import { UseGetToken } from "../../Hooks";
import { MainDetailProps } from "../../types";
import CustomAxios from "../../Utils/lib/CustomAxios";
import { StudyController } from "../../Utils/lib/urls";

const StudyDetailPage:NextPage<{fallback: Record<string,MainDetailProps>}> = ({fallback}) => {
    return (
      <SWRConfig value={fallback}>
        <HomeDetail />
      </SWRConfig>
    )
}

export const  getServerSideProps: GetServerSideProps = async (ctx) => {
  const { Authorization } = await UseGetToken(ctx)
  console.log(ctx.query.id);
  const { postid } = ctx.query;
  
    try {
      const {data:studyData} = await CustomAxios.get(StudyController.StudyId(ctx.query.id as string) ,{headers: {Authorization}});
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