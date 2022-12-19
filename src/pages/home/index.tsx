import { GetServerSideProps, NextPage } from "next";
import { SWRConfig } from "swr";
import { Home } from "../../components";
import { UseGetToken } from "../../Hooks";
import { MainPageProps } from "../../types";
import CustomAxios from "../../Utils/lib/CustomAxios";
import { MainPageController } from "../../Utils/lib/urls";

const HomePage:NextPage<{fallback: Record<string,MainPageProps[]>}> = ({fallback}) => {
  return (
      <SWRConfig value={fallback}>
        <Home />
      </SWRConfig>
  );
}

export const  getServerSideProps: GetServerSideProps = async (ctx) => {
  const { Authorization } = await UseGetToken(ctx)

  try {
    const {data} = await CustomAxios.get(MainPageController.MainPage(),{headers: {Authorization}});
    const mainaPageData = data.list
    return {
      props: {
        fallback: {
          'user/mainpage' : mainaPageData,
        },
      },
    };
  } catch (e) {
    console.log(e);
    return { props: {} };
  }
}

export default HomePage