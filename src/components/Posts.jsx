import React from 'react'
import CardPost from './CardPost';
import posts from '../postsData';

const Posts = ({ title }) => {
return (
    <div className="flex justify-center p-5 pb-12 mt-10 md:mt-16 lg:mt-22">
    <div className="w-full max-w-[976px]">
        <h1 className="text-3xl font-bold text-left mb-4 uppercase">{title}</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {posts.map(post => (
            
            <CardPost title={post.title} image={post.image} id={post.id} />

        ))}
        </div>
    </div>
    </div>
);
};

export default Posts
