import { useForm } from "react-hook-form"


const PostsForm: React.FC = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {

    }


    return (
        <div className="posts-form">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" name="title" ref={register} />

            </form>

        </div>
    )
}

export default PostsForm