import * as S from "./styled";
import { DetailListType } from "../../types";
import { MemoProfileIcon } from "../../../public/svg";
import { useRouter } from "next/router";

const Participant = ({id,stuNum,name}:DetailListType) => {
  const router = useRouter();
    return (
      <S.Participant onClick={() => router.push(`/user/${id}`)}>
      <MemoProfileIcon/>
      <span>{`${stuNum} ${name}`}</span>
    </S.Participant>
    )
}

  export default Participant