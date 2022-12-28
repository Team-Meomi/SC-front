import * as S from "./styled";
import { useRouter } from "next/router";
import useSWR from 'swr';
import { CommentProps, MainDetailProps } from "../../types";
import { Comment, Participant } from "../../common";
import { CommentCreate, StudyApply, StudyCancel, StudyDelete, StudyModify } from "../../Api/find";
import { toast } from "react-toastify";
import { useState } from "react";
import { BackBtnIcon, DeleteIcon, MemoAloneicon, ModifyIcon } from "../../../public/svg";
import { themedPalette } from "../../styles/global";
import { CommentController, StudyController } from "../../Utils/lib/urls";

const HomeDetail = () => {
    const router = useRouter();
    const id = router.query.id as string;
    const { data , mutate } = useSWR<MainDetailProps>(StudyController.StudyId(id));
    const { data:CommentData, mutate:mutateComment } = useSWR<CommentProps[]>(CommentController.Comment(id));
    const month = data?.date?.slice(5,7);
    const day = data?.date?.slice(8,10);
    
    const [isModify, setIsModify] = useState(false);
    const [title, setMIitle] = useState<string>();
    const [content, setContent] = useState<string>();
    const [topic, setTopic] = useState<string>();
    const [date, setDate] = useState<string>();
    const [maxCount, setMaxCount] = useState<number>();

    const [commonValue,setCommonValue] = useState("");    
    const SubmitBtnText = data?.isMine ? (isModify ? "수정하기" : "개설자") : (data?.isStatus ? "신청취소" : data?.count?.maxCount === data?.count?.count ? "신청불가" : "신청하기")

    const handleApplyClick = async () => {
      if(!data?.id) return toast('id 가 없습니다', {type: 'warning' })
      switch (SubmitBtnText) {
        case "신청하기" :
          await StudyApply(data.id)
          toast('신청되었습니다', {type:"success" })
          mutate()
          break;
        case "신청취소" :
          await StudyCancel(data.id)
          toast('신청취소되었습니다', {type:"success" })
          mutate()
          break;
        case "수정하기" : 
          if(!title || !content || !topic || !date || !maxCount) return toast('다 입력해주세요', {type:"warning" })
          else if(data?.studyType === "컨퍼런스" && ( maxCount > 35 || maxCount < 15)) return toast('컨퍼런스 인원은 15명부터 35명 입니다' , { type:"warning" })
          await StudyModify(data.id, title, content, topic, date , maxCount)
          toast('수정되었습니다', {type:"success" })
          setIsModify(false)
          mutate()
          break;
      }
    }

    const handleModifyClick = () => {
      setMIitle(data?.title)
      setContent(data?.content)
      setTopic(data?.category)
      setDate(data?.date)
      setMaxCount(data?.count.maxCount)
      setIsModify(true)
    }
    
    const handleDeleteClick = async () => {
      if(!data?.id) return toast('id 가 없습니다', {type: 'warning' })
      await StudyDelete(data?.id)
      toast('삭제되었습니다', {type:"success"})
      router.push('/home');
    }

    const handleCommentBtnClick = async () => {
      if(!data?.id) return toast('id 가 없습니다', {type: 'warning' })
      if(!commonValue) return toast('내용을 입력하세요', {type:"warning" })
      await CommentCreate(data?.id , commonValue)
      toast('댓글이 생성되었습니다', {type:"success"})
      setCommonValue("");
      mutateComment();
    }

    return (
      <S.HomeDetailWapper>
        <S.LeftWapper>
        <S.BackBtn onClick={() => router.back()}>
          <BackBtnIcon/>
        </S.BackBtn>
        {
          data?.isMine && 
          <S.ModifyBtn onClick={handleModifyClick}>
            <ModifyIcon />
          </S.ModifyBtn>
        }
        {
          data?.isMine && <S.DeleteBtn onClick={handleDeleteClick}>
            <DeleteIcon />
          </S.DeleteBtn>
        }
        <S.DecsWapper>
          <S.DecsTitle>
            {isModify ? (
              <input type="text" value={title} onChange={(e)=> {setMIitle(e.target.value)}}/> 
            ) : (
              data?.title
            )}
          </S.DecsTitle>
          <S.DecsContent>
            {isModify ? (
              <textarea value={content} onChange={(e)=> {setContent(e.target.value)}}/> 
            ) : (
              data?.content
            )}
        </S.DecsContent>
        <S.SpanWrapper>
          <span>
            {
              isModify ? (
                <div>
                  <span>전공 : </span>
                  <S.TopicBtns>
                    <input defaultChecked={data?.category === "BE" && true} type="radio" value={topic} id="BE" name="topic" onClick={() => setTopic("BE")}/><label htmlFor="BE">BE</label>
                    <input defaultChecked={data?.category === "FE" && true} type="radio" value={topic} id="FE" name="topic" onClick={() => setTopic("FE")} /><label htmlFor="FE">FE</label>
                    <input defaultChecked={data?.category === "iOS" && true} type="radio" value={topic} id="iOS" name="topic" onClick={() => setTopic("iOS")}/><label htmlFor="iOS">iOS</label>
                    <input defaultChecked={data?.category === "AOS" && true} type="radio" value={topic} id="AOS" name="topic" onClick={() => setTopic("AOS")}/><label htmlFor="AOS">AOS</label>
                    <input defaultChecked={data?.category === "기타" && true} type="radio" value={topic} id="기타" name="topic" onClick={() => setTopic("기타")}/><label htmlFor="기타">기타</label>
                  </S.TopicBtns>
                </div>
              ) : (
                data?.category && `전공 : ${data.category}`
              )
            }
          </span>
          <span>
            {
              isModify ? (
                <div>
                  <span>날짜 : </span>
                  <input type="date" value={date} onChange={(e)=> {setDate(e.target.value)}}/>
                </div>
              ) : (
                month && day && `날짜 : ${month}월 ${day}일`
              )
            }
          </span>
          <span>{data?.studyType && `장소 : ${data.studyType === "컨퍼런스" ? "시청각실" : "홈베"}`}</span>
          <span>
            {
              isModify ? (
                data?.studyType === "컨퍼런스" ? (
                  <div>
                    <span>최대인원 : </span>
                    <input type="number" value={maxCount} onChange={(e:any)=> {setMaxCount(e.target.value)}}/>
                  </div>
                ) : (
                  <div>
                    <span>최대인원 : </span>
                    <input type="number" readOnly value={5}/>
                  </div>
                )
              ) : (
                data?.count && `현재인원 : ${data?.count?.count || "0"}/${data?.count?.maxCount || "5"} 명`
              )
            }
          </span>
          <span>
            <span>{data?.writer && "개설자 :"}</span>
            <span style={{cursor:"pointer", color: themedPalette.profileLink}} onClick={() => {router.push(`/user/${data?.writer?.id}`)}}>{data?.writer && `${ data?.writer?.stuNum} ${data?.writer?.name || ""}`}</span>
          </span>
          </S.SpanWrapper>
        </S.DecsWapper>

        <S.SubmitBtn 
          onClick={handleApplyClick} 
          style={{
            backgroundColor: (SubmitBtnText === "개설자" || SubmitBtnText === "신청불가") ? "#EFEFEF" : SubmitBtnText === "신청하기" ? "#77D6B3" : "orange" , 
          }}
        >
          {SubmitBtnText}
        </S.SubmitBtn>
        </S.LeftWapper>

        <S.RightWapper>
          {
            data?.list && data.list.length !== 0 ? (data.list.map((item,index) => (
              <Participant  key={index} stuNum={item.stuNum} id={item.id} name={item.name}/>
            ))
            ) : (
              <MemoAloneicon/>
          )}
          {
            data?.studyType === "스터디"  && data?.count.count > 0  && data.isStatus &&
            <S.CommentInputBox>
              <textarea placeholder="자료를 공유해보세요!" value={commonValue} onChange={(e) => setCommonValue(e.target.value)} 
                onKeyPress={(e:any) => {if (e.key === 'Enter'){handleCommentBtnClick()}}}
              />
              <S.CommentBtn onClick={handleCommentBtnClick}>올리기</S.CommentBtn>
            </S.CommentInputBox>
          }
          <S.CommentListBox>
          {
            data?.studyType === "스터디" && data?.count.count > 0 && data.isStatus &&
            CommentData?.map((i)=> (
            <Comment
              key={i.id}
              id={i.id}
              comment={i.comment}
              isMine={i.isMine}
              writer={i.writer}
            />
            ))
          }
          </S.CommentListBox>
          </S.RightWapper>

      </S.HomeDetailWapper>
    )
}

export default HomeDetail