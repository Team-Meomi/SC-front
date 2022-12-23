import * as S from "./styled";
import { useRouter } from "next/router";
import useSWR from 'swr';
import { CommentProps, MainDetailProps } from "../../types";
import { Comment, Participant } from "../../common";
import { CommentCreate, StudyApply, StudyCancel, StudyDelete, StudyModify } from "../../Api/find";
import { toast } from "react-toastify";
import { useState } from "react";
import { MemoAloneicon } from "../../../public/svg";

const HomeDetail = () => {
    const router = useRouter();
    const { data, mutate } = useSWR<MainDetailProps>(`${router.asPath}`);
    const { data:CommentData, mutate:mutateComment } = useSWR<CommentProps[]>(`/comment/${router.query.id}`);
    const month = data?.date.slice(5,7);
    const day = data?.date.slice(8,10);
    
    const [isStatus, SetIsStatus] = useState(data?.isStatus);
    const [isModify, setIsModify] = useState(false);
    
    const [title, setMIitle] = useState(data?.title);
    const [content, setContent] = useState(data?.content);
    const [topic, setTopic] = useState(data?.category);
    const [date, setDate] = useState(data?.date);
    const [maxCount, setMaxCount] = useState(data?.count.maxCount);

    const [commonValue,setCommonValue] = useState("");
    console.log(CommentData);
    
    
    
    const handleApplyClick = async () => {
      if(!data?.id) return toast('id 가 없습니다', {type: 'warning' })
      if(!data.isStatus && !data.isMine){
        const id = data?.id
        await StudyApply(id)
        toast('신청되었습니다', {type:"success" })
        mutate()
        SetIsStatus(true)
      }else if(data.isStatus && !data.isMine && data?.count.maxCount !== data?.count.count) {
        await StudyCancel(data?.id)
        toast('신청취소되었습니다', {type:"success" })
        SetIsStatus(false)
        mutate()
      }else if(isModify && data.isMine){
        if(!title || !content || !topic || !date || !maxCount) return toast('다 입력해주세요', {type:"error" })
        else if( data?.studyType === "컨퍼런스" && ( maxCount > 35 || maxCount < 15)) return toast('컨퍼런스 인원은 15명부터 35명 입니다' , { type:"error" })
        await StudyModify(data?.id, title, content, topic, date , maxCount)
        toast('수정되었습니다', {type:"success" })
        setIsModify(false)
        mutate()
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
      if(!commonValue) return toast('내용을 입력하세요', {type:"warning" })
      if(!data?.id) return toast('id 가 없습니다', {type: 'warning' })
      await CommentCreate(data?.id , commonValue)
      toast('댓글이 생성되었습니다', {type:"success"})
      mutateComment();
    }

    return (
      <S.HomeDetailWapper>
        <S.LeftWapper>
        <S.BackBtn onClick={() => router.back()}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
        </S.BackBtn>
        {
          data?.isMine && <S.ModifyBtn onClick={handleModifyClick}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
            </svg>

          </S.ModifyBtn>
        }
        {
          data?.isMine && <S.DeleteBtn onClick={handleDeleteClick}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>
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
            {"전공 : "} 
            {
              isModify ? (
                <S.TopicBtns>
                  <input type="radio" value={topic} id="BE" name="topic" onClick={() => setTopic("BE")}/><label htmlFor="BE">BE</label>
                  <input type="radio" value={topic} id="FE" name="topic" onClick={() => setTopic("FE")} /><label htmlFor="FE">FE</label>
                  <input type="radio" value={topic} id="IOS" name="topic" onClick={() => setTopic("IOS")}/><label htmlFor="IOS">IOS</label>
                  <input type="radio" value={topic} id="AOS" name="topic" onClick={() => setTopic("AOS")}/><label htmlFor="AOS">AOS</label>
                  <input type="radio" value={topic} id="기타" name="topic" onClick={() => setTopic("기타")}/><label htmlFor="기타">기타</label>
                </S.TopicBtns>
                ) : (
                  data?.category
                )
            }
          </span>
          <span>
            {"날짜 : "}
              {
                isModify ? (
                  <input type="date" value={date} onChange={(e)=> {setDate(e.target.value)}}/>
                ) : (
                  `${month}월 ${day}일`
                )
              }
          </span>
          <span>장소 : {data?.studyType === "컨퍼런스" ? "시청각실" : data?.studyType === "스터디" ?  "홈베" : data?.studyType}</span>
          <span>
            {
              isModify ? "최대인원 : " : "현재인원 : "
            }
            {
              isModify ? (
                data?.studyType === "컨퍼런스" ? (
                  <input type="number" value={maxCount} onChange={(e:any)=> {setMaxCount(e.target.value)}}/>
                ) : (
                  <input type="number" readOnly value={5}/>
                )
              ) : (
                `${data?.count.count}/${data?.count.maxCount} 명`
              )
            }
          </span>
          <span>{`개설자 : ${data?.writer.stuNum} ${data?.writer.name}`}</span>
          </S.SpanWrapper>
        </S.DecsWapper>

        <S.SubmitBtn onClick={handleApplyClick} style={{
          backgroundColor: data?.isMine ? (isModify? "orange" : "#EFEFEF" ) : (data?.isStatus ? (data?.count.maxCount === data?.count.count ? "#EFEFEF" : "red") : "#77D6B3") , 
          color: data?.isMine ? (isModify? "white" : "gray" ) : ("white")
        }}>
          {data?.isMine ? (isModify ? "수정하기" : "개설자")  : (isStatus ? (data?.count.maxCount === data?.count.count ? "신청불가" : "신청취소") : ("신청하기")) }</S.SubmitBtn>
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
            data?.studyType === "스터디"  && data?.count.count > 0 &&
            <S.CommentInputBox>
              <textarea placeholder="자료를 공유하세요" value={commonValue} onChange={(e) => setCommonValue(e.target.value)} />
              <S.CommentBtn onClick={handleCommentBtnClick}>올리기</S.CommentBtn>
            </S.CommentInputBox>
          }
          <S.CommentListBox>
          {
            data?.studyType === "스터디" && data?.count.count > 0  &&
            CommentData?.map((i)=> (
            <Comment
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