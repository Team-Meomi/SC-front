import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { AtomClassification } from '../../Atoms';
import * as S from './styled';

const Classification: React.FC<{onSubmit:() => void}> = ({
	onSubmit,
}) => {
	const [classificationValue, SetClassificationValue] = useRecoilState(AtomClassification);
	return (
		<>
			<S.SelectWrapper>
				<S.SelectBox onChange={(e) => SetClassificationValue({...classificationValue, stuGrade:e.target.value})} value={classificationValue.stuGrade}>
					<S.Option value="">전체</S.Option>
					<S.Option value="1">1</S.Option>
					<S.Option value="2">2</S.Option>
					<S.Option value="3">3</S.Option>
				</S.SelectBox>
				<S.Label>학년</S.Label>
				<S.SelectBox onChange={(e) => SetClassificationValue({...classificationValue, stuClass:e.target.value})} value={classificationValue.stuClass}>
					<S.Option value="">전체</S.Option>
					<S.Option value="1">1</S.Option>
					<S.Option value="2">2</S.Option>
					<S.Option value="3">3</S.Option>
					<S.Option value="4">4</S.Option>
				</S.SelectBox>
				<S.Label>반</S.Label>
				<S.Search
					placeholder="이름"
					value={classificationValue.stuName}
					onChange={(e) => {
						SetClassificationValue({...classificationValue, stuClass:e.target.value})
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