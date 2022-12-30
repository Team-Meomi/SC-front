import { NextPage } from "next";
import { useRouter } from "next/router";
import { parseCookies } from "nookies";
import { useEffect } from "react";
import { Shead } from "../../common";
import { Signup } from "../../components";

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
      <Shead seoTitle={'회원가입페이지'} />
      <Signup />
    </>
  );
}
export default SignupPage