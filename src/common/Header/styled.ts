import styled from "@emotion/styled";


export const HeaderWapper = styled.div`
    height: 5vh;
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2%;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
`;

export const LeftWapper = styled.div`
    width: 250px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    div{
    cursor: pointer;
    display: flex;
    justify-content: center;
    font-size: 1.1rem;
    height: 70%;
    width: 70px;
    background-image: linear-gradient(transparent 85%, #77D6B3 60%);
    background-repeat: no-repeat;
    background-size: 0% 100%;
    }
`;

export const RightWapper = styled.div`
    font-size: 1.5rem;
`;