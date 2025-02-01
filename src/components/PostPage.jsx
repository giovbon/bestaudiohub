import React from 'react'
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import posts from "../postsData";

const PostPage = () => {
    const { id } = useParams();
    const post = posts.find((p) => p.id === Number(id));

    if (!post) {
        return <h1>Post não encontrado</h1>;
    }

    return (
        <div>
            <div className="p-5">
                <h1 className="text-3xl font-bold">{post.title}</h1>
                <div className="mt-4 prose">
                    <ReactMarkdown>{post.content}</ReactMarkdown>
                </div>
            </div>
        </div>
    )
}

export default PostPage
