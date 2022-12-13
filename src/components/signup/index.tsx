import * as S from "./styled";
import Link from "next/link";
import { useRouter } from "next/router";
import CustomAxios from "../../Utils/lib/CustomAxios";
import Input from "../../common/input";
import { useForm, SubmitHandler } from "react-hook-form"

interface EnterForm {
  email?: string;
  password?: string;
}

export default function Signup() {
  const router = useRouter();
  const redirect = (url: string) => router.push(url);
  const { register, handleSubmit, reset } = useForm<EnterForm>();
  // const onSignup = async () => {
  //   try {
  //     const { data } = await CustomAxios.post(`/member/join`, {
  //         email: Email,
  //         password: PassWord,
  //       }
  //     );
  //     console.log(data);
  //     redirect("/member/login");
  //   } catch (e: any) {
  //     const { data } = e.response;
  //     console.error("data : ", data);
  //   }
  // };

  const onValid:SubmitHandler<EnterForm> = async (data) => {
    if(!data.email) return console.log("입력하세요");
    console.log(data)
    reset()
    //   try {
    //     const { data } = await CustomAxios.post(`/member/join`, {
    //         email: data?.email,
    //         password: data?.password
    //       }
    //     );
    //     console.log(data);
    //     redirect("/member/login");
    //   } catch (e: any) {
    //     const { data } = e.response;
    //     console.error("data : ", data);
    //   }
    // getValues만 사용한다면, 이미 타입이 지정되어있으므로 따로 지정해 줄 필요가 없음
    // const { name, firstName } = getValues();
  }

  return (
    <>
    <S.LoginWapper>
      <Link href="/member/join">
        <S.LoginTitle>회원가입</S.LoginTitle>
      </Link>
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
      <Link href="/member/login">
        <p>로그인하러가기</p>
      </Link>
    </S.LoginWapper>
    </>
  );
}
