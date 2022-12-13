import styled from "@emotion/styled";

export const LoginWapper = styled.div`
  padding-top: 7vh;

  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

export const LoginTitle = styled.span`
  width: max-content;
  font-size: 3rem;
`;

export const InputsWapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 40vh;

`;

export const InputStyle = styled.div`
position: relative;
width: 50%;
border-bottom: 1px solid black;

label{
  opacity: 0.5;
		position: absolute;
		top: -0.2vh;
		left: 250px;
		font-size: 22px;
}  
`;


export const LoginButton = styled.button`
  width: 15%;
  height: 5vh;
  border-radius: 10px;
  border: none;
  font-size: 1rem;
  background-color: grey;
  color: white                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   ;
  transition: all ease 0.2s 0s;
  font-weight: bold;

  &:hover {
    background-color: black;
  }
`;
