import { GetServerSidePropsContext } from "next";
import { parseCookies } from "nookies";
import { tokenReissue } from "../Api/member";

const UseGetToken = async (ctx:GetServerSidePropsContext|null) => {
  if(ctx){
    let Authorization = ctx.req.cookies['Authorization'] || "";
    let RefreshToken =  ctx.req.cookies['RefreshToken'] || "";
    
    if(!Authorization){
      const {newAuthorization}: any = await tokenReissue(RefreshToken,ctx)
      Authorization = newAuthorization
    }
    
    return { Authorization, RefreshToken };
  }
  else {
    const {Authorization,RefreshToken} = parseCookies()
    return { Authorization, RefreshToken }
  }


};

export default UseGetToken