import * as S from "./styled";
import { useRouter } from "next/router";
import useSWR from 'swr';
import { MainDetailProps } from "../../types";
import { Participant } from "../../common";
import { StudyApply, StudyCancel, StudyDelete, StudyModify } from "../../Api/find";
import { toast } from "react-toastify";
import { ChangeEvent, useState } from "react";
import { MemoAloneicon } from "../../../public/svg";

const HomeDetail = () => {
    const router = useRouter();
    console.log(router.asPath);
    const { data,mutate} = useSWR<MainDetailProps>(`${router.asPath}`);
    const month = data?.date.slice(5,7);
    const day = data?.date.slice(9,11);
    const [isStatus , SetIsStatus] = useState(data?.isStatus);
    const [isModify , setIsModify] = useState(false);
    console.log(isModify);

    const [title,setMIitle] = useState(data?.title); 
    const [content,setContent] = useState(data?.content); 
    const [topic,setTopic] = useState(data?.category);
    const [date,setDate] = useState(data?.date);
    const [maxCount , setMaxCount] = useState(data?.count.maxCount);
    
    const handleApplyClick = async () => {
      if(!data?.id) return toast('id 가 없습니다', {type: 'warning' })
      if(!data.isStatus && !data.isMine){
        const id = data?.id
        await StudyApply(id)
        toast('신청되었습니다', {type:"success" })
        mutate()
        SetIsStatus(true)
      }else if(data.isStatus && !data.isMine) {
        await StudyCancel(data?.id)
        toast('신청취소되었습니다', {type:"success" })
        SetIsStatus(false)
        mutate()
      }else if(isModify && data.isMine){
        await StudyModify(data?.id)
        toast('수정되었습니다', {type:"success" })
        setIsModify(false)
        mutate()
      }
    }

    const handleDeleteClick = async () => {
      if(!data?.id) return toast('id 가 없습니다', {type: 'warning' })
      await StudyDelete(data?.id)
      toast('삭제되었습니다', {type:"success"})
      router.push('/home');
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
          data?.isMine && <S.ModifyBtn onClick={() => setIsModify(pre => !pre)}>수정하기</S.ModifyBtn>
        }
        {
          data?.isMine && <S.DeleteBtn onClick={handleDeleteClick}>삭제하기</S.DeleteBtn>
        }
        <S.DecsWapper>
          <S.DecsTitle>
            {isModify ? (
              <input type="text" value={title} onChange={(e)=> {setMIitle(e.target.value)}}/> 
            ) : (
              title
            )}
          </S.DecsTitle>
          <S.DecsContent>
            {isModify ? (
              <textarea value={content} onChange={(e)=> {setContent(e.target.value)}}/> 
            ) : (
              content
            )}
          
        </S.DecsContent>
        <S.SpanWrapper>
          <span>
            전공 :
            {
              isModify ? (
                <S.TopicBtns>
                  <input defaultChecked type="radio" value={topic} id="BE" name="topic" onClick={() => setTopic("BE")}/><label htmlFor="BE">BE</label>
                  <input type="radio" value={topic} id="FE" name="topic" onClick={() => setTopic("FE")} /><label htmlFor="FE">FE</label>
                  <input type="radio" value={topic} id="IOS" name="topic" onClick={() => setTopic("IOS")}/><label htmlFor="IOS">IOS</label>
                  <input type="radio" value={topic} id="AOS" name="topic" onClick={() => setTopic("AOS")}/><label htmlFor="AOS">AOS</label>
                  <input type="radio" value={topic} id="기타" name="topic" onClick={() => setTopic("기타")}/><label htmlFor="기타">기타</label>
                </S.TopicBtns>
                ) : (
                  topic
                )
            }
          </span>
          <span>날짜 :
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
              isModify ? "최대인원 :" : "현재인원"
            }
            {
              isModify ? (
                <input type="number" value={maxCount} onChange={(e:any)=> {setMaxCount(e.target.value)}}/>
              ) : (
                `${data?.count.count}/${data?.count.maxCount} 명`
              )
            }
          </span>
          <span>{`개설자 : ${data?.writer.stuNum} ${data?.writer.name}`}</span>
          </S.SpanWrapper>
        </S.DecsWapper>

        <S.SubmitBtn onClick={handleApplyClick} style={{
          backgroundColor: data?.isMine ? (isModify? "orange" : "#EFEFEF" ) : (data?.isStatus ? "red" : "#77D6B3") , 
          color: data?.isMine ? (isModify? "white" : "gray" ) : ("white")
        }}>
          {data?.isMine ? (isModify ? "수정하기" : "개설자")  : (isStatus ? "신청취소" : "신청하기") }</S.SubmitBtn>
        </S.LeftWapper>

        <S.RightWapper>
          {
            data?.list && data.list.length !== 0 ? (data.list.map((item,index) => (
              <Participant  key={index} stuNum={item.stuNum} id={item.id} name={item.name}/>
            ))
            ) : (
              <MemoAloneicon/>
            )}
          </S.RightWapper>

      </S.HomeDetailWapper>
    )
}

export default HomeDetail