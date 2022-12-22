import * as S from "./styled";
import { DetailListType } from "../../types";
import { MemoProfileIcon } from "../../../public/svg";

const Participant = ({id,stuNum,name}:DetailListType) => {
    return (
      <S.Participant>
      <MemoProfileIcon/>
      <span>{`${stuNum} ${name}`}</span>
    </S.Participant>
    )
}

  export default Participant