import * as S from "./styled";
import { Header } from "../../common";
import { MemoCreate } from "../../../public/svg";
import { useEffect, useState } from "react";
import { create } from "../../Api/find";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const Create = () => {
    const router = useRouter();
    const [studyType , setstudyType] = useState("컨퍼런스")
    const [title , setTitle] = useState("");
    const [content , setContent] = useState("");
    const [topic, setTopic] = useState("BE");
    const [maxCount , setmaxCount] = useState<number>();
    const [date , setDate] = useState("");

    const today = new Date();
    const year = today.getFullYear();
    const month = ('0' + (today.getMonth() + 1)).slice(-2);
    const day = ('0' + today.getDate()).slice(-2);
    const TodayDate = year + '-' + month  + '-' + day;    

    const handleClick = async () => {
    if(!title) return toast('제목을 입력하세요.', {type: 'warning' })
    else if(!content) return toast('내용을 입력하세요.', {type: 'warning' })
    else if(!maxCount) return toast('인원수를 입력하세요.', {type: 'warning' })
    else if(!date) return toast('날짜를 선택하세요.', {type: 'warning' })
    else if(date < TodayDate ) return toast('오늘 이전 날짜는 선택할 수 없습니다.', {type: 'warning' })
    else if(studyType === "컨퍼런스" && ( maxCount > 35 || maxCount < 15 )) return toast('컨퍼런스 인원수는 15 부터 35명입니다', {type: 'warning' })
    const {errorMsg}:any =  await create(title, content, topic, date, maxCount, studyType);
    if (errorMsg === 'Request failed with status code 400') {
      return toast('해당날짜에 신청할 수 없습니다.', {type: 'warning' })
    }
    router.push('/home')
    }

    useEffect(() => {
      if(studyType === "스터디"){
        setmaxCount(5);
      }else{
        setmaxCount(0);
      }
    },[studyType])

    return (
      <S.Wapper>
        <Header />
        <S.CreateWapper>
          <MemoCreate />
          <S.InputsWapper>
            <S.RadioBtns>
                <input defaultChecked type="radio" value={studyType} id="컨퍼런스" name="studyType" onClick={() => setstudyType("컨퍼런스")}/><label htmlFor="컨퍼런스">컨퍼런스</label>
                <input type="radio" value={studyType} id="스터디" name="studyType" onClick={() => setstudyType("스터디")} /><label htmlFor="스터디">스터디</label>
            </S.RadioBtns>
            <S.ConterWapper>
              <S.TitleInput placeholder="제목을 입력하세요" value={title} onChange={(e) => setTitle(e.target.value) }/>
              <S.ContentText placeholder="내용을 입력해주세요" value={content} onChange={(e) => setContent(e.target.value) }/>
              <S.TopicBtns>
                <input defaultChecked type="radio" value={topic} id="BE" name="topic" onClick={() => setTopic("BE")}/><label htmlFor="BE">BE</label>
                <input type="radio" value={topic} id="FE" name="topic" onClick={() => setTopic("FE")} /><label htmlFor="FE">FE</label>
                <input type="radio" value={topic} id="iOS" name="topic" onClick={() => setTopic("iOS")}/><label htmlFor="iOS">iOS</label>
                <input type="radio" value={topic} id="AOS" name="topic" onClick={() => setTopic("AOS")}/><label htmlFor="AOS">AOS</label>
                <input type="radio" value={topic} id="기타" name="topic" onClick={() => setTopic("기타")}/><label htmlFor="기타">기타</label>
              </S.TopicBtns>
              <S.BottomWapper>
                {
                  studyType === "스터디" ? (
                    <S.BottomInput readOnly type="number" value={5}/>
                  ) : (
                    <S.BottomInput placeholder="인원 수 입력" type="number" value={maxCount || ''} onChange={(e:any) => setmaxCount(e.target.value) }/>
                  )
                }
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