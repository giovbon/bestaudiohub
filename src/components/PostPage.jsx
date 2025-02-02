import React from 'react'
import { useParams } from "react-router-dom";
import Markdown from 'markdown-to-jsx';
import posts from "../postsData";
import Posts from './Posts';

const PostPage = () => {
    const { id } = useParams();
    const post = posts.find((p) => p.id === Number(id));

    if (!post) {
        return <h1>Post não encontrado</h1>;
    }

    return (
        <>
            <div className="w-full bg-cover bg-center flex items-center h-auto justify-center ">
            <div className="w-full max-w-5xl px-6 py-8">
                <h1 className="mb-12">{post.title}</h1>
                <p className="text-2xl">{post.subtitle}</p>
                <img className="my-8 rounded" src="https://placehold.co/1000x400" alt="imagem" />
                <div className="mt-4 prose">
                <Markdown
            options={{
                overrides: {
                    div: {
                      component: (props) => (
                        <Posts title="Título Personalizado" {...props} />
                      ),
                    },
                  },
                }}
              >
            {post.content}
          </Markdown>
                </div>
            </div>
            </div>

        </>
    )
}

export default PostPage
