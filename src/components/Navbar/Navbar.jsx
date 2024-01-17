// eslint-disable-next-line no-unused-vars
import React from 'react';
import logo from '../../assets/logo.jpg';

const Navbar = () => {
  return (
    <div data-aos='fade-down' className='fixed top-0 right-0 w-full z-50 bg-black/10 backdrop-blur-sm py-4 sm:py-4'>
      <div className='container'>
        <div className="flex justify-between items-center">
            <div className="flex items-center gap-4 text-white font-bold text-2xl">
                <img className='h-12 w-12' src={logo} alt="logo" />
                <span>PCD-SPACE</span>
            </div>
            <div className='text-white hidden md:block'>
                <ul className='flex items-center gap-6 text-xl py-4 sm:py-0 '>
                    <li className='hover:text-blue-950'>
                        <a  href="#">Sobre</a>
                    </li>
                    <li className='hover:text-blue-950'>
                        <a href="#">Tecnologia</a>
                    </li>
                    <li className='hover:text-blue-950'>
                        <a href="#">Galaxia</a>
                    </li>
                    <li className='hover:text-blue-950'>
                        <a href="#">Satellite</a>
                    </li>
                </ul>
            </div>
            <div>
                <button className='text-white hover:bg-blue-950 border-2 border-white px-3 py-1 rounded-md'>
                    Cadastrar
                </button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
