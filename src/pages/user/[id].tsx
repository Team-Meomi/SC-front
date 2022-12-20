import { GetServerSideProps, NextPage } from "next";
import { SWRConfig } from "swr";
import { HomeDetail, Profile } from "../../components";
import { UseGetToken } from "../../Hooks";
import { MainDetailProps } from "../../types";
import CustomAxios from "../../Utils/lib/CustomAxios";

const ProfilePage:NextPage<{fallback: Record<string,MainDetailProps>}> = ({fallback}) => {
    return (
      <SWRConfig value={fallback}>
        <Profile />
      </SWRConfig>
    )
}

export const  getServerSideProps: GetServerSideProps = async (ctx) => {
    const { postid } = ctx.query;  
    const { Authorization } = await UseGetToken(ctx)

    try {
      const {data:profileData} = await CustomAxios.get(`/${postid}`,{headers: {Authorization}});
      return {
        props: {
          fallback: {
            '/1' : profileData,
          },
        },
      };
    } catch (e) {
      console.log(e);
      return { props: {} };
    }
  }

  export default ProfilePage