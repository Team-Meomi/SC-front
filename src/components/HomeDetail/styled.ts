import styled from "@emotion/styled";
import { themedPalette } from "../../styles/global";

interface TopicProps {
    BtnColor?: string;
  };

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
    background: ${themedPalette.header};
`;

export const BackBtn = styled.div`
    position: absolute;
    top: 40px;
    left: 50px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    cursor: pointer;
    color: ${themedPalette.text};
`;

export const DeleteBtn = styled.div`
    position: absolute;
    top: 50px;
    left: 87%;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    cursor: pointer;
    color: #F87070;
`;

export const ModifyBtn = styled.div`
    position: absolute;
    top: 50px;
    left: 81%;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    cursor: pointer;
    color: #FFBC41;
`;


export const DecsWapper = styled.div`
    height:650px;
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content: center;
    gap: 35px;
    font-size: 1.3rem;
    width: 100%;
    color: ${themedPalette.text};
`;

export const DecsTitle = styled.div`
    font-size: 2.5rem;
    font-weight: bold;
    width: 100%;

    input {
        width: 100%;
        height: 50px;
        font-size: 1.5rem;
        padding-left: 30px;
        background: #FFFFFF;
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        outline: none;
        border: none;
        text-align: center;
        color: black;
    }
`;

export const DecsContent = styled.div`
    font-size: 1.5rem;
    color: rgba(114, 111, 111, 1);
    width: 100%;

    textarea{
        border: none;
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        outline: none;

        width: 100%;
        height: 10vh;
        padding: 15px 13px;
        color: black;
        resize: none;
        font-size: 1.3rem;
        background-color: white;
    }
`;

export const SpanWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
    width: 100%;
    div{
        display: flex;
        gap: 15px;
    }

    input {
        width: 200px;
        height: 30px;
        font-size: 1.1rem;
        padding-left: 20px;
        background: #FFFFFF;
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        outline: none;
        border: none;
        color: black;
    }
    input[type="date"] {
        position: relative;
    }
    input[type="date"]::before {
        display:none;
    }
    input[type="date"]::-webkit-calendar-picker-indicator{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: transparent;
        margin-left: 0px;
        cursor: pointer;
    }
    input[type="number"] {
        text-align: center;
        padding: 0;
    }
    input[type='number']::-webkit-outer-spin-button,
    input[type='number']::-webkit-inner-spin-button {
	  -webkit-appearance: none;
	  margin: 0;
    }
    span {
        display: flex;
        align-items: center;
        gap: 20px;
    }
`;

export const TopicBtns = styled.div`
    width: 80%;
    height: 45px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    input{
        display: none;
    }
    input[type=radio]+label{
        width: 100px;
        height: 30px;
        display: flex;
        font-size: 1.1rem;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        background: #F2F2F2;
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
        color: rgba(121, 121, 121, 0.8);
        cursor: pointer;
    }
    input[type=radio]:checked+label{
        background: ${(props:TopicProps) => props.BtnColor};
        color: white;
    }
`;

export const SubmitBtn = styled.button`
    width: 100%;
    height: 60px;
    display:flex;
    align-items:center;
    justify-content:center;
    background: #77D6B3;
    border-radius: 10px;
    cursor: pointer;
    border: none;
    font-size: 1.3rem;
    font-weight: bold;
    color: white;
`;

export const RightWapper = styled.div`
    width: 55%;
    height: 100%;
    display:flex;
    flex-wrap:wrap;
    justify-content:flex-start;
    align-content:flex-start;
    padding: 5vh 4% 0 4.3%;
    gap: 3vh;
    background: ${themedPalette.homeDetail};
    overflow-y: scroll;
`;

export const CommentInputBox = styled.div`
    width: 100%;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;

    textarea {
        border: none;
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        outline: none;

        height: 100px;
        width: 100%;
        padding: 20px 13px;
        color: #A4A4A5;
        resize: none;
        font-size: 1.1rem;
        background: ${themedPalette.boxBackground};


        ::placeholder{
        color: #A4A4A5;
        }
    }
`;

export const CommentBtn = styled.div`
    width: 117px;
    height: 36px;
    color: white;
    background-color: #77CB9E;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    cursor: pointer;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    font-size: 1.2rem;
`;

export const CommentListBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
`;