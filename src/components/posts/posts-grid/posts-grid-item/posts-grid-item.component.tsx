import { Post } from "../../../../common/interfaces/post.interfaces"
import "./posts-grid-item.css";


const PostGridItem: React.FC<{ post: Post }> = ({ post: Post }) => {
    return (
        <div className="posts-grid">
            <p>{Post.id}</p>
            <p>{Post.title}</p>
            <p>{Post.body}</p>
        </div>
    )
}
export default PostGridItem