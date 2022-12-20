import * as S from "./styled";
import { useRouter } from "next/router";
import { MainPageProps } from "../../types";
import { categoryArray } from "../../Utils/categoryArray";

const Header = ({id,title,category,date,type}:MainPageProps) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/${category}/${id}`)
  }
  const categoryFullName = categoryArray.filter((i) => i.value === category)[0].fullname
  console.log(categoryFullName);
  

    return (
    <S.Contant onClick={handleClick}>
      <S.ContantTop>
        <p>{title}</p>
        <S.ConferenceText>{type}</S.ConferenceText>
      </S.ContantTop>
      <S.ContantBottom>
        <S.Topic>{category}</S.Topic>
        <S.Date>{date}</S.Date>
      </S.ContantBottom>
    </S.Contant>
    )
}

  export default Header