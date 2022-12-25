import { NextPage } from "next";
import { Shead } from "../../common";
import { Signin } from "../../components";

const SignupPage:NextPage = () => {
  return (
    <>
      <Shead seoTitle={'로그인페이지'} />
      <Signin />
    </>
  );
}
export default SignupPage