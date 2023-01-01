import styled from "@emotion/styled";
import { themedPalette } from "../../styles/global";

export const HeaderWapper = styled.div`
    height: 6vh;
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2%;
    background: ${themedPalette.whiteBlack};
    transition: all 0.3s ease-in;
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
        color : ${themedPalette.text};
        transition: div 0.3s ease-in;
    }
    a{
        font-size: 1.5rem;
        height: 100%;
        display: flex;
        align-items: center;
        color : ${themedPalette.text};
        transition: all 0.3s ease-in;
        text-decoration: none;
    }
`;

export const RightWapper = styled.div`
    font-size: 1.5rem;
    width: 300px;
    height: 5vh;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 30px;
`;

export const ProfileBox = styled.div`
   width :50px;
   height: 100%;
    svg{
        width: 50px;
        height: 100%;
        cursor: pointer;

    }
`;

export const DarkModeBtn = styled.div`
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    svg{
        color: ${themedPalette.text}
    }

    :hover{
        background-color: #EFEFEF;
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
    padding-left: 20px;

    input {
        color: gray;
        border: none;
        width: 87%;
        height: 100%;
        outline: none;
        font-size: 1rem;
        background-color: transparent;
    }

    label{
        position: absolute;
        top: 6px;
        left: 350px;
        width: 30px;
        cursor: pointer;
    }

`;

