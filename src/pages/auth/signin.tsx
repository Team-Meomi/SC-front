import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Shead } from "../../common";
import { Signin } from "../../components";
import { UseGetToken } from "../../Hooks";

const SignupPage:NextPage = () => {
  const router = useRouter();
  useEffect(() => {
    const a = async() => {
      const {RefreshToken} = await UseGetToken(null)
      if(RefreshToken){
        router.push('/home');
      }
    }
    a();
  },[])
  return (
    <>
      <Shead seoTitle={'로그인페이지'} />
      <Signin />
    </>
  );
}
export default SignupPage