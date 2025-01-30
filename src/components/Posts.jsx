import React from 'react'
import CardPost from './CardPost';

const posts = [
    { id: 1, title: 'MOTU M2 Review: Top Pro-Grade USB Audio Interface Under 200', image: 'https://bestaudiohub.com/wp-content/uploads/2024/12/MOTU-M2-2x2-USB-C-Audio-Interface_-Professional-Sound-Under-200-featured-300x169.webp' },
    { id: 2, title: 'Apollo Solo: Pro Sound, Top Features, and Beautiful – Final Review', image: 'https://bestaudiohub.com/wp-content/uploads/2024/11/Best-Apollo-Interface-How-to-choose-the-right-model-for-you_Apollo-x8p-audio-interface_-Apolo-Solo-audio-interface-featured-1-300x169.webp' },
    { id: 3, title: 'Focusrite Scarlett 2i2 3rd Gen: Everything You Need to Know', image: 'https://bestaudiohub.com/wp-content/uploads/2024/11/Focusrite-Scarlett-2i2-3rd-Gen_-Everything-You-Need-to-Know-featured-1-300x169.webp' },
    { id: 4, title: 'M-Audio AIR 192 6 Review: The Best Value Audio Interface', image: 'https://placehold.co/150' },
    { id: 5, title: 'Focusrite Clarett+ 4Pre Review: The Best Pro-Grade Audio Interface', image: 'https://placehold.co/150' },
    { id: 6, title: 'Apogee Duet 3 Review: Best Value Audio Interface for Mac', image: 'https://placehold.co/150' },
  ];

const Posts = ({ title }) => {
return (
    <div className="flex justify-center p-5 pt-22">
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
