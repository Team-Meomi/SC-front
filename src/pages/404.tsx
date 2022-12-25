import { NextPage } from "next";
import { Shead } from "../common";
import { Error } from "../components";

const NotFoundPage:NextPage = () => {
    return (
      <>
        <Shead seoTitle={"404페이지"} />
        <Error title={"404페이지 입니다."} />
      </>
    )
  }
  
export default NotFoundPage;