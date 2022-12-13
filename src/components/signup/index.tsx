import * as S from "./styled";
import { useRouter } from "next/router";
import Input from "../../common/input";
import { useForm, SubmitHandler } from "react-hook-form"
import { signup } from "../../Api/member";
import { EnterForm } from "../../types/Forms";

export default function Signup() {
  const router = useRouter();
  const redirect = (url: string) => router.push(url);
  const { register, handleSubmit, reset } = useForm<EnterForm>();

  const onValid:SubmitHandler<EnterForm> = async (data) => {
    if(!data.email) return console.log("Email를 입력하세요");
    else if(!data.password) return console.log("비밀번호를 입력하세요");
    console.log(data)
    reset()
    await signup(data.email + '@gsm.hs.kr', data.password);
    redirect("/auth/signin");
  }

  return (
    <>
    <S.LoginWapper>
        <S.LoginTitle onClick={() => redirect('/auth/signup')}>회원가입</S.LoginTitle>
      <S.InputsWapper>
        <S.InputStyle>
          <p>Email</p>
          <Input
            register={register("email")}
            name="email"
            type="text"
            placeholder="email 입력하세요"
            required={true}
          />
        </S.InputStyle>
        <S.InputStyle onSubmit={handleSubmit(onValid)}>
          <p>PassWord</p>
          <Input
            register={register("password")}
            name="password"
            type="password"
            placeholder="password를 입력하세요"
            required={true}
          />
        </S.InputStyle>
      </S.InputsWapper>
      <S.LoginButton onClick={handleSubmit(onValid)}>Signup</S.LoginButton>
        <p onClick={() => redirect('/auth/signin')}>로그인하러가기</p>
    </S.LoginWapper>
    </>
  );
}
