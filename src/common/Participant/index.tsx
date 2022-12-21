import * as S from "./styled";
import { useRouter } from "next/router";
import { DetailListType } from "../../types";
import { MemoProfileIcon } from "../../../public/svg";

const Participant = ({id,stuNum,name}:DetailListType) => {
  const router = useRouter();

    return (
      <S.Participant>
      <MemoProfileIcon/>
      <span>{`${stuNum} ${name}`}</span>
    </S.Participant>
    )
}

  export default Participant