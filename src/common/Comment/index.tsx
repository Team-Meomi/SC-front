import * as S from "./styled";
import { CommentProps } from "../../types";
import { MemoProfileIcon } from "../../../public/svg";

const Contant = ({id,comment,isMine,writer}:CommentProps) => {
    return (
      <S.CommentBox>
      {/* <S.CommentBox style={{flexDirection:"rowReverse"}}> */}
        <S.CommentTop>
          <MemoProfileIcon/>
          <span>{`${writer.stuNum} ${writer.name}`}</span>
        </S.CommentTop>
      <S.CommentBottom>{comment}</S.CommentBottom>
    </S.CommentBox>
    )
}

export default Contant