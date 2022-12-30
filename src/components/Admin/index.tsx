import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-toastify";
import useSWR from "swr";
import { LogoutIcon, MemoAdmincon, MemoAloneicon, MoonIcon, SunIcon } from "../../../public/svg";
import { SearchAudiovisual } from "../../Api/find";
import { Classification, Participant } from "../../common";
import { UseRemoveToken, UseToday } from "../../Hooks";
import UseToggleTheme from "../../Hooks/UseToggleTheme";
import { DetailListType } from "../../types";
import * as S from "./styled";

const Admin = () => {
    const router = useRouter();
    const [isAudiovisual, setIsAudiovisual] = useState(true);
    const [isSearchBtnClick, setIsSearchBtnClick] = useState(false);
    const {todayDate, dayOfWeek} = UseToday();
    const [theme , toggle] = UseToggleTheme();
    const { data:audiovisualData } = useSWR<{list:DetailListType[]}>('admin/study/audiovisual');
    const { data:homebaseData } = useSWR<{list:[DetailListType[]]}>('admin/study/homebase');
    const [stuGrade, setStuGrade] = useState('');
	const [stuClass, setStuClass] = useState('');
	const [stuName, setStuName] = useState('');
    const [searchAudiovisualData, setSearchAudiovisualData] = useState<{list:DetailListType[]}>();
    const [searchHomebaseData, setSearchHomebaseData] = useState<{list:[DetailListType[]]}>();

    const handleSubmit = async () => {
        if(stuClass && !stuGrade) return toast('학년을 선택하고 반을 선택해주세요.', {type:"warning" })
        const {data:searchData}:any = await SearchAudiovisual(stuGrade,stuClass,stuName)
        setSearchAudiovisualData(searchData);
        setSearchHomebaseData(searchData);
        setIsSearchBtnClick(true);
    }

    const handleLogoutClick = () => {
        router.push('/');
        UseRemoveToken();
    }

    return (
        <S.Wrapper>
            <S.LeftWrapper>
                <S.FilterWrapper>
                <S.LogoutBtn onClick={handleLogoutClick}>
                {
                    <LogoutIcon />
                }
                </S.LogoutBtn>
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
                {
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
                                <S.UnderLine/>
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