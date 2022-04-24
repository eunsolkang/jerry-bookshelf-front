import AddBook from "../components/post/AddBook";
import Wrapper from "../components/common/Wrapper";
import PostHeader from "../components/common/PostHeader";

const AddBookPage = () => {
   
    return (
        <>
        <PostHeader></PostHeader>
        <Wrapper>
            <AddBook></AddBook>
        </Wrapper>
        </>
    )
}

export default AddBookPage;