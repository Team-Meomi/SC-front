import styled from "@emotion/styled";
import { themedPalette } from "../../styles/global";

export const Warpper = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    color: ${themedPalette.text};
    background: ${themedPalette.background};
    font-weight: bold;
    font-size: 2rem;
    svg{
        width: 50%;
    }
`;