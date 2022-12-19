import styled from "@emotion/styled";


export const HomeWapper = styled.div`
  margin-top:  10vh;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:flex-start;
  height: 100vh;
  gap: 2rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export const Header = styled.div`
  width: 100%;
  height: 10vh;
  /* border: 1px solid black; */
`;

export const CreateBtnsWapper = styled.div`
  width: 85%;
  height: 240px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CreateBtn = styled.div`
  width: 210px;
  height: 210px;
  border: none;
  font-size: 2.4rem;
  padding: 20px;
  background: #C3E9DB;
  border-radius: 10px;
  font-weight: bold;
`;

export const InputBox = styled.div`
  width: 85%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: #FFFFFF;
  border: 2px solid #77D6B3;
  border-radius: 10px;
  position: relative;

  input{
    height: 80%;
    width: 85%;
    margin-left: 10px;
    outline: none;
    font-size: 1.5rem;
    border: none;
    color: #77D6B3;
  }

  label{
    opacity: 0.5;
    position: absolute;
    top: -1.4vh;
    right: 10px;

    font-size: 3.1rem;
    color: #77D6B3;
  }
`;

export const Contans = styled.div`
  width: 105%;
  padding: 0 7.5%;
  height: 47vh;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;



//임시
export const Contant = styled.div`
  width: 100%;
  height: 100px;
  background: #FFFFFF;
  border: 2px solid #77D6B3;
  border-radius: 8px;
  padding: 10px 15px;
`;

export const ContantTop = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p{
    font-size: 1.3rem;
    font-weight: bold;
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
`;

export const Date = styled.div`
  font-size: 1.1rem;
`;