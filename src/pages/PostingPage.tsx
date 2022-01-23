import Header from "../components/Header";
import MainComponent from "../components/MainComponent";
import PostEditor from "../components/PostEditor";
import Wrapper from "../components/Wrapper";
import useSearch from "../hooks/useSearch";

const PostingPage = () => {

    const {search, onChange} = useSearch();
    return (
        <>
        <Wrapper>
            <PostEditor></PostEditor>
        </Wrapper>
        </>
    )
}

export default PostingPage;