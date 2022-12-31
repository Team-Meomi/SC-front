import { useRouter } from "next/router";
import UseRole from "./UseRole";

const UseRoleDirect = () => {
    const router = useRouter();
    const onRoleDirect = async () => {
    const role = await UseRole();
    if(role === "user"){
    router.replace("/home");
    }else if(role === "admin"){
    router.replace("/admin");
    }
    };
    return onRoleDirect;
  };

export default UseRoleDirect;