import styled from "@emotion/styled";

export const HomeDetailWapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: space-between;
`;

export const LeftWapper = styled.div`
    width: 55%;
    height: 100%;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:flex-start;
    padding: 5vh 8% 15vh 8%;
    position: relative;

`;

export const BackBtn = styled.div`
    position: absolute;
    top: 40px;
    left: 50px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    cursor: pointer;
`;

export const DecsWapper = styled.div`
    height:650px;
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content: center;
    gap: 35px;
    font-size: 1.3rem;
`;

export const DecsTitle = styled.div`
    font-size: 2.5rem;
    font-weight: bold;
`;

export const DecsContent = styled.div`
    font-size: 1.5rem;
    color: rgba(114, 111, 111, 1);
`;

export const SubmitBtn = styled.button`
    width: 100%;
    height: 60px;
    display:flex;
    align-items:center;
    justify-content:center;
    color: white;
    background: #77D6B3;
    border-radius: 10px;
    cursor: pointer;
    border: none;
    font-size: 1.3rem;
    font-weight: bold;
`;

export const RightWapper = styled.div`
    width: 55%;
    height: 100%;
    display:flex;
    flex-wrap:wrap;
    justify-content:flex-start;
    align-content:flex-start;
    padding: 10vh 4% 0 4.3%;
    gap: 5%;
    background: #EFEFEF;
    overflow-y: scroll;
`;