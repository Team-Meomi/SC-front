import axios, { AxiosRequestConfig } from "axios";
import {UseGetToken, UseSetToken} from "../../Hooks/index";
import { BASEURL } from "./BaseUrl";

export const requestCheck = async (config: AxiosRequestConfig) => {
  if(typeof window !== 'object') return config;
  const {Authorization, RefreshToken} = await UseGetToken(null)
  
  if (config.headers && Authorization){
    config.headers["Authorization"] = Authorization
  }

  else if (!Authorization && config.url !== "/auth/signin" && config.url !== "/auth/signup"){
    try{
        const {data} = await axios.patch(`${BASEURL}/auth/`,{},{headers: {"Refresh-Token":RefreshToken}});
        if (config.headers) config.headers["Authorization"] = data.accessToken
        UseSetToken(data.accessToken,data.refreshToken,null)
    } catch(e){ 
        console.log(e);
    }
  }

  return config;
};