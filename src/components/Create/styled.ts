import styled from "@emotion/styled";
import { themedPalette } from "../../styles/global";

interface TopicProps {
    BtnColor?: string;
  };

export const Wapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: ${themedPalette.background};
`;

export const CreateWapper = styled.div`
    width: 100%;
    height: 94vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 4%;

    svg {
        width: 46%;
    }

`;

export const InputsWapper = styled.div`
    width: 50%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: space-between;

`;

export const RadioBtns = styled.div`
    height: 15vh;
    display: flex;
    justify-content: space-between;
    align-items: center;

    input{
        display: none;
    }
    input[type=radio]+label{
    height: 90%;
    width: 45%;
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 10px;
    font-size: 1.5rem;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);

    color: rgba(121, 121, 121, 0.8);
    background-color: #F2F2F2;
    cursor: pointer;
    }
    input[type=radio]:checked+label{
   
    color: white;
    background-color: rgba(119, 214, 179, 0.7);
    }
`;

export const TitleInput = styled.input`
    width: 100%;
    height: 50px;
    border: none;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    outline: none;
    text-align: center;
    color: #A4A4A5;
    font-size: 1.3rem;
    background-color: white;

    ::placeholder{
      color: #A4A4A5;
    }
`;

export const ContentText = styled.textarea`
    border: none;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    outline: none;

    height: 20vh;
    padding: 15px 13px;
    color: #A4A4A5;
    resize: none;
    font-size: 1.3rem;
    background-color: white;


    ::placeholder{
    color: #A4A4A5;
    }
`;

export const ConterWapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 50vh;
    width: 100%;

`;

export const TopicBtns = styled.div`
    width: 100%;
    height: 55px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    input{
        display: none;
    }
    input[type=radio]+label{
        width: 120px;
        height: 35px;
        display: flex;
        font-size: 1.3rem;
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

export const BottomWapper = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    input[type='number']::-webkit-outer-spin-button,
    input[type='number']::-webkit-inner-spin-button {
	  -webkit-appearance: none;
	  margin: 0;
    }

    input[type="date"] {
        width:40%;
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
`;

export const BottomInput = styled.input`
    width: 45%;
    height: 50px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    text-align: center;
    font-size: 1.3rem;
    border: none;
    outline: none;
    background-color: white;
    color: #A4A4A5;
`;

export const SubmitBtn = styled.button`
    width: 100%;
    height: 60px;
    border: none;
    background-color: #77D6B3;
    outline: none;
    border-radius: 10px;
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
    cursor: pointer;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
`;