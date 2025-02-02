import React from 'react'
import Hero from "../components/Hero";
import Posts from "../components/Posts";
import Footer from "../components/Footer";

const Index = () => {
    return (
        <>
            <Hero
                textAlign="center"
                title="AUDIO MADE EASY"
                text="Making sense of audio gear, so you can focus on creating. Discover easy-to-follow reviews, guides, and tips for making the right choice."
            />

            <Posts title="Reviews" />

            <div className="w-full bg-cover bg-center flex items-center h-auto justify-center ">
                <div className="w-full max-w-5xl px-6 py-12 text-center">
                    <p className="text-lg">
                        Best Audio Hub simplifies audio gear for everyone. From in-depth audio interface reviews to beginner-friendly guides and tutorials, we help you understand and choose the best audio interfaces to achieve professional sound quality—without the confusion.
                    </p>
                    <h1 className="text-2xl font-bold my-8">READ ABOUT US</h1>
                </div>
            </div>
        </>
    )
}

export default Index
