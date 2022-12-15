import styled from "@emotion/styled";

export const LoginWapper = styled.div`
  margin-top:  10vh;
  width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  height: 100vh;
  gap: 4rem;
`;

export const DecsTitle = styled.div`
  width: 250px;
  text-align: center;
  font-size: 1.1rem;
`;

export const LoginTitle = styled.span`
  width: max-content;
  font-size: 3.1rem;
`;

export const InputsWapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 20vh;
  width: 100%;
  margin: 5vh 0;
`;

export const InputStyle = styled.div`
position: relative;
width: 70%;
height: 70px;
border: 1px solid black;
display: flex;
align-items: center;
padding-left: 20px;
border-radius: 14px;
border: none;
box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);

label{
  opacity: 0.5;
		position: absolute;
		top: 2.2vh;
		left: 285px;
    font-size: 1.3rem;
}

span{
  opacity: 0.5;
		position: absolute;
		top: 8.2vh;
		left: 250px;
    font-size: 0.8rem;
    color: red;
}  
`;


export const LoginButton = styled.button`
  width: 70%;
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

  &:hover {
    background-color: black;
  }
`;

export const RedirectSignUp = styled.div`
  width: 230px;
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