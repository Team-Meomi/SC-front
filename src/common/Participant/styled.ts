import styled from "@emotion/styled";
import { themedPalette } from "../../styles/global";

export const Participant = styled.div`
    width: 30%;
    height: 90px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 4px;
    padding: 0 20px 0 5px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    background-color: white;
    font-size: 0.9rem;
    color: #77D6B3;
    background: ${themedPalette.boxBackground};
    cursor: pointer;

    svg{
        width: 80px;
        height: 80px;
    }
`;