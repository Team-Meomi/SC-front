import { GetServerSidePropsContext } from "next";
import { tokenReissue } from "../Api/member";

const UseGetToken = async (ctx : GetServerSidePropsContext) => {
  let Authorization = ctx.req.cookies['Authorization'] || "";
  let RefreshToken =  ctx.req.cookies['RefreshToken'] || "";

  if(!Authorization){
    const {newAuthorization}: any = await tokenReissue(RefreshToken,ctx)
    Authorization = newAuthorization
  }
  return { Authorization };
};

export default UseGetToken