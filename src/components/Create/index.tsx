import * as S from "./styled";
import { Header } from "../../common";
import { CalendarIcon, MemoCreate } from "../../../public/svg";
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
    const today = new Date();
    const year = today.getFullYear();
    const month = ('0' + (today.getMonth() + 1)).slice(-2);
    const day = ('0' + today.getDate()).slice(-2);
    const TodayDate = year + '-' + month  + '-' + day;    
    const [date , setDate] = useState(TodayDate);


    const handleClick = async () => {
    if(!title) return toast('제목을 입력하세요.', {type: 'warning' })
    else if(!content) return toast('내용을 입력하세요.', {type: 'warning' })
    else if(!maxCount) return toast('인원수를 입력하세요.', {type: 'warning' })
    else if(!date) return toast('날짜를 선택하세요.', {type: 'warning' })
    else if(studyType === "컨퍼런스" && ( maxCount > 35 || maxCount < 15 )) return toast('컨퍼런스 인원수는 15 부터 35명입니다', {type: 'warning' })
    const {errorMsg}:any =  await create(title, content, topic, date, maxCount, studyType);    
    if (errorMsg === '시청각실을 빌릴 수 없는 날짜 입니다.') {
      return toast(errorMsg , {type: 'warning' })
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
                <S.BottomInput placeholder="날짜 선택" id="날짜" type="date" value={date} min={TodayDate} onChange={(e) => setDate(e.target.value)}/>
                <label htmlFor="날짜">
                  <CalendarIcon/>
                </label>
              </S.BottomWapper>
            </S.ConterWapper>
            <S.SubmitBtn onClick={handleClick}>생성하기</S.SubmitBtn>
          </S.InputsWapper>
        </S.CreateWapper>
      </S.Wapper>
    )
}

  export default Create