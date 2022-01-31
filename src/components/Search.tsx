import styled from "styled-components";

const SearchBlock = styled.div`
    background-color: #f2f2f2;
    padding-top: .5rem;
    padding-bottom: .5rem;
    padding-right: .75rem;
    padding-left: .5rem;
    border-radius: 5px;
    //flex: 1;
    min-width: calc(100vw - 150px);
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