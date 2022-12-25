import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Shead } from "../../common";
import { Signup } from "../../components";
import { UseGetTokenDom } from "../../Hooks";

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
      <Shead seoTitle={'회원가입페이지'} />
      <Signup />
    </>
  );
}
export default SignupPage