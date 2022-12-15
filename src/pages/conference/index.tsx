import { GetServerSideProps, NextPage } from "next";
import { SWRConfig } from "swr";
import { Conference } from "../../components";
import { UseGetToken } from "../../Hooks";
import { ConferencesProps } from "../../types";
import CustomAxios from "../../Utils/lib/CustomAxios";

const ConferencePage:NextPage<{fallback: Record<string,ConferencesProps[]>}> = ({fallback}) => {
    return (
      <SWRConfig value={fallback}>
        <Conference />
      </SWRConfig>
    )
}

export const  getServerSideProps: GetServerSideProps = async (ctx) => {
    const { Authorization } = await UseGetToken(ctx)

    try {
      const {data} = await CustomAxios.get(`/conference`,{headers: {Authorization}});
      const conferences = data.list
      return {
        props: {
          fallback: {
            '/conference' : conferences,
          },
        },
      };
    } catch (e) {
      console.log(e);
      return { props: {} };
    }
  }

  export default ConferencePage