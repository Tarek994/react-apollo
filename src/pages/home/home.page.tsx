import { Post } from "../../common/interfaces/post.interfaces"
import PostGrid from "../../components/posts-grid/posts-grid.component"


const Home: React.FC = () => {
    const posts: Post[] = [
        {
            id: '1',
            title: "Post one",
            body: "Body of my post"
        }
    ]

    return (
        <div className="home">
            <PostGrid posts={posts} />
        </div>
    )
}

export default Home