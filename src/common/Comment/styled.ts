import styled from "@emotion/styled";
import { themedPalette } from "../../styles/global";

export const CommentBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    background-color: white;
    padding: 5px 10px;
    border-radius: 6px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

export const CommentTop = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 80px;

    svg{
        width: 80px;
        height: 80px;
    }
`;

export const CommentBottom = styled.div`
    width: 100%;
    padding: 0 0 15px 15px;
`;