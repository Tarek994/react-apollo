import { Post } from "../../../common/interfaces/post.interfaces"

const PostGridItem: React.FC<{ post: Post }> = ({ post: Post }) => {
    return (
        <div>
            <p>{Post.id}</p>
            <p>{Post.title}</p>
            <p>{Post.body}</p>
        </div>
    )
}
export default PostGridItem