import { GetServerSideProps, NextPage } from "next";
import { SWRConfig } from "swr";
import { Shead } from "../../common";
import { Admin } from "../../components";
import { UseGetToken } from "../../Hooks";
import { MainPageProps } from "../../types";
import CustomAxios from "../../Utils/lib/CustomAxios";
import { AdminController } from "../../Utils/lib/urls";

const AdminPage:NextPage<{fallback: Record<string,MainPageProps[]>}> = ({fallback}) => {
  return (
    <>
      <SWRConfig value={fallback}>
        <Shead seoTitle={'어드민페이지'} />
        <Admin />
      </SWRConfig>
    </>
  );
}

export const  getServerSideProps: GetServerSideProps = async (ctx) => {
  const { Authorization } = await UseGetToken(ctx);
  try {
    const {data:audiovisualData} = await CustomAxios.get(AdminController.AdminKind("audiovisual"),{headers: {Authorization}});
    const {data:homebaseData} = await CustomAxios.get(AdminController.AdminKind("homebase"),{headers: {Authorization}});
    return {
      props: {
        fallback: {
          [AdminController.AdminKind("audiovisual")] : audiovisualData,
          [AdminController.AdminKind("homebase")] : homebaseData,
        },
      },
    };
  } catch (e) {
    console.log(e);
    return { props: {} };
  }
}

export default AdminPage