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
    font-size: 2.5rem;
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

export const Contant = styled.div`
  width: 40%;
  height: 100px;
  background: #FFFFFF;
  border-radius: 8px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 10px 15px;
  margin: 7px 0;
  cursor: pointer;
`;

export const ContantTop = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p{
    width: 70%;
    font-size: 1.3rem;
    font-weight: bold;
      overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const ConferenceText = styled.span`
  color: #7092BA;
  font-weight: bold;
`;

export const ContantBottom = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Topic = styled.div`
  font-size: 1.1rem;
  display: flex;
  svg{
    width: 20px;
  }
`;

export const Date = styled.div`
  font-size: 0.9rem;
`;