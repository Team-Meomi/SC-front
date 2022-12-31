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
    background: ${themedPalette.header};
    transition: all 0.3s ease-in;
`;

export const LogoutBtn = styled.div`
    position: absolute;
    top: 50px;
    left: 30%;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
    color: red;
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
    color: ${themedPalette.text};
    transition: all 0.3s ease-in;
  }
`;

export const RightWrapper = styled.div`
    width: 65%;
    height: 100%;
    position: relative;
    display:flex;
    flex-direction:column;
    align-items: center;
    padding-top: 10vh;
    gap: 20px;
    background: ${themedPalette.homeDetail};
    color: ${themedPalette.text};
    transition: all 0.3s ease-in;
`;

export const DarkModeBtn = styled.div`
    position: absolute;
    width: 40px;
    height: 40px;
    right: 100px;
    top: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease-in;
    svg{
        color: ${themedPalette.text}
    }
    :hover{
        background-color: #EFEFEF;
    }

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
        transition: all 0.1s ease-in;
    }
    div{
        font-size: 30px;
        color: #999999;
        font-weight: bold;
    }
`;

export const ContantWrapper = styled.div`
    width: 100%;
    height: 80vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: flex-start;
    gap: 28px;
    overflow-y: scroll;
    padding: 0 15% 0 19%;

    svg{
        height: 60vh;
    }
`;

export const UnderLine = styled.div`
  width: 100%;
  height: 6px;
  /* background: ${themedPalette}; */
  background: #999999;
`;

export const HomeBaseWapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 15px;
`;

export const HomeBasePeople = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 28px;
    padding: 0 0  25px 0;
`;