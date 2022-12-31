import * as S from "./styled";
import { DetailListType } from "../../types";
import { MemoProfileIcon } from "../../../public/svg";
import { useRouter } from "next/router";
import { UseRole } from "../../Hooks";

const Participant = ({id,stuNum,name}:DetailListType) => {
  const router = useRouter();
  const role = UseRole();
  const handleClick = async () => {
    if(await role === "user"){
      router.push(`/user/${id}`)
    }
  }
    return (
      <S.Participant onClick={handleClick}>
      <MemoProfileIcon/>
      <span>{`${stuNum} ${name}`}</span>
    </S.Participant>
    )
}

  export default Participant