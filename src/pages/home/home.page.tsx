import PostGrid from "../../components/posts/posts-grid/posts-grid.component"
import { useGetPosts } from "../../hooks/posts/useGetPosts"
import "./home.page.css"
import home from "./assets/home.svg"

const Home: React.FC = () => {
    const posts = useGetPosts();
    return (
        <div className="home">
            <div className="img-div">
                <img src={home} alt="" />
            </div>
            <PostGrid posts={posts || []} />
        </div>
    )
}

export default Home