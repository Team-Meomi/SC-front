import { GetServerSidePropsContext } from "next";
import { setCookie } from 'nookies'

const UseSetToken = (Authorization:string, RefreshToken:string , ctx:GetServerSidePropsContext|null): void => {
    setCookie(ctx, 'Authorization', Authorization, {maxAge: 180,path: '/',}) // 3분
    setCookie(ctx, 'RefreshToken', RefreshToken, {maxAge: 604800,path: '/',}) // 일주일
}

export default UseSetToken