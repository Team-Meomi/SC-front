import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Shead } from "../../common";
import { Signup } from "../../components";
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
      <Shead seoTitle={'회원가입페이지'} />
      <Signup />
    </>
  );
}
export default SignupPage