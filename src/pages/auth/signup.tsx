import { NextPage } from "next";
import { useEffect } from "react";
import { Shead } from "../../common";
import { Signup } from "../../components";
import { UseRoleDirect } from "../../Hooks";

const SignupPage:NextPage = () => {
  const onRoleDirect = UseRoleDirect()
  useEffect(() => {
    onRoleDirect()
  },[])
  return (
    <>
      <Shead seoTitle={'회원가입페이지'} />
      <Signup />
    </>
  );
}
export default SignupPage