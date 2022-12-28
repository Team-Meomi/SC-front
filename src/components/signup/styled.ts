import styled from "@emotion/styled";
import { themedPalette } from "../../styles/global";

export const LoginWapper = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:flex-start;
  height: 100vh;
  gap: 2rem;
  padding-top: 10vh;
  background: ${themedPalette.background};
  color: ${themedPalette.text}
`;

export const DecsTitle = styled.div`
  width: 250px;
  text-align: center;
  font-size: 1.1rem;
  padding: 3vh 0;
`;

export const LoginTitle = styled.span`
  width: max-content;
  font-size: 3.1rem;
`;

export const InputsWapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 37vh;
  width: 50%;
  gap: 3vh;
  margin-bottom: 3vh;
`;

export const InputStyle = styled.div`
  position: relative;
  width: 370px;
  height: 65px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  padding-left: 20px;
  border-radius: 14px;
  border: none;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  background-color: white;

  label{
    opacity: 0.5;
      position: absolute;
      top: 23px;
      right: 30px;
      font-size: 1.1rem;
      color: gray;
  }

  span{
    position: absolute;
    top:67px;
    right: 20px;
    font-size: 0.8rem;
    color: #FF4747;
  }  
`;


export const LoginButton = styled.button`
  width: 370px;
  height: 7vh;
  border-radius: 10px;
  border: none;
  font-size: 1.2rem;
  background-color: grey;
  color: white                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   ;
  transition: all ease 0.2s 0s;
  font-weight: bold;
  background-color: #77D6B3;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #71BDAC;
  }
`;

export const RedirectSignUp = styled.div`
  width: 250px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.1rem;
  color: #9A9A9A;
  
  p{
    color: #77D6B3;
    font-weight: bold;
    cursor: pointer;
  }
`;