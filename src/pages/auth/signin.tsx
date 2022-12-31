import { NextPage } from "next";
import { useRouter } from "next/router";
import { parseCookies } from "nookies";
import { useEffect } from "react";
import { Shead } from "../../common";
import { Signin } from "../../components";
import { UseRoleDirect } from "../../Hooks";

const SignupPage:NextPage = () => {
  const onRoleDirect = UseRoleDirect()
  useEffect(() => {
    onRoleDirect()
  },[])
  return (
    <>
      <Shead seoTitle={'로그인페이지'} />
      <Signin />
    </>
  );
}
export default SignupPage