import axios, { AxiosRequestConfig } from "axios";
import { tokenReissue } from "../../Api/member";
import {UseGetToken} from "../../Hooks/index";

export const requestCheck = async (config: AxiosRequestConfig) => {
  if(typeof window !== 'object') return config;
  const {Authorization, RefreshToken} = await UseGetToken(null)
  
  if (config.headers && Authorization){
    config.headers["Authorization"] = Authorization
  }

  else if (!Authorization && config.url !== "/auth/signin" && config.url !== "/auth/signup"){
    const {newAuthorization}: any = await tokenReissue(RefreshToken,null)
    if (config.headers) config.headers["Authorization"] = newAuthorization
  }

  return config;
};