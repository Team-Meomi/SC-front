import * as S from "./styled";
import { useRouter } from "next/router";
import { useForm, SubmitHandler } from "react-hook-form"
import { SignupForm } from "../../types";
import { signup } from "../../Api/member";
import { Input } from "../../common";
import { toast } from "react-toastify";

export default function Signup() {
  const router = useRouter();
  const redirect = (url: string) => router.push(url);
  const { register, handleSubmit, reset } = useForm<SignupForm>();

  const onValid:SubmitHandler<SignupForm> = async (data) => {
    if(!data.email) return toast('이메일을 입력하세요', {type: 'error' })
    else if(!data.password) return toast('비밀번호를 입력하세요', {type: 'error' })
    else if(!data.name) return toast('이름을 입력하세요', {type: 'error' })
    else if(!data.strNum) return toast('학번을 입력하세요', {type: 'error' })
    console.log(data)
    reset()
    await signup(data.email + '@gsm.hs.kr', data.password, data.name, data.strNum);
    redirect("/auth/signin");
  }

  return (
    <>
    <S.LoginWapper>
        <S.LoginTitle onClick={() => redirect('/auth/signup')}>회원가입</S.LoginTitle>
      <S.InputsWapper>
        <S.InputStyle>
          <Input
            register={register("email")}
            type="text"
            placeholder="email 입력하세요"
            required={true}
            maxLength={6}
          />
          <label>@gsm.hs.kr</label>
        </S.InputStyle>
        <S.InputStyle>
          <Input
            register={register("password")}
            type="password"
            placeholder="password를 입력하세요"
            required={true}
          />
        </S.InputStyle>
        <S.InputStyle>
          <Input
            register={register("name")}
            type="text"
            placeholder="이름을 입력하세요"
            required={true}
            maxLength={4}
          />
        </S.InputStyle>
        <S.InputStyle onSubmit={handleSubmit(onValid)}>
          <Input
            register={register("strNum")}
            type="text"
            placeholder="학번을 입력하세요"
            required={true}
            maxLength={4}
          />
        </S.InputStyle>
      </S.InputsWapper>
      <S.LoginButton onClick={handleSubmit(onValid)}>Signup</S.LoginButton>
        <p onClick={() => redirect('/auth/signin')}>로그인하러가기</p>
    </S.LoginWapper>
    </>
  );
}