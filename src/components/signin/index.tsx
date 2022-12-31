import * as S from "./styled";
import { useRouter } from "next/router";
import { useForm, SubmitHandler } from "react-hook-form"
import { SigninForm } from "../../types";
import { signin } from "../../Api/member";
import { Input } from "../../common";
import { useEffect, useState } from "react";
import { UseRole, UseRoleDirect } from "../../Hooks";

export default function Signin() {
  const router = useRouter();
  const onRoleDirect = UseRoleDirect()
  const { register, handleSubmit, watch } = useForm<SigninForm>();
  const [isIdError , SetIsIdError] = useState({isError:false , msg:"학교이메일을 입력해주세요."});
  const [isPasswordError , SetPasswordError] = useState({isError:false , msg:"8~20자 이내로 입력해주세요."});

  useEffect(() => {
    if(watch().email){SetIsIdError({...isIdError , isError:false})}
    if(watch().password){SetPasswordError({...isIdError , isError:false})}
  },[watch().email , watch().password])

  const onValid:SubmitHandler<SigninForm> = async (data) => {
    if(!data.email) return SetIsIdError({isError:true , msg:"학교이메일을 입력해주세요."})
    else if(!data.password) return SetPasswordError({isError:true , msg:"8~20자 이내로 입력해주세요."})
    const res = await signin(data.email + '@gsm.hs.kr', data.password);
    if (res?.errorMsg === '가입된 이메일이 아닙니다.') {
      return SetIsIdError({isError:true , msg:res.errorMsg})
		}else if(res?.errorMsg === '비밀번호가 일치하지 않습니다.'){
      return SetPasswordError({isError:true, msg:res.errorMsg})
    }
    onRoleDirect();
  }

  return (
    <>
    <S.LoginWapper >
        <S.LoginTitle>Login</S.LoginTitle>
        <S.DecsTitle>컨퍼런스와 스터디의 재미를<br/> 느껴보세요!</S.DecsTitle>
      <S.InputsWapper>
        <S.InputStyle style={{border: isIdError.isError ? "1px solid #FF4747" : "none" }}>
          <Input
            register={register("email")}
            type="text"
            placeholder="ID"
            required={true}
            maxLength={6}
          />
          <label>@gsm.hs.kr</label>
          <span style={{display: isIdError.isError ? "block" : "none"}}>{isIdError.msg}</span>
        </S.InputStyle>
        <S.InputStyle onSubmit={handleSubmit(onValid)} style={{border: isPasswordError.isError ? "1px solid #FF4747" : "none" }}>
          <Input
            register={register("password")}
            type="password"
            placeholder="PASSWORD"
            required={true}
          />
          <span style={{display: isPasswordError.isError ? "block" : "none"}}>{isPasswordError.msg}</span>
        </S.InputStyle>
      </S.InputsWapper>
      <S.LoginButton onClick={handleSubmit(onValid)}>login</S.LoginButton>
      <S.RedirectSignUp>
        <span>계정이 없으신가요?</span>
        <p onClick={() => router.push('/auth/signup')}>회원가입</p>
      </S.RedirectSignUp>
    </S.LoginWapper>
    </>
  );
}