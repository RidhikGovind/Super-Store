import React from 'react';
import styled from 'styled-components/macro';
import { mixins } from './../styles';

const Wrapper = styled.div`
	padding: 1rem;
`;

const Unlisted = styled.ul`
	${mixins.flexCenter};
`;

const Listed = styled.li`
	padding: 0.5rem 1rem;
	margin: 0 0.2rem;
	font-size: 1.5rem;
	border: 2px solid #09e4e4;
	border-radius: 5px;
	cursor: pointer;

	&:hover {
		background: #D9D9D9;
	}
`;

function Pagination({ productsPerPage, totalProducts, paginate }) {
	const pageNumber = [];

	for (let i = 1; i < Math.ceil(totalProducts / productsPerPage); i++) {
		pageNumber.push(i);
	}
	return (
		<Wrapper>
			<Unlisted>
				{pageNumber.map((number) => (
					<Listed key={number} onClick={() => paginate(number)}>
						{number}
					</Listed>
				))}
			</Unlisted>
		</Wrapper>
	);
}

export default Pagination;
