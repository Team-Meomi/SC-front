import styled from "@emotion/styled";
import { themedPalette } from "../../styles/global";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${themedPalette.background};
`;

export const HomeWrapper = styled.div`
  width: 100%;
  height: 94vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:flex-start;
  height: 100vh;
  overflow-y: scroll;
`;



export const IntroWapper = styled.div`
  width: 100%;
  height: 45vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 7%;

  svg {
	}
`;

export const IntroductionWapper = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  span{
    font-size: 1.2rem;
    font-weight: 300;
    color : ${themedPalette.text}
  }
`;

export const IntroTitle = styled.div`
  font-size: 3rem;
  font-weight: bold;
  color : ${themedPalette.text}
`;


export const CreateBtn = styled.div`
  width: 165px;
  height: 43px;
  border: none;
  font-size: 1rem;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #77D6B3;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  font-weight: bold;
  color: white;
  cursor: pointer;
`;

export const ContansWapper = styled.div`
  width: 100%;
  padding: 3vh 7%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.5rem;
`;

export const ContansMainTitle = styled.div`
    font-size: 2rem;
    font-weight: bold;
    color : ${themedPalette.text}
`;

export const Contants = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: flex-start;
  gap: 4.8%;

`;