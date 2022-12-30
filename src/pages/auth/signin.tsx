import { NextPage } from "next";
import { useRouter } from "next/router";
import { parseCookies } from "nookies";
import { useEffect } from "react";
import { Shead } from "../../common";
import { Signin } from "../../components";

const SignupPage:NextPage = () => {
  const router = useRouter();
  useEffect(() => {
    const {RefreshToken} = parseCookies()
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