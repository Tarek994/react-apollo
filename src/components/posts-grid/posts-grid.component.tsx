import { Post } from "../../common/interfaces/post.interfaces"

interface PostsGridProps {
    posts: Post[]
}

const PostGrid: React.FC<PostsGridProps> = ({ posts }: PostsGridProps) => {
    return (
        <div>Post Grid</div>
    )
}
export default PostGrid