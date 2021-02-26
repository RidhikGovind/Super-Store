import styled from "styled-components";
import searchIcon from "../Assets/searchIcon.png";

const SearchContainer = styled.div`
  background: lightskyblue;
`;
const SearchInput = styled.div`
  display: flex;
  padding: 0.5rem;
  justify-content: center;
`;
const Input = styled.input`
  padding: 0.1rem 0.3rem;
`;
const Search = styled.div`
  background: #F1BC49;
  padding: 0.1rem 0.3rem;

  &:hover{
    background:#F1CC99;
    cursor: pointer;
  }
`;

const SearchIcon = styled.img`
width: 15px;
height: 15px;
`;



function SearchBar() {
  return (
    <SearchContainer>
      <SearchInput>
        <Input></Input>
        <Search>
          <SearchIcon src={searchIcon} ></SearchIcon>
        </Search>
      </SearchInput>
    </SearchContainer>
  );
}

export default SearchBar;
