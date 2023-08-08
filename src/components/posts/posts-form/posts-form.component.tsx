import { useForm } from "react-hook-form"
import { useSearchParams } from 'react-router-dom';

interface FormData {
    title: string;
    body: string;
    search: string
}


const PostsForm: React.FC = () => {
    const { register, handleSubmit } = useForm<FormData>();


    return (
        <div className="posts-form">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" name="title" ref={register} />

            </form>

        </div>
    )
}

export default PostsForm