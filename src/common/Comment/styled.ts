import styled from "@emotion/styled";
import { themedPalette } from "../../styles/global";

export const CommentBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    background-color: white;
    padding: 5px 20px 5px 10px;
    border-radius: 6px;
    background: ${themedPalette.boxBackground};
    color: ${themedPalette.text};
    box-shadow: 0px 2px 8px ${themedPalette.boxShadow};


    textarea {
        border: none;
        border-radius: 8px;
        outline: none;

        height: 100px;
        width: 99%;
        color: #A4A4A5;
        resize: none;
        font-size: 1.1rem;
        background-color: white;
        padding: 20px 20px;
        margin: 5px 10px;
        background: #efefef;
        ::placeholder{
        color: #A4A4A5;
        }
    }
`;

export const CommentTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    width: 100%;
    color: #77D6B3;

`;

export const Profile = styled.div`
    display: flex;
    align-items: center;
    
    svg{
        width: 80px;
        height: 80px;
    }
`;

export const ModifyBtn = styled.div`
    display: flex;
    gap: 5px;
    font-size: 0.9rem;
    span{
        cursor: pointer;
    }
`;

export const CommentBottom = styled.div`
    width: 100%;
    padding: 0 15px 10px 15px;
    display: flex;
    font-size: 1.1rem;

    pre{
        margin: 0;
    }
`;

export const ModifySubmitBtn = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height: 50px;

    button{
        width: 110px;
        height: 35px;
        outline: none;
        background: #77CB9E;
        border-radius: 4px;
        border: none;
        color: white;
        font-size: 1.1rem;
        cursor: pointer;
    }
`;