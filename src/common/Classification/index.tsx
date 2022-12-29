import React, { useState } from 'react';
import * as S from './styled';

interface ClassificationProps {
	onSubmit: () => void;
	stuGrade: string;
	stuClass: string;
	stuName: string
	setStuGrade: any;
	setStuClass: any;
	setStuName:any;
}

const Classification: React.FC<ClassificationProps> = ({
	onSubmit,
	stuGrade,
	stuClass,
	stuName,
	setStuGrade,
	setStuClass,
	setStuName,
}) => {
	const gradeSelect = (e:any) => {
		setStuGrade(e.target.value);
	};
	const classSelect = (e:any) => {
		setStuClass(e.target.value);
	};

	return (
		<>
			<S.SelectWrapper>
				<S.SelectBox onChange={gradeSelect} value={stuGrade}>
					<S.Option value="">전체</S.Option>
					<S.Option value="1">1</S.Option>
					<S.Option value="2">2</S.Option>
					<S.Option value="3">3</S.Option>
				</S.SelectBox>
				<S.Label>학년</S.Label>
				<S.SelectBox onChange={classSelect} value={stuClass}>
					<S.Option value="">전체</S.Option>
					<S.Option value="1">1</S.Option>
					<S.Option value="2">2</S.Option>
					<S.Option value="3">3</S.Option>
					<S.Option value="4">4</S.Option>
				</S.SelectBox>
				<S.Label>반</S.Label>
				<S.Search
					placeholder="이름"
					value={stuName}
					onChange={(e) => {
						setStuName(e.target.value);
					}}
					onKeyPress={(e) => {
						if (e.key === 'Enter') onSubmit;
					}}
				/>
				<S.Btn onClick={onSubmit}>검색</S.Btn>
			</S.SelectWrapper>
		</>
	);
};

export default Classification;