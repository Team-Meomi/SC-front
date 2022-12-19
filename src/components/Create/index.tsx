import * as S from "./styled";
import { useRouter } from "next/router";
import useSWR from 'swr';
import { Header } from "../../common";
import { MemoCreate } from "../../../public/svg";
import { useState } from "react";

const Create = () => {
    const router = useRouter();
    const [kind , setKind] = useState("컴퍼런스")
    const [title , setTitle] = useState("");
    const [content , setContent] = useState("");
    const [topic, setTopic] = useState("BE");
    const [peopleNum , setPeopleNum] = useState(0);
    const [date , setDate] = useState("");


    return (
      <S.Wapper>
        <Header />
        <S.CreateWapper>
          <MemoCreate />
          <S.InputsWapper>
            <S.RadioBtns>
                <input defaultChecked type="radio" value={kind} id="컴퍼런스" name="kind" onClick={() => setKind("컴퍼런스")}/><label htmlFor="컴퍼런스">컴퍼런스</label>
                <input type="radio" value={kind} id="스터디" name="kind" onClick={() => setKind("스터디")} /><label htmlFor="스터디">스터디</label>
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
                <S.BottomInput placeholder="인원 수 입력" type="number" onChange={(e:any) => setPeopleNum(e.target.value) }/>
                <S.BottomInput placeholder="날짜 선택" type="date" value={date} onChange={(e) => setDate(e.target.value)}/>
              </S.BottomWapper>
            </S.ConterWapper>
            <S.SubmitBtn>생성하기</S.SubmitBtn>
          </S.InputsWapper>
        </S.CreateWapper>
      </S.Wapper>
    )
}

  export default Create