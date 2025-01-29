import React from 'react'
import Logo from '/best-audio-hub-logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <div>
      <header className="flex justify-between items-center h-16 py-9 px-9 bg-white">
      {/* Logo à esquerda */}
      <div className="flex-shrink-0">
        <a href="#"> 
            <img src={Logo} alt="Logo" className="h-10" /> 
        </a>
      </div>
      
      {/* Links centralizados */}
      
      <nav className="flex justify-center items-center flex-grow gap-4 space-x-6">
        <a href="#" className="text-gray-600 text-lg hover:underline">Home</a>
        <a href="#" className="text-gray-600 text-lg hover:underline">Blog</a>
        <a href="#" className="text-gray-600 text-lg hover:underline">About</a>
        <a href="#" className="text-gray-600 text-lg hover:underline">Contact</a>
      </nav>

      {/* Ícone de busca à direita */}
      <div className="flex-shrink-0">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="text-gray-600 text-lg" />
      </div>
    </header>
    </div>
  )
}

export default Header
