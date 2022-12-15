import * as S from "./styled";
import { useRouter } from "next/router";
import { useForm, SubmitHandler } from "react-hook-form"
import { SigninForm } from "../../types";
import { signin } from "../../Api/member";
import { Input } from "../../common";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

export default function Signin() {
  const router = useRouter();
  const redirect = (url: string) => router.push(url);
  const { register, handleSubmit, reset,watch} = useForm<SigninForm>();
  const [isIdError , SetIsIdError] = useState(false);
  const [isPasswordError , SetPasswordError] = useState(false);

  useEffect(() => {
    if(watch().email){SetIsIdError(false)}
    if(watch().password){SetPasswordError(false)}
  },[watch().email , watch().password])


  const onValid:SubmitHandler<SigninForm> = async (data) => {
    if(!data.email) return SetIsIdError(true)
    else if(!data.password) return SetPasswordError(true)
    console.log(data)
    reset()
    await signin(data.email + '@gsm.hs.kr', data.password);
    redirect("/post");
  }

  return (
    <>
    <S.LoginWapper>
        <S.LoginTitle onClick={() => redirect('/auth/signup')}>Login</S.LoginTitle>
        <S.DecsTitle>컨퍼런스와 스터디의 재미를<br/> 느껴보세요!</S.DecsTitle>
      <S.InputsWapper>
        <S.InputStyle style={{border: isIdError ? "1px solid red" : "none" }}>
          <Input
            register={register("email")}
            type="text"
            placeholder="ID"
            required={true}
            maxLength={6}
          />
          <label>@gsm.hs.kr</label>
          <span style={{display: isIdError ? "block" : "none"}}>학교이메일을 입력해주세요</span>
        </S.InputStyle>
        <S.InputStyle onSubmit={handleSubmit(onValid)} style={{border: isPasswordError ? "1px solid red" : "none" }}>
          <Input
            register={register("password")}
            type="password"
            placeholder="PASSWORD"
            required={true}
          />
          <span style={{display: isPasswordError ? "block" : "none"}}>8~20자 이내로 입력해주세요</span>
        </S.InputStyle>
      </S.InputsWapper>
      <S.LoginButton onClick={handleSubmit(onValid)}>login</S.LoginButton>
      <S.RedirectSignUp>
        <span>계정이 없으신가요?</span>
        <p onClick={() => redirect('/auth/signup')}>회원가입</p>
      </S.RedirectSignUp>
    </S.LoginWapper>
    </>
  );
}