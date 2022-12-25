import { MemoAloneicon } from "../../../public/svg";
import * as S from "./styled";

const Error = ({title}:{title:string}) => {
    return (
        <S.Warpper>
            <MemoAloneicon />
            <p>{title}</p>
        </S.Warpper>
    )
}

export default Error