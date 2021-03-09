import React, { useState } from 'react';
import styled from 'styled-components';
import searchIcon from '../assets/searchIcon.png';

const SearchContainer = styled.div`
	background: lightskyblue;
	padding: 0.5rem;
`;
const SearchInputForm = styled.form`
	display: flex;
	padding: 0.5rem;
	justify-content: center;
`;
const Input = styled.input.attrs((props) => ({
	type: 'text',
	placeholder: 'Search',
}))`
	border: 1px solid rgba(0, 0, 0, 0.5);
	border-right: none;
	padding: 0.2rem 0.4rem;
`;

const ResetBtn = styled.button`
	background: white;
	border: 1px solid rgba(0, 0, 0, 0.5);
	cursor: pointer;
	border-left: none;
`;

const SearchBtn = styled.button`
	background: #ffa200;
	padding: 0.1rem 0.3rem;
	border-radius: 0 5px 5px 0;
	outline: none;
	border: none;

	&:hover {
		background: #f1cc99;
		cursor: pointer;
	}
`;

const SearchIcon = styled.img`
	width: 1.5rem;
	height: 1.5rem;
`;

function SearchBar({ onSearch }) {
	const [searchTerm, setSearchTerm] = useState('');

	const handleOnChange = ({ target }) => {
		setSearchTerm(target.value);
		onSearch(searchTerm);
	};

	const handleOnSubmit = (e) => {
		e.preventDefault();
		onSearch(searchTerm);
	};

	const reset = () => {
		setSearchTerm('');
	};
	return (
		<SearchContainer>
			<SearchInputForm onSubmit={handleOnSubmit}>
				<Input value={searchTerm} onChange={handleOnChange}></Input>
				<ResetBtn onClick={reset}>X</ResetBtn>
				<SearchBtn type='submit' >
					<SearchIcon src={searchIcon}></SearchIcon>
				</SearchBtn>
			</SearchInputForm>
		</SearchContainer>
	);
}

export default SearchBar;
