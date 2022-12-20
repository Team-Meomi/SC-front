import * as S from "./styled";
import { useRouter } from "next/router";
import { useForm, SubmitHandler } from "react-hook-form"
import { SignupForm } from "../../types";
import { Input } from "../../common";
import { useEffect, useState } from "react";
import { signup } from "../../Api/member";

export default function Signin() {
  const router = useRouter();
  const redirect = (url: string) => router.push(url);
  const { register, handleSubmit, reset,watch} = useForm<SignupForm>();
  const [isIdError , SetIsIdError] = useState({isError:false , msg:"학교이메일을 입력해주세요."});
  const [isPasswordError , SetIsPasswordError] = useState(false);
  const [isNameError , SetIsNameError] = useState(false);
  const [isStrNumError , SetstrNumError] = useState({isError:false , msg:"학번을 입력해주세요."});

  useEffect(() => {
    if(watch().email){SetIsIdError({...isIdError , isError:false})}
    if(watch().password){SetIsPasswordError(false)}
    if(watch().name){SetIsNameError(false)}
    if(watch().strNum){SetstrNumError({...isStrNumError , isError:false})}
  },[watch().email , watch().password , watch().name , watch().strNum])

  const onValid:SubmitHandler<SignupForm> = async (data) => {
    if(!data.email) return SetIsIdError({isError:true , msg:"학교이메일을 입력해주세요."})
    else if(!data.password) return SetIsPasswordError(true)
    else if(!data.name) return SetIsNameError(true)
    else if(!data.strNum) return SetstrNumError({isError:true , msg:"학번을 입력해주세요."})
    const res = await signup(data.email + '@gsm.hs.kr', data.password, data.name, data.strNum);
		if(res.errorMsg === "중복된 이메일 입니다."){
			return SetIsIdError({isError:true , msg: "중복된 이메일 입니다."})
		}
		else if(res.errorMsg === "중복된 학번 입니다."){
			return SetstrNumError({isError:true , msg:"중복된 학번 입니다."})
		}
    reset()
    redirect("/auth/signin");
  }

  return (
    <>
    <S.LoginWapper>
        <S.LoginTitle onClick={() => redirect('/auth/signup')}>Sign up</S.LoginTitle>
        <S.DecsTitle>S&C에 가입하여 즐겁게<br/> 공부해봐요!</S.DecsTitle>
      <S.InputsWapper>
        <S.InputStyle style={{border: isIdError.isError ? "1px solid red" : "none" }}>
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
        <S.InputStyle style={{border: isPasswordError ? "1px solid red" : "none" }}>
          <Input
            register={register("password")}
            type="password"
            placeholder="PASSWORD"
            required={true}
            maxLength={20}
          />
          <span style={{display: isPasswordError ? "block" : "none"}}>8~20이자 이내로 입력해주세요.</span>
        </S.InputStyle>
        <S.InputStyle>
          <Input
            register={register("name")}
            type="text"
            placeholder="실명"
            required={true}
            maxLength={4}
          />
          <span style={{display: isNameError ? "block" : "none"}}>실명을 입력해주세요.</span>
        </S.InputStyle>
        <S.InputStyle onSubmit={handleSubmit(onValid)} style={{border: isStrNumError.isError ? "1px solid red" : "none" }}>
          <Input
            register={register("strNum")}
            type="text"
            placeholder="학번"
            required={true}
            maxLength={4}
          />
          <span style={{display: isStrNumError.isError ? "block" : "none"}}>{isStrNumError.msg}</span>
        </S.InputStyle>
      </S.InputsWapper>
      
      <S.LoginButton onClick={handleSubmit(onValid)}>sign in</S.LoginButton>
      <S.RedirectSignUp>
        <span>이미 계정이 있으신가요?</span>
        <p onClick={() => redirect('/auth/signin')}>로그인</p>
      </S.RedirectSignUp>
    </S.LoginWapper>
    </>
  );
}