import React from 'react';
import { Link } from 'react-router-dom';
import posts from '../data/posts.json';

function BlogPostsOverviewPage() {
    // console.log(posts.length);
    // console.log(posts[1]);
    // console.log(posts[1].title);
    const numberOfBlogposts = posts.length;
    // const blogpostId = post.id;
    // const blogpostTitle = post.title;

    // const createListOfBlogposts = posts.map((post) => {
    //     const blogpostId = post.id;
    //     const blogpostTitle = post.title;
    //
    //     return `<li><Link to="/blogpost/${blogpostId}">${blogpostTitle}</Link></li>`;
    //
    // })
    return (
        <>
            <h1>Blogpost overview pagina</h1>
            <h3>Aantal blogposts: {numberOfBlogposts}</h3>
            <ul>
                {posts.map((post) => {
                    return <li key={post.id}>
                        <Link to={`/blogpost/${post.id}`}>
                            {post.title}
                        </Link>
                    </li>
                })}
                {/*{createListOfBlogposts}*/}
                {/*<li>1</li>*/}
                {/*<li>2</li>*/}
                {/*<li>3</li>*/}
                {/*<li>4</li>*/}
                {/*<li>5</li>*/}
                {/*<li>6</li>*/}
                {/*<li>7</li>*/}
                {/*<li>8</li>*/}

            </ul>
        </>
    );
};

export default BlogPostsOverviewPage;