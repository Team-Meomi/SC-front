import styled from "@emotion/styled";
import { themedPalette } from "../../styles/global";

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
`;

export const LeftWrapper = styled.div`
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    background: ${themedPalette.header};
    color: ${themedPalette.text};
`;

export const BackBtn = styled.div`
    position: absolute;
    top: 40px;
    left: 50px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    cursor: pointer;
`;

export const LogoutBtn = styled.div`
    position: absolute;
    top: 40px;
    left: 25%;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    cursor: pointer;
    color: red;
`;

export const ProfileName = styled.div`
    font-size: 2.3rem;
    font-weight: bold;
`;

export const RightWrapper = styled.div`
    width: 70%;
    height: 100%;
    background-color: #EFEFEF;
    display:flex;
    flex-direction:column;
    align-items: center;
    padding-top: 10vh;
    gap: 20px;
    background: ${themedPalette.background};
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
    overflow-x: hidden;
    padding-left: 15%;

    svg{
      width: 80%;
      height: 80%;
    }
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
  background: ${themedPalette.boxBackground};
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