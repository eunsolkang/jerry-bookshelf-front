import Header from "../components/Header";
import MainComponent from "../components/MainComponent";
import Wrapper from "../components/Wrapper";
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