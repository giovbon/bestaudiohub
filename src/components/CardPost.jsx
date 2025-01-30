import React from 'react'

const CardPost = ({title, image, id}) => {
  return (
    <div className="bg-white overflow-hidden" key={id}>
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-sm" />
      <h3 className="p-2 text-left text-lg font-semibold">{title}</h3>
    </div>
  )
}

export default CardPost
