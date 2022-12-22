import * as S from "./styled";
import { useRouter } from "next/router";
import { MainPageProps } from "../../types";
import { categoryArray } from "../../Utils/categoryArray";

const Contant = ({id,title,category,date,type}:MainPageProps) => {
  const router = useRouter();
  const categoryFullName = categoryArray.filter((i) => i.value === category)[0] || ""

    return (
    <S.Contant onClick={() => router.push(`study/${id}`)}>
      <S.ContantTop>
        <p>{title}</p>
        <S.ConferenceText style={{color: type === "컨퍼런스" ? "#7B95F3" : "#D89DF4"}}>{type}</S.ConferenceText>
      </S.ContantTop>
      <S.ContantBottom>
        <S.Topic>{categoryFullName.fullname || category}</S.Topic>
        <S.Date>{date}</S.Date>
      </S.ContantBottom>
    </S.Contant>
    )
}

export default Contant