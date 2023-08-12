import React from 'react';
import { useForm } from 'react-hook-form';
import { useCreatePost } from '../../../hooks/posts/useCreatePost';

interface FormData {
    title: string;
    body: string;
}

const PostsForm: React.FC = () => {
    const { register, handleSubmit } = useForm<FormData>();
    const createPost = useCreatePost();
    
    const onSubmit = handleSubmit(({ title, body }) => {
        createPost({ variables: { input: { title, body } } });
        console.log(title,body)
    });

    return (
        <div className="posts-form">
            <form onSubmit={onSubmit}>
                <input type="text" {...register('title')} placeholder="Title" />
                <textarea {...register('body')} placeholder="Body"></textarea>
                <input type="submit" value="Create Post" />
            </form>
        </div>
    );
}

export default PostsForm;
