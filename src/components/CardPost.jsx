import React from 'react'
import { Link } from 'react-router-dom';

const CardPost = ({title, image, id}) => {
  return (
    <div className="bg-white overflow-hidden" key={id}>
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-sm" />
      <Link to={`/post/${id}`}>
        <h5 className="p-2 text-left text-lg font-semibold">{title}</h5>
      </Link>
    </div>
  )
}

export default CardPost
