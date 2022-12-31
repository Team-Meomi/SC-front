import * as S from "./styled";

interface ClassificationProps {
	state: boolean;
	stuState: any;
}

const KindBar: React.FC<ClassificationProps> = ({state,stuState}) => {
    return (
        <S.KindBar>
        <span style={{color: state ? "#77D6B3" : "#999999" }} onClick={() => stuState(true)}>시청각실</span>
        <div>|</div>
        <span style={{color: state ? "#999999" : "#77D6B3"}} onClick={() => stuState(false)}>홈베이스</span>
        </S.KindBar>
    )
}

export default KindBar