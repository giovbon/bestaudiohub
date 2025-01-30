import React from 'react'

const Hero = ({textAlign, title, text}) => {
  return (
    <section className="w-full bg-cover bg-center flex items-center h-[300px] justify-center " style={{ backgroundImage: 'url(/audio-interface-back.jpg)'}}>
        
      <div className={`w-full max-w-5xl px-6 py-12 text-white text-${textAlign}`}>

        <h1 className="text-5xl font-bold my-12">{title}</h1>
        <p className="text-2xl mb-12">{text}</p>
      </div>
    </section>
  )
}

export default Hero
