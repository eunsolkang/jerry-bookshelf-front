import PostEditor from "../components/post/PostEditor";
import Wrapper from "../components/common/Wrapper";
import PostHeader from "../components/common/PostHeader";

const PostingPage = () => {
   
    return (
        <>
        <PostHeader></PostHeader>
        <Wrapper>
            <PostEditor></PostEditor>
        </Wrapper>
        </>
    )
}

export default PostingPage;