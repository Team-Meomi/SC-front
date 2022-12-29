import { GetServerSideProps, NextPage } from "next";
import { Shead } from "../../common";
import { Admin } from "../../components";
import { UseGetToken, UseRole } from "../../Hooks";
import { MainPageProps } from "../../types";
import CustomAxios from "../../Utils/lib/CustomAxios";
import { StudyController } from "../../Utils/lib/urls";

const HomePage:NextPage<{fallback: Record<string,MainPageProps[]>}> = ({fallback}) => {
  return (
    <>
      {/* <SWRConfig value={fallback}> */}
        <Shead seoTitle={'어드민페이지'} />
        <Admin />
      {/* </SWRConfig> */}
    </>
  );
}

// export const  getServerSideProps: GetServerSideProps = async (ctx) => {
//   const { Authorization } = await UseGetToken(ctx);
//   const role = await UseRole();
//   try {
//     const {data} = await CustomAxios.get(StudyController.Study(role), {headers: {Authorization}});
//     return {
//       props: {
//         fallback: {
//           [StudyController.Study(role)] : data,
//         },
//       },
//     };
//   } catch (e) {
//     console.log(e);
//     return { props: {} };
//   }
// }

export default HomePage