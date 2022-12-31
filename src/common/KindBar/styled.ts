import styled from "@emotion/styled";

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