import styled from "styled-components";

const SearchBlock = styled.div`
    background-color: #f2f2f2;
    padding: .5rem .75rem .5rem .5rem;
    border-radius: 5px;
    max-width: calc(100vw - 200px);
    input{
        border: none;
        outline: none;
        background-color: transparent;
        font-size: 1rem;
    }
`

const Search = ({onChange}: any) => {
    return (
        <SearchBlock>
            <input placeholder='검색' onChange={onChange}></input>
        </SearchBlock>
    );
}

export default Search;