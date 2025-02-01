import React from 'react'
import Logo from '/best-audio-hub-logo.png'

const Footer = () => {
    return (
        <>
            <hr className="border-t border-[#dee0e2]" />
            <footer className="w-full bg-cover bg-center flex flex-col md:flex-row items-center h-auto justify-center">
                <div className={`w-full max-w-5xl px-6 py-6 text-center`}>
                    <div className="flex flex-col md:flex-row justify-between items-center pb-6">
                        <div className="flex items-center mb-4 md:mb-0">
                            <img src={Logo} alt="Logo" className="h-10" />
                        </div>
                        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
                            <a href="#" className="text-gray-600 hover:text-gray-800">Terms and Conditions</a>
                            <a href="#" className="text-gray-600 hover:text-gray-800">Privacy Policy</a>
                            <a href="#" className="text-gray-600 hover:text-gray-800">Disclosure</a>
                            <a href="#" className="text-gray-600 hover:text-gray-800">Cookies Policy</a>
                            <a href="#" className="text-gray-600 hover:text-gray-800">Contact</a>
                        </div>
                    </div>
                    
                    <div className="mt-6 py-4">
                        <p className="text-gray-500 text-xs bg-[#f7f9fb]">
                            Copyright © 2025 Best Audio Hub | Powered by Best Audio Hub
                        </p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
