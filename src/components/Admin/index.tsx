import { useEffect, useState } from "react";
import useSWR from "swr";
import { MemoAdmincon, MemoAloneicon } from "../../../public/svg";
import { Classification, Participant } from "../../common";
import { UseToday } from "../../Hooks";
import { DetailListType } from "../../types";
import * as S from "./styled";

const Admin = () => {
    const [isAudiovisual, setIsAudiovisual] = useState(true);
    const { data:audiovisualData } = useSWR<{list:DetailListType[]}>('admin/study/audiovisual');
    const { data:homebaseData } = useSWR<{list:[DetailListType[]]}>('admin/study/audiovisual');
    const {todayDate, dayOfWeek} = UseToday();
    const [stuGrade, setStuGrade] = useState('');
	const [stuClass, setStuClass] = useState('');
	const [stuName, setStuName] = useState('');
    const [isSearchBtnClick ,setIsSearchBtnClick] = useState(false);
    const { data:searchAudiovisualData, mutate:searchAudiovisualDataMutate } = useSWR<{list:DetailListType[]}>(`admin/study/search?title=${stuName}`);
    const { data:searchHomebaseData, mutate:searchHomebaseMutate } = useSWR<{list:[DetailListType[]]}>(`admin/study/search?title=${stuName}`);
    
    const handleSubmit = () => {
        console.log(stuGrade,stuClass,stuName);
        searchAudiovisualDataMutate();
        searchHomebaseMutate();
        setIsSearchBtnClick(true);
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
                        stuName={stuName}
                        setStuGrade={setStuGrade}
                        setStuClass={setStuClass}
                        setStuName={setStuName}
				    />
                    <S.FilterBox></S.FilterBox>
                </S.FilterWrapper>
                <MemoAdmincon/>
            </S.LeftWrapper>
            <S.RightWrapper>
                <S.KindBar>
                <span style={{color: isAudiovisual ? "#77D6B3" : "#999999" }} onClick={() => setIsAudiovisual(true)}>시청각실</span>
                <div>|</div>
                <span style={{color: isAudiovisual ? "#999999" : "#77D6B3"}} onClick={() => setIsAudiovisual(false)}>홈베이스</span>
                </S.KindBar>
                <S.ContantWrapper>
                {
                    isAudiovisual ? (
                        isSearchBtnClick ? ( 
                            searchAudiovisualData?.list ? (searchAudiovisualData.list.map((i) => (
                                <Participant key={i.id} id={i.id} stuNum={i.stuNum} name={i.name} />
                            ))
                            ):(
                                <MemoAloneicon/>
                            )
                        ) : (
                            audiovisualData?.list ? (audiovisualData.list.map((i) => (
                                <Participant key={i.id} id={i.id} stuNum={i.stuNum} name={i.name} />
                            ))
                            ):(
                                <MemoAloneicon/>
                            )
                        )
                    ) : (
                        isSearchBtnClick ? (
                            homebaseData?.list ? (homebaseData.list.map((item) => (
                                <div>
                                {
                                item.map((i) => (
                                    <Participant key={i.id} id={i.id} stuNum={i.stuNum} name={i.name} />
                                ))
                                }
                            <MemoAloneicon/>
                                </div>
                            ))
                            ):(
                                <MemoAloneicon/>
                            )
                        ) : (
                            searchHomebaseData?.list ? (searchHomebaseData.list.map((item) => (
                                <div>
                                {
                                item.map((i) => (
                                    <Participant key={i.id} id={i.id} stuNum={i.stuNum} name={i.name} />
                                ))
                                }
                               <MemoAloneicon/>
                                </div>
                            ))
                            ):(
                                <MemoAloneicon/>
                            )
                            
                        )
                    )               
                }
                
                </S.ContantWrapper>
            </S.RightWrapper>
        </S.Wrapper>
    )
}

export default Admin