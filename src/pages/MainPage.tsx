import Header from "../components/common/Header";
import Main from "../components/book/Main";
import Wrapper from "../components/common/Wrapper";
import useSearch from "../hooks/useSearch";

const MainPage = () => {

    const {search, onChange} = useSearch();
    return (
        <>
        <Header onChange={onChange}></Header>
        <Wrapper>
            <Main search={search}></Main>
        </Wrapper>
        </>
    )
}

export default MainPage;