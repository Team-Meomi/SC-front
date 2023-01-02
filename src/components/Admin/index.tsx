import { useState } from "react";
import { toast } from "react-toastify";
import { useRecoilState } from "recoil";
import useSWR from "swr";
import { LogoutIcon, MemoAdmincon, MemoAloneicon } from "../../../public/svg";
import { SearchAudiovisual, SearchHomebase } from "../../Api/find";
import { AtomClassification } from "../../Atoms";
import { Classification, KindBar, Participant } from "../../common";
import ThemeIcon from "../../common/ThemeIcon";
import { UseRemoveToken, UseToday } from "../../Hooks";
import UseToggleTheme from "../../Hooks/UseToggleTheme";
import { DetailListType } from "../../types";
import { AdminController } from "../../Utils/lib/urls";
import * as S from "./styled";

const Admin = () => {
    const { data:audiovisualData } = useSWR<{list:DetailListType[]}>(AdminController.AdminKind("audiovisual"));
    const { data:homebaseData } = useSWR<{list:[DetailListType[]]}>(AdminController.AdminKind("homebase"));
    const [searchAudiovisualData, setSearchAudiovisualData] = useState<{list:DetailListType[]}>();
    const [searchHomebaseData, setSearchHomebaseData] = useState<{list:[DetailListType[]]}>();
    const {todayDate, dayOfWeek} = UseToday();
    const [,toggle] = UseToggleTheme();
    const [isAudiovisual, setIsAudiovisual] = useState(true);
    const [isSearchBtnClick, setIsSearchBtnClick] = useState(false);
	const [classificationValue,] = useRecoilState(AtomClassification);

    const handleSubmit = async () => {
        if(!classificationValue.stuClass && !classificationValue.stuGrade && !classificationValue.stuName) return setIsSearchBtnClick(false);
        if(classificationValue.stuClass && !classificationValue.stuGrade) return toast('학년을 선택하고 반을 선택해주세요.', {type:"warning" })
        const {data:searchDataA}:any = await SearchAudiovisual(classificationValue)
        const {data:searchDataH}:any = await SearchHomebase(classificationValue)
        
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
                <LogoutIcon />
                </S.LogoutBtn>
                <span>{`${todayDate}(${dayOfWeek})`}</span>
                <span>컨퍼런스와 스터디 입니다.</span>
                <Classification onSubmit={handleSubmit}/>
                </S.FilterWrapper>
                <MemoAdmincon/>
            </S.LeftWrapper>
            <S.RightWrapper>
                <S.DarkModeBtn onClick={toggle}>
                    <ThemeIcon/>
                </S.DarkModeBtn>
                <KindBar state={isAudiovisual} stuState={setIsAudiovisual} left={"시청각실"} right={"홈베이스"} />
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
                                item && item.length !== 0 ? (
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
                                ) : (
                                    // <MemoAloneicon/>
                                    <div></div>
                                )
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