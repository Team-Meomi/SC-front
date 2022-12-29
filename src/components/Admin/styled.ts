import styled from "@emotion/styled";
import { themedPalette } from "../../styles/global";

export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
`;

export const LeftWrapper = styled.div`
    width: 35%;
    height: 100vh;
    padding: 12vh 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    svg{
      width: 85%;
    }
`;

export const FilterWrapper = styled.div`
  width: 100%;
  height: 40vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  span{
    font-size: 2.2rem;
  }
`;

export const FilterBox = styled.div`

`;


export const RightWrapper = styled.div`
    width: 65%;
    height: 100%;
    display:flex;
    flex-direction:column;
    align-items: center;
    padding-top: 10vh;
    gap: 20px;
    background: ${themedPalette.homeDetail};
    color: ${themedPalette.text};
`;

export const KindBar = styled.div`
    display: flex;
    align-items: center;
    padding: 5vh 0;
    gap: 100px;

    span{
        cursor: pointer;
        font-size: 30px;
        color: #999999;
        font-weight: bold;
    }
    div{
        font-size: 30px;
        color: #999999;
        font-weight: bold;
    }
`;

export const ContantWrapper = styled.div`
    width: 100%;
    height: 74vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: flex-start;
    gap: 28px;
    overflow-y: scroll;
    padding: 0 15% 0 19%;
`;

export const UnderLine = styled.div`
  width: 80%;
  height: 5px;
  background: ${themedPalette.text};
`;