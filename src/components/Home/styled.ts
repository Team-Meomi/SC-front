import styled from "@emotion/styled";

export const HomeWapper = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:flex-start;
  height: 100vh;


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
  }
`;

export const IntroTitle = styled.div`
  font-size: 3rem;
  font-weight: bold;
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
border-radius: 10px;  border-radius: 10px;
  font-weight: bold;
  color: white;
  cursor: pointer;
`;

// export const InputBox = styled.div`
//   width: 85%;
//   height: 60px;
//   display: flex;
//   align-items: center;
//   justify-content: flex-start;
//   background: #FFFFFF;
//   border: 2px solid #77D6B3;
//   border-radius: 10px;
//   position: relative;

//   input{
//     height: 80%;
//     width: 85%;
//     margin-left: 10px;
//     outline: none;
//     font-size: 1.5rem;
//     border: none;
//     color: #77D6B3;
//   }

//   label{
//     opacity: 0.5;
//     position: absolute;
//     top: -1.4vh;
//     right: 10px;

//     font-size: 3.1rem;
//     color: #77D6B3;
//   }
// `;

export const ContansWapper = styled.div`
  width: 100%;
  padding: 3vh 7%;
  height: 50vh;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.5rem;
`;

export const ContansMainTitle = styled.div`
    font-size: 2rem;
    font-weight: bold;
`;

export const Contants = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  gap: 4.8%;
`;