import { NextPage } from "next";
import { Shead } from "../common"
import { Error } from "../components";

const ErrorPage:NextPage = ({ statusCode }:any) => {
    return (
      <>
        <Shead seoTitle={statusCode? `${statusCode} 페이지`: '404페이지'} />
        <Error title={statusCode ? `${statusCode}페이지 입니다.`: '404페이지 입니다.'}/>
      </>
    )
  }
  
  ErrorPage.getInitialProps = ({ res, err }:any) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
  }
  
  export default ErrorPage