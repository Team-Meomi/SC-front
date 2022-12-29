import styled from "@emotion/styled";

export const SelectWrapper = styled.div`
	display: flex;
	flex-direction: row;
	background-color: #fff;
	box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
	width: 80%;
	height: 60px;
	border-radius: 10px;
	justify-content: center;
	align-items: center;
	padding: 0 10px;
	margin: 20px 0;
`;

export const SelectBox = styled.select`
	font-size: 18px;
	font-weight: bold;
	border-radius: 5px;
	border: 2px solid #77D6B3;
	width: 70px;
	height: 30px;
	text-align: center;
	color: #898989;
	outline: #77D6B3;
	cursor: pointer;
`;

export const Option = styled.option`
`;

export const Label = styled.div`
	margin: 0 10px 0 10px;
	font-size: 20px;
	font-weight: bold;
	width: 40px;
`;

export const Search = styled.input`
	display: flex;
	width: 23%;
	height: 60%;
	border-radius: 5px;
	font-size: 18px;
	justify-content: center;
	outline: #77D6B3;
	border: none;
`;

export const Btn = styled.button`
	width: 90px;
	height: 40px;
	border-radius: 5px;
	border: none;
	color: #fff;
	font-size: 18px;
	font-weight: bold;
	outline: none;
	background-color: #77D6B3;
    transition: all 0.3s ease-in-out;
	cursor: pointer;
	&:hover {
		background-color: #fff;
		color: #77D6B3;
		border: 2px solid #77D6B3;
	}
`;
