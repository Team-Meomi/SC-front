import * as S from "./styled";
import { CommentProps } from "../../types";
import { MemoProfileIcon } from "../../../public/svg";
import { useSWRConfig } from "swr";
import { useRouter } from "next/router";
import { CommentDelete, CommentModify } from "../../Api/find";
import { toast } from "react-toastify";
import { useState } from "react";
import { CommentController } from "../../Utils/lib/urls";

const Contant = ({id,comment,isMine,writer}:CommentProps) => {
  const router = useRouter();
  const QueryId = router.query.id as string;
  const { mutate } = useSWRConfig()
  const [isModify , setIsModify] = useState(false);
  const [modifyValue , setModifyValue] = useState(comment);

  const handleModifySubmitBtnClick = async () => {
    await CommentModify(id , modifyValue)
    toast('댓글이 수정되었습니다.', {type:"success"})
    setIsModify(false)
    mutate(CommentController.Comment(QueryId));
  }

  const handleDeleteBtnClick = async () => {
    await CommentDelete(id);
    toast('댓글이 삭제되었습니다.', {type:"success"})
    mutate(CommentController.Comment(QueryId));
  }
    return (
      <S.CommentBox>
        <S.CommentTop>
          <S.Profile>
            <MemoProfileIcon/>
            <span>{`${writer.stuNum} ${writer.name}`}</span>
          </S.Profile>
          {
            isMine ? (
              <S.ModifyBtn>
                <span style={{color:"#FFB800"}} onClick={() => setIsModify(prv => !prv)}>수정</span>
                <span style={{color:"#F87070"}} onClick={handleDeleteBtnClick}>삭제</span>
              </S.ModifyBtn>
            ) : (
              <S.ModifyBtn/>
            )
          }
      
        </S.CommentTop>
        {
          isModify ? (
              <textarea value={modifyValue} onChange={(e) => {setModifyValue(e.target.value)}}
              onKeyPress={(e:any) => {if (e.key === 'Enter'){handleModifySubmitBtnClick()}}}
              />
          ) : (
            <S.CommentBottom>{comment}</S.CommentBottom>
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