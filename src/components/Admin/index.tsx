import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-toastify";
import useSWR from "swr";
import { LogoutIcon, MemoAdmincon, MemoAloneicon, MoonIcon, SunIcon } from "../../../public/svg";
import { SearchAudiovisual, SearchHomebase } from "../../Api/find";
import { Classification, Participant } from "../../common";
import { UseRemoveToken, UseToday } from "../../Hooks";
import UseToggleTheme from "../../Hooks/UseToggleTheme";
import { DetailListType } from "../../types";
import { AdminController } from "../../Utils/lib/urls";
import * as S from "./styled";

const Admin = () => {
    const router = useRouter();
    const { data:audiovisualData } = useSWR<{list:DetailListType[]}>(AdminController.AdminKind("audiovisual"));
    const { data:homebaseData } = useSWR<{list:[DetailListType[]]}>(AdminController.AdminKind("homebase"));
    const [searchAudiovisualData, setSearchAudiovisualData] = useState<{list:DetailListType[]}>();
    const [searchHomebaseData, setSearchHomebaseData] = useState<{list:[DetailListType[]]}>();
    const [isAudiovisual, setIsAudiovisual] = useState(true);
    const [isSearchBtnClick, setIsSearchBtnClick] = useState(false);
    const {todayDate, dayOfWeek} = UseToday();
    const [theme , toggle] = UseToggleTheme();
    const [stuGrade, setStuGrade] = useState('');
	const [stuClass, setStuClass] = useState('');
	const [stuName, setStuName] = useState('');

    const handleSubmit = async () => {
        if(stuClass && !stuGrade) return toast('학년을 선택하고 반을 선택해주세요.', {type:"warning" })
        const {data:searchDataA}:any = await SearchAudiovisual(stuGrade,stuClass,stuName)
        const {data:searchDataH}:any = await SearchHomebase(stuGrade,stuClass,stuName)
        console.log(searchDataH);
        
        setSearchAudiovisualData(searchDataA);
        setSearchHomebaseData(searchDataH);
        setIsSearchBtnClick(true);
    }

    const handleLogoutClick = () => {
        UseRemoveToken();
        window.location.href='/';
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
                            searchAudiovisualData?.list && searchAudiovisualData?.list.length > 0 ? (searchAudiovisualData.list.map((i:DetailListType,index) => (
                                <Participant key={index} id={i.id} stuNum={i.stuNum} name={i.name} />
                            ))
                            ):(
                                <MemoAloneicon/>
                            )
                        ) : (
                            audiovisualData?.list && audiovisualData?.list.length > 0 ? (audiovisualData.list.map((i,index) => (
                                <Participant key={index} id={i.id} stuNum={i.stuNum} name={i.name} />
                            ))
                            ):(
                                <MemoAloneicon/>
                            )
                        )
                    ) : (
                        isSearchBtnClick ? (
                            searchHomebaseData?.list && searchHomebaseData?.list.length > 0 ? (searchHomebaseData.list.map((item,index) => (
                                // <Participant key={index} id={i.id} stuNum={i.stuNum} name={i.name} />
                                <S.HomeBaseWapper key={index}>
                                    <S.HomeBasePeople>
                                    {
                                    item.map((i,index) => (
                                        <Participant key={index} id={i.id} stuNum={i.stuNum} name={i.name} />
                                    ))
                                    }
                                    </S.HomeBasePeople>
                                <S.UnderLine/>
                                </S.HomeBaseWapper>
                            ))
                        ):(
                            <MemoAloneicon/>
                        )
                        ) : (
                            homebaseData?.list && homebaseData?.list.length > 0 ? ( homebaseData.list.map((item,index) => (
                            <S.HomeBaseWapper key={index}>
                                <S.HomeBasePeople>
                                {
                                item.map((i,index) => (
                                    <Participant key={index} id={i.id} stuNum={i.stuNum} name={i.name} />
                                ))
                                }
                                </S.HomeBasePeople>
                            <S.UnderLine/>
                            </S.HomeBaseWapper>
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