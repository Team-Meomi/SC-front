import { MemoAloneicon } from "../../../public/svg";
import * as S from "./styled";

const Error = ({title}:{title:string}) => {
    return (
        <S.Wrapper>
            <MemoAloneicon />
            <p>{title}</p>
        </S.Wrapper>
    )
}

export default Error