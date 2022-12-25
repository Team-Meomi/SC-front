import { NextPage } from "next";
import { Shead } from "../../common";
import { Create } from "../../components";

const CreatePage:NextPage = () => {
  return (
    <>
      <Shead seoTitle={'게시글생성페이지'} />
      <Create />
    </>
  );
}

export default CreatePage