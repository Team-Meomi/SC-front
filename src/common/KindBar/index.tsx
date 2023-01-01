import { ClassificationProps } from "../../types";
import * as S from "./styled";

const KindBar = ({state,stuState,left,right}:ClassificationProps) => {
    return (
        <S.KindBar>
        <span style={{color: state ? "#77D6B3" : "#999999" }} onClick={() => stuState(true)}>{left}</span>
        <div>|</div>
        <span style={{color: state ? "#999999" : "#77D6B3"}} onClick={() => stuState(false)}>{right}</span>
        </S.KindBar>
    )
}

export default KindBar