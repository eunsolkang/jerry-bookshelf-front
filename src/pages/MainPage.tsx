import Header from "../components/common/Header";
import MainComponent from "../components/book/MainComponent";
import Wrapper from "../components/common/Wrapper";
import useSearch from "../hooks/useSearch";

const MainPage = () => {

    const {search, onChange} = useSearch();
    return (
        <>
        <Header onChange={onChange}></Header>
        <Wrapper>
            <MainComponent search={search}></MainComponent>
        </Wrapper>
        </>
    )
}

export default MainPage;