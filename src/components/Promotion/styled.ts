import styled from "@emotion/styled";


export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 100px;
`;

export const TitleText = styled.div`
    width: 500px;
    text-align: center;

    p{
        font-size: 4rem;
        color: #77D6B3;
        margin:  10px 0;
    }
    span{
        color: #A3A3A3;
        font-size: 2rem;
    }
`;

export const BtnWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

`;

export const LoginBtn = styled.div`
    width: 450px;
    height: 70px;
    background: #FFFFFF;
    border: none;
    border-radius: 10px;
    color:rgba(119, 214, 179, 1);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.8rem;
    cursor: pointer;
`;

export const SignUpBtn = styled.div`
    width: 450px;
    height: 70px;
    background: #77D6B3;
    color:white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.8rem;
    cursor: pointer;
    border-radius: 5px;
    border: none;
`;