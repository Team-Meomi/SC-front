import CustomAxois from "../Utils/lib/CustomAxios";
import { GetServerSidePropsContext } from "next";
import UseSetToken from "./UseSetToken";

const UseGetToken = async (ctx : GetServerSidePropsContext) => {
  let Authorization = ctx.req.cookies['Authorization'] || "";
  let RefreshToken =  ctx.req.cookies['RefreshToken'] || "";

  if(!Authorization){
    try{
      const {data} = await CustomAxois.patch(`/auth/reissue`,{},{headers: {RefreshToken}});
      Authorization = data.accessToken
      RefreshToken = data.refreshToken
      UseSetToken(Authorization,RefreshToken,ctx)
    } catch(e){
      console.log(e);
    }
  }
  return { Authorization };
};

export default UseGetToken