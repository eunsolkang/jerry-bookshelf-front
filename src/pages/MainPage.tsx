import Header from "../components/common/Header";
import Main from "../components/book/Main";
import Wrapper from "../components/common/Wrapper";
import useSearch from "../hooks/useSearch";
import useAuth from "../hooks/auth/useAuth";
import { Redirect } from "react-router-dom";

const MainPage = () => {
    const {checkUserAuth} = useAuth();

    
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