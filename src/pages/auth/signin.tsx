import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Shead } from "../../common";
import { Signin } from "../../components";
import {UseGetTokenDom} from "../../Hooks";

const SignupPage:NextPage = () => {
  const router = useRouter();
  useEffect(() => {
    const {RefreshToken} = UseGetTokenDom();
    if(RefreshToken){
      router.push('/home');
    }
  },[])
  return (
    <>
      <Shead seoTitle={'로그인페이지'} />
      <Signin />
    </>
  );
}
export default SignupPage