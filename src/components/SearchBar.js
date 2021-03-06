import styled from 'styled-components';
import searchIcon from '../assets/searchIcon.png';

const SearchContainer = styled.div`
	background: lightskyblue;
	padding: 0.5rem;
`;
const SearchInput = styled.div`
	display: flex;
	padding: 0.5rem;
	justify-content: center;
`;
const Input = styled.input`
	padding: 0.2rem 0.4rem;
`;
const Search = styled.div`
	background: #ffa200;
	padding: 0.1rem 0.3rem;
	border-radius: 0 5px 5px 0;

	&:hover {
		background: #f1cc99;
		cursor: pointer;
	}
`;

const SearchIcon = styled.img`
	width: 1.5rem;
	height: 1.5rem;
`;

function SearchBar() {
	return (
		<SearchContainer>
			<SearchInput>
				<Input></Input>
				<Search>
					<SearchIcon src={searchIcon}></SearchIcon>
				</Search>
			</SearchInput>
		</SearchContainer>
	);
}

export default SearchBar;
