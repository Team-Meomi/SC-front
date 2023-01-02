import * as S from "./styled";
import { Header, TopicBtn } from "../../common";
import { MemoCreate } from "../../../public/svg";
import { useEffect, useState } from "react";
import { create } from "../../Api/find";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { StudyModifyType } from "../../types";
import { SubmitHandler, useForm } from "react-hook-form";
import { categoryArray } from "../../Utils/categoryArray";
import { UseToday } from "../../Hooks";

const Create = () => {
    const router = useRouter();
    const [studyType , setstudyType] = useState("컨퍼런스")
    const { register, handleSubmit, setValue, watch } = useForm<StudyModifyType>();
    const {todayDate} = UseToday();
    const [radioBtnColor , setRadioBtnColor] = useState("");

    const onValid:SubmitHandler<StudyModifyType> = async (d) => {
    if(!d.title) return toast('제목을 입력하세요.', {type: 'warning' })
    else if(!d.content) return toast('내용을 입력하세요.', {type: 'warning' })
    else if(!d.maxCount) return toast('인원수를 입력하세요.', {type: 'warning' })
    else if(!d.date) return toast('날짜를 선택하세요.', {type: 'warning' })
    else if(studyType === "컨퍼런스" && ( d.maxCount > 35 || d.maxCount < 15 )) return toast('컨퍼런스 인원수는 15 부터 35명입니다', {type: 'warning' })
    const res =  await create(d.title, d.content, d.category, d.date, d.maxCount, studyType);    
    if (res.errorMsg === '시청각실을 빌릴 수 없는 날짜 입니다.') {
      return toast(res.errorMsg , {type: 'warning' })
    }
    router.push('/home')
    toast('게시글이 작성되었습니다', {type: 'success' })
    }

    useEffect(()=> {
      setValue("category", "BE")
    },[])

    useEffect(() => {
      const Mycategory = categoryArray.filter((i) => i.value === watch().category)[0] || "";
      setRadioBtnColor(Mycategory.color)
    },[watch().category])

    useEffect(() => {
      if(studyType === "스터디"){
        setValue("maxCount", 4)
      }else {
        setValue("maxCount", undefined)
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
              <S.TitleInput placeholder="제목을 입력하세요" {...register("title")}/>
              <S.ContentText placeholder="내용을 입력해주세요" {...register("content")}/>
              <S.TopicBtns BtnColor={radioBtnColor}>
                <TopicBtn category={"BE"} MyCategory={"BE"} onClick={() => setValue("category", "BE")}/>
                <TopicBtn category={""} MyCategory={"FE"}  onClick={() => setValue("category", "FE")}/>
                <TopicBtn category={""} MyCategory={"iOS"} onClick={() => setValue("category", "iOS")}/>
                <TopicBtn category={""} MyCategory={"AOS"} onClick={() => setValue("category", "AOS")}/>
                <TopicBtn category={""} MyCategory={"기타"} onClick={() => setValue("category", "기타")}/>
              </S.TopicBtns>
              <S.BottomWapper>
                {
                  studyType === "스터디" ? (
                    <S.BottomInput readOnly type="number" {...register("maxCount")}/>
                  ) : (
                    <S.BottomInput placeholder="인원 수 입력" type="number"  {...register("maxCount")}/>
                  )
                }
                <S.BottomInput placeholder="날짜 선택" id="날짜" type="date" min={todayDate} {...register("date")}/>
              </S.BottomWapper>
            </S.ConterWapper>
            <S.SubmitBtn onClick={handleSubmit(onValid)}>생성하기</S.SubmitBtn>
          </S.InputsWapper>
        </S.CreateWapper>
      </S.Wapper>
    )
}

  export default Create