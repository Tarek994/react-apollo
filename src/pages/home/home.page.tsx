import PostGrid from "../../components/posts-grid/posts-grid.component"
import { useGetPosts } from "../../hooks/posts/useGetPosts"


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