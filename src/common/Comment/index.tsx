import * as S from "./styled";
import { CommentProps } from "../../types";
import { MemoProfileIcon } from "../../../public/svg";
import useSWR from "swr";
import { useRouter } from "next/router";
import { CommentDelete, CommentModify } from "../../Api/find";
import { toast } from "react-toastify";
import { useState } from "react";

const Contant = ({id,comment,isMine,writer}:CommentProps) => {
  const router = useRouter();
  const { mutate } = useSWR<CommentProps[]>(`/comment/${router.query.id}`);
  const [isModify , setIsModify] = useState(false);
  const [modifyValue , setModifyValue] = useState(comment);

  const handleModifySubmitBtnClick = async () => {
    await CommentModify(id , modifyValue)
    toast('댓글이 수정되었습니다.', {type:"success"})
    setIsModify(false)
    mutate();
  }

  const handleDeleteBtnClick = async () => {
    await CommentDelete(id)
    toast('댓글이 삭제되었습니다.', {type:"success"})
    mutate();
  }
    return (
      <S.CommentBox>
        <S.CommentTop style={{flexDirection : isMine ? "row" : "row-reverse"}}>
          <S.Profile style={{flexDirection : isMine ? "row" : "row-reverse"}}>
            <MemoProfileIcon/>
            <span>{`${writer.stuNum} ${writer.name}`}</span>
          </S.Profile>
          {
            isMine ? (
              <S.ModifyBtn>
                <span style={{color:"orange"}} onClick={() => setIsModify(prv => !prv)}>수정</span>
                <span style={{color:"red"}} onClick={handleDeleteBtnClick}>삭제</span>
              </S.ModifyBtn>
            ) : (
              <S.ModifyBtn/>
            )
          }
      
        </S.CommentTop>
        {
          isModify ? (
              <textarea value={modifyValue} onChange={(e) => {setModifyValue(e.target.value)}}/>
          ) : (
            <S.CommentBottom style={{flexDirection : isMine ? "row" : "row-reverse"}}>{comment}</S.CommentBottom>
          )
        }
      {
        isModify && 
        <S.ModifySubmitBtn>
          <button onClick={handleModifySubmitBtnClick}>수정하기</button>
        </S.ModifySubmitBtn>
      }
    </S.CommentBox>
    )
}

export default Contant