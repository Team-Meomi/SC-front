import { useState } from "react";
import { MemoAdmincon, MemoAloneicon } from "../../../public/svg";
import { Classification, Participant } from "../../common";
import { UseRole, UseToday } from "../../Hooks";
import * as S from "./styled";

const Admin = () => {
    const [isConference,setIsConference] = useState(true);
    //   const role = await UseRole();
    //   const { data } = useSWR<MainPageProps[]>(StudyController.Study("user"));
    const data:any[] = [];
    const {todayDate, dayOfWeek} = UseToday();
    const [stuGrade, setStuGrade] = useState<string>('0');
	const [stuClass, setStuClass] = useState<string>('');
	const [stuName, setStuName] = useState<string>('');

    const handleSubmit = () => {
        console.log("제출버튼");
    }
      
    return (
        <S.Wrapper>
            <S.LeftWrapper>
                <S.FilterWrapper>
                    <span>{`${todayDate}(${dayOfWeek})`}</span>
                    <span>컨퍼런스와 스터디 입니다.</span>
                    <Classification
					onSubmit={handleSubmit}
					stuGrade={stuGrade}
					stuClass={stuClass}
					setStuGrade={setStuGrade}
					setStuClass={setStuClass}
				    />
                    <S.FilterBox></S.FilterBox>
                </S.FilterWrapper>
                <MemoAdmincon/>
            </S.LeftWrapper>
            <S.RightWrapper>
                <S.KindBar>
                <span style={{color: isConference ? "#77D6B3" : "#999999" }} onClick={() => setIsConference(true)}>컨퍼런스</span>
                <div>|</div>
                <span style={{color: isConference ? "#999999" : "#77D6B3"}} onClick={() => setIsConference(false)}>스터디</span>
                </S.KindBar>
                <S.ContantWrapper>
                {
                    
                }
                    <Participant id={0} stuNum={2308} name={"유환빈"} />
                    <Participant id={0} stuNum={2308} name={"유환빈"} />
                    <Participant id={0} stuNum={2308} name={"유환빈"} />
                
                </S.ContantWrapper>
            </S.RightWrapper>
        </S.Wrapper>
    )
}

export default Admin