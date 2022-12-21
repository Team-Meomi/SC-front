import * as S from "./styled";
import { Header } from "../../common";
import { MemoCreate } from "../../../public/svg";
import { useEffect, useState } from "react";
import { create } from "../../Api/find";
import { toast } from "react-toastify";

const Create = () => {
    const [studyType , setstudyType] = useState("conference")
    const [title , setTitle] = useState("");
    const [content , setContent] = useState("");
    const [topic, setTopic] = useState("BE");
    const [maxCount , setmaxCount] = useState<number>();
    const [date , setDate] = useState("");

    useEffect(() => {
      if(studyType === "study"){
        setmaxCount(5);
      }else{
        setmaxCount(0);
      }
    },[studyType])

    const handleClick = async () => {
    if(!title) return toast('제목을 입력하세요', {type: 'warning' })
    else if(!content) return toast('내용을 입력하세요', {type: 'warning' })
    else if(!maxCount) return toast('인원수를 입력하세요', {type: 'warning' })
    else if(!date) return toast('날짜를 선택하세요', {type: 'warning' })
    console.log(title,content,topic,date,maxCount);
      await create(title, content, topic, date, maxCount, studyType);
    }

    return (
      <S.Wapper>
        <Header />
        <S.CreateWapper>
          <MemoCreate />
          <S.InputsWapper>
            <S.RadioBtns>
                <input defaultChecked type="radio" value={studyType} id="conference" name="studyType" onClick={() => setstudyType("conference")}/><label htmlFor="conference">컴퍼런스</label>
                <input type="radio" value={studyType} id="study" name="studyType" onClick={() => setstudyType("study")} /><label htmlFor="study">스터디</label>
            </S.RadioBtns>
            <S.ConterWapper>
              <S.TitleInput placeholder="제목을 입력하세요" value={title} onChange={(e) => setTitle(e.target.value) }/>
              <S.ContentText placeholder="내용을 입력해주세요" value={content} onChange={(e) => setContent(e.target.value) }/>
              <S.TopicBtns>
                <input defaultChecked type="radio" value={topic} id="BE" name="topic" onClick={() => setTopic("BE")}/><label htmlFor="BE">BE</label>
                <input type="radio" value={topic} id="FE" name="topic" onClick={() => setTopic("FE")} /><label htmlFor="FE">FE</label>
                <input type="radio" value={topic} id="IOS" name="topic" onClick={() => setTopic("IOS")}/><label htmlFor="IOS">IOS</label>
                <input type="radio" value={topic} id="AOS" name="topic" onClick={() => setTopic("AOS")}/><label htmlFor="AOS">AOS</label>
                <input type="radio" value={topic} id="기타" name="topic" onClick={() => setTopic("기타")}/><label htmlFor="기타">기타</label>
              </S.TopicBtns>
              <S.BottomWapper>
                <S.BottomInput placeholder="인원 수 입력" type="number" value={maxCount || ''} onChange={(e:any) => setmaxCount(e.target.value) }/>
                <S.BottomInput placeholder="날짜 선택" type="date" value={date} onChange={(e) => setDate(e.target.value)}/>
              </S.BottomWapper>
            </S.ConterWapper>
            <S.SubmitBtn onClick={handleClick}>생성하기</S.SubmitBtn>
          </S.InputsWapper>
        </S.CreateWapper>
      </S.Wapper>
    )
}

  export default Create