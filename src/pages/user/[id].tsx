import { GetServerSideProps, NextPage } from "next";
import useSWR, { SWRConfig } from "swr";
import { Shead } from "../../common";
import { Profile } from "../../components";
import { UseGetToken } from "../../Hooks";
import { MainDetailProps, MainPageProps } from "../../types";
import CustomAxios from "../../Utils/lib/CustomAxios";
import { UserController } from "../../Utils/lib/urls";

const ProfilePage:NextPage<{fallback: Record<string,MainDetailProps>}> = ({fallback}) => {
    return (
      <>
      <SWRConfig value={fallback}>
        <Shead seoTitle={'프로필페이지'} />
        <Profile />
      </SWRConfig>
      </>
    )
}

export const  getServerSideProps: GetServerSideProps = async (ctx) => {
    const id = ctx.query.id as string;
    const { Authorization } = await UseGetToken(ctx)
    try {
      const {data:profileData} = await CustomAxios.get(UserController.UserJoined(id),{headers: {Authorization}});
      const {data:WrittenData} = await CustomAxios.get(UserController.UserWritten(id),{headers: {Authorization}});
      return {
        props: {
          fallback:{
            [UserController.UserJoined(id)]:profileData,
            [UserController.UserWritten(id)]:WrittenData
          }
        },
    };
    } catch (e) {
      console.log(e);
      return { props: {} };
    }
  }

  export default ProfilePage