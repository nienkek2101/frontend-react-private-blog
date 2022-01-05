import React from 'react';
import posts from '../data/posts.json';
import { useParams } from 'react-router-dom';

function BlogPostPage() {
    const { blogId } = useParams();
    const currentPost = posts.find((postId) => {
        return postId.id === blogId;
    })
    console.log(blogId);

    console.log(currentPost);
    return (
        <article>
            <h1>{currentPost.title}</h1>
            <h3>{currentPost.date}</h3>
            <p>{currentPost.content}</p>
        </article>
    );
};

export default BlogPostPage;
