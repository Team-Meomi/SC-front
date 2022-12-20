import * as S from "./styled";
import { useRouter } from "next/router";
import { DetailListType, MainPageProps } from "../../types";
import { ProfileIcon } from "../../../public/svg";

const Participant = ({id,stuNum,name}:DetailListType) => {
  const router = useRouter();

    return (
      <S.Participant>
      <ProfileIcon/>
      <span>{`${stuNum} ${name}`}</span>
    </S.Participant>
    )
}

  export default Participant