import { GetServerSideProps, NextPage } from "next";
import { SWRConfig } from "swr";
import { Shead } from "../../common";
import { HomeDetail } from "../../components";
import { UseGetToken } from "../../Hooks";
import { MainDetailProps } from "../../types";
import CustomAxios from "../../Utils/lib/CustomAxios";
import { CommentController, StudyController } from "../../Utils/lib/urls";

const StudyDetailPage:NextPage<{fallback: Record<string,MainDetailProps>}> = ({fallback}) => {
    return (
      <SWRConfig value={fallback}>
        <Shead seoTitle={'디테일페이지'} />
        <HomeDetail />
      </SWRConfig>
    )
}

export const  getServerSideProps: GetServerSideProps = async (ctx) => {
  const { Authorization } = await UseGetToken(ctx)
  const id = ctx.query.id as string
    
    try {
      const {data:studyData} = await CustomAxios.get(StudyController.StudyId(id),{headers: {Authorization}});
      const { data:CommentData } = await CustomAxios.get(CommentController.Comment(id),{headers: {Authorization}});
      return {
        props: {
          fallback: {
            [StudyController.StudyId(id)]:studyData,
            [CommentController.Comment(id)]:CommentData,
          },
        },
      };
    } catch (e) {
      console.log(e);
      return { props: {} };
    }
  }

  export default StudyDetailPage