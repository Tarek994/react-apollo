import { useForm } from "react-hook-form"
import { useSearchParams } from 'react-router-dom';

interface FormData {
    title: string;
    body: string;
    search: string
}


const PostsForm: React.FC = () => {
    const { register, handleSubmit } = useForm<FormData>();
    const [searchParams] = useSearchParams();
    const criteria = searchParams.get('criteria') || '';
    const onSubmit = handleSubmit(({ title, body }) => {
        console.log(title, body);
    });


    return (
        <div className="posts-form">
            <form onSubmit={onSubmit}>
                <input type="text"  {...register('search')} defaultValue={criteria} />
                <textarea {...register('search')} defaultValue={criteria} />
                <input type="submit" />
            </form>

        </div>
    )
}

export default PostsForm