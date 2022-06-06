import Header from "../components/common/Header";
import Main from "../components/book/Main";
import Wrapper from "../components/common/Wrapper";
import useSearch from "../hooks/useSearch";

const MainPage = () => {
    return (
        <>
        <Header></Header>
        <Wrapper>
            <Main/>
        </Wrapper>
        </>
    )
}

export default MainPage;