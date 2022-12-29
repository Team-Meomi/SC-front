import { useState } from "react";
import useSWR from "swr";
import { MemoAdmincon, MemoAloneicon, MoonIcon, SunIcon } from "../../../public/svg";
import { SearchAudiovisual } from "../../Api/find";
import { Classification, Participant } from "../../common";
import { UseToday } from "../../Hooks";
import UseToggleTheme from "../../Hooks/UseToggleTheme";
import { DetailListType } from "../../types";
import * as S from "./styled";

const Admin = () => {
    const [isAudiovisual, setIsAudiovisual] = useState(true);
    const {todayDate, dayOfWeek} = UseToday();
    const [theme , toggle] = UseToggleTheme();
    // const { data:audiovisualData } = useSWR<{list:DetailListType[]}>('admin/study/audiovisual');
    // const { data:homebaseData } = useSWR<{list:[DetailListType[]]}>('admin/study/audiovisual');
    const [stuGrade, setStuGrade] = useState('0');
	const [stuClass, setStuClass] = useState('');
	const [stuName, setStuName] = useState('');
    const [isSearchBtnClick ,setIsSearchBtnClick] = useState(false);
    // const { data:searchAudiovisualData, mutate:searchAudiovisualDataMutate } = useSWR<{list:DetailListType[]}>(`admin/study/search?title=${stuName}`);
    // const { searchAudiovisualData,  setSearchAudiovisualData} = useState<DetailListType[]>();
    // const { data:searchHomebaseData, mutate:searchHomebaseMutate } = useSWR<{list:[DetailListType[]]}>(`admin/study/search?title=${stuName}`);
    
    const handleSubmit = async () => {
        console.log(stuGrade,stuClass,stuName);
        const {SearchAuData}:any = await SearchAudiovisual(stuGrade,stuClass,stuName)
        // setSearchAudiovisualData(data.list)
        // searchAudiovisualDataMutate();
        // searchHomebaseMutate();
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
                </S.FilterWrapper>
                <MemoAdmincon/>
            </S.LeftWrapper>
            <S.RightWrapper>
            <S.DarkModeBtn onClick={toggle}>
            {
            theme === "light" ? (
                <SunIcon width={30}/>
            ) : (
                <MoonIcon width={27} style={{color:"white"}}/>
            )
            }
            </S.DarkModeBtn>
                <S.KindBar>
                    <span style={{color: isAudiovisual ? "#77D6B3" : "#999999" }} onClick={() => setIsAudiovisual(true)}>시청각실</span>
                    <div>|</div>
                    <span style={{color: isAudiovisual ? "#999999" : "#77D6B3"}} onClick={() => setIsAudiovisual(false)}>홈베이스</span>
                </S.KindBar>
                <S.ContantWrapper>
                {/* {
                    isAudiovisual ? (
                        isSearchBtnClick ? ( 
                            searchAudiovisualData?.list ? (searchAudiovisualData.list.map((i:DetailListType) => (
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
                }                */}
                </S.ContantWrapper>
            </S.RightWrapper>
        </S.Wrapper>
    )
}
export default Admin