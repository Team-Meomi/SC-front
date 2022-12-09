import axios, { AxiosRequestConfig } from "axios";
import {UseGetTokenDom , UseSetToken} from "../../Hooks/index";
import { BASEURL } from "./BaseUrl";

export const requestCheck = async (config: AxiosRequestConfig) => {
  if(typeof window !== 'object') return config;
  const { Authorization , RefreshToken } =  UseGetTokenDom()
  
  if (config.headers && Authorization){
    config.headers["Authorization"] = Authorization
  }
  else if (!Authorization && config.url !== "auth/signup" && config.url !== "auth/signin"){
    try{
        const {data} = await axios.patch(`${BASEURL}/auth/reissue`,{},{headers: {RefreshToken}});
        if (config.headers) config.headers["Authorization"] = data.accessToken
        UseSetToken(data.accessToken,data.refreshToken,null)
    } catch(e){ 
        console.log(e);
    }
  }

  return config;
};