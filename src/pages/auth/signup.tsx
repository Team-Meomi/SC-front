import { NextPage } from "next";
import { Shead } from "../../common";
import { Signup } from "../../components";

const SignupPage:NextPage = () => {
  return (
    <>
      <Shead seoTitle={'회원가입페이지'} />
      <Signup />
    </>
  );
}
export default SignupPage