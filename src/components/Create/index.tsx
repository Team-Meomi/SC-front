import * as S from "./styled";
import { useRouter } from "next/router";
import useSWR from 'swr';
import { Header } from "../../common";
import { MemoCreate } from "../../../public/svg";
import { useState } from "react";
import { create } from "../../Api/find";

const Create = () => {
    const router = useRouter();
    const [kind , setKind] = useState("conference")
    const [title , setTitle] = useState("");
    const [content , setContent] = useState("");
    const [topic, setTopic] = useState("BE");
    const [maxCount , setmaxCount] = useState<number>();
    const [date , setDate] = useState("");
    
    const handleClick = async () => {
    if(!maxCount) return console.log("널이면 안되지");
    if(!date) return console.log("또널이네?");
      console.log(title,content,topic,date,maxCount);
      await create(kind, title, content, topic, date, maxCount);
    }

    return (
      <S.Wapper>
        <Header />
        <S.CreateWapper>
          <MemoCreate />
          <S.InputsWapper>
            <S.RadioBtns>
                <input defaultChecked type="radio" value={kind} id="conference" name="kind" onClick={() => setKind("conference")}/><label htmlFor="conference">컴퍼런스</label>
                <input type="radio" value={kind} id="study" name="kind" onClick={() => setKind("study")} /><label htmlFor="study">스터디</label>
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
                <S.BottomInput placeholder="인원 수 입력" type="text" value={maxCount} onChange={(e:any) => setmaxCount(e.target.value) }/>
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