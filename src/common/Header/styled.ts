import styled from "@emotion/styled";

export const HeaderWapper = styled.div`
    height: 6vh;
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
    div {
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
    width: 300px;
    height: 5vh;
    display: flex;
    justify-content: flex-end;

`;

export const ProfileBox = styled.div`
   width :50px;
   height: 100%;
           z-index: 100;
        border: 1px solid black;
    svg{
        width: 50px;
        height: 100%;
        cursor: pointer;

    }
`;


export const CenterWapper = styled.div`
    position: relative;
    width: 400px;
    height: 4.5vh;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border: 2px solid #77D6B3;
    border-radius: 8px;
    padding-left: 40px;

    input {
        border: none;
        width: 60%;
        height: 100%;
        outline: none;
        font-size: 1rem;
    }

    label{
        position: absolute;
        top: 6px;
        left: 8px;
        width: 100px;
    }

`;

