import * as S from "./styled";
import { useRouter } from "next/router";
import useSWR from 'swr';
import { CommentProps, MainDetailProps } from "../../types";
import { Comment, Participant } from "../../common";
import { CommentCreate, StudyApply, StudyCancel, StudyDelete, StudyModify } from "../../Api/find";
import { toast } from "react-toastify";
import { useState } from "react";
import { BackBtnIcon, DeleteIcon, MemoAloneicon, ModifyIcon } from "../../../public/svg";

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
        if(!title || !content || !topic || !date || !maxCount) return toast('다 입력해주세요', {type:"warning" })
        else if( data?.studyType === "컨퍼런스" && ( maxCount > 35 || maxCount < 15)) return toast('컨퍼런스 인원은 15명부터 35명 입니다' , { type:"warning" })
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
            {"전공 : "} 
            {
              isModify ? (
                <S.TopicBtns>
                  <input defaultChecked={data?.category === "BE" && true} type="radio" value={topic} id="BE" name="topic" onClick={() => setTopic("BE")}/><label htmlFor="BE">BE</label>
                  <input defaultChecked={data?.category === "FE" && true} type="radio" value={topic} id="FE" name="topic" onClick={() => setTopic("FE")} /><label htmlFor="FE">FE</label>
                  <input defaultChecked={data?.category === "iOS" && true} type="radio" value={topic} id="iOS" name="topic" onClick={() => setTopic("IOS")}/><label htmlFor="IOS">iOS</label>
                  <input defaultChecked={data?.category === "AOS" && true} type="radio" value={topic} id="AOS" name="topic" onClick={() => setTopic("AOS")}/><label htmlFor="AOS">AOS</label>
                  <input defaultChecked={data?.category === "기타" && true} type="radio" value={topic} id="기타" name="topic" onClick={() => setTopic("기타")}/><label htmlFor="기타">기타</label>
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
            {isModify ? "최대인원 : " : "현재인원 : "}
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
          <span>{`개설자 :`}
            <span style={{cursor:"pointer",color:"blue"}} onClick={() => {router.push(`/user/${data?.writer.id}`)}}>{`${data?.writer.stuNum} ${data?.writer.name}`}</span>
          </span>
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