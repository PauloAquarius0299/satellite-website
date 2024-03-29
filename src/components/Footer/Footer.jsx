// eslint-disable-next-line no-unused-vars
import React from 'react';
import { HiLocationMarker } from 'react-icons/hi';
import { MdCall, MdMessage } from 'react-icons/md';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer  = () => {
  return (
    <div className='bg-gray-700 text-white px-5'>
        <section className='max-w-[1200px] mx-auto text-white'>
            <div className='grid md:grid-cols-3 py-5'>
                {/* first col */}
                <div >
                    <h1 className='text-xl sm:text-3xl font-bold sm:text-left text-justify mb-3'>Esteja Pronto para Crescer</h1>
                    <p>
                        Seja Exclusivo <span className='font-bold'>Conecte </span>
                        direto para sua conta pessoal.
                    </p>
                    <br />
                    <div className='flex items-center h-10'>
                        <input type="py-1 px-3 w-full h-[100%] inline-block focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500 bg-gray-800 border-gray-200 border-2"
                        placeholder='Email'
                        />
                        <button className='primary-button'>Se Escrever</button>
                    </div>
                </div>
                {/* second col */}
                <div data-aos='fade-up' data-aos-delay='400' className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10'>
                    <div>
                        <div className='py-8 px-4'>
                            <h1 className='text-xl font-bold mb-3'>Atalhos</h1>
                            <ul className='flex flex-col gap-3'>
                                <li>
                                    <a href="#">Home</a>
                                </li>
                                <li>
                                    <a href="#">Sobre</a>
                                </li>
                                <li>
                                    <a href="#">Serviços</a>
                                </li>
                                <li>
                                    <a href="#">Se Escreva</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div data-aos='fade-up' data-aos-delay='800' className='py-8 px-4'>
                            <h1 className='text-xl font-bold mb-3'>Atalhos</h1>
                            <ul className='flex flex-col gap-3'>
                                <li>
                                    <a href="#">Home</a>
                                </li>
                                <li>
                                    <a href="#">Sobre</a>
                                </li>
                                <li>
                                    <a href="#">Serviços</a>
                                </li>
                                <li>
                                    <a href="#">Se Escreva</a>
                                </li>
                            </ul>
                        </div>
                        <div data-aos='fade-up' data-aos-delay='800' className='py-8 px-4'>
                            <h1 className='text-xl font-bold mb-3'>Entre Contato</h1>
                            <div>
                            <div className='flex items-center gap-2'>
                                <HiLocationMarker />
                                <p>Belo Horizonte, Brasil</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <MdMessage />
                                <p>fulano123@gmail.com</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <MdCall />
                                <p>+55 31 123456789</p>
                            </div>
                        </div>
                        </div>
                        <div data-aos='fade-up' data-aos-delay='800' className="hidden sm:block">
                            <div>
                                <span className='text-sm text-gray-400 items-center flex justify-center '>
                                    copyright &copy; 2024 by PCG
                                </span>
                                <div className='flex items-center justify-center gap-10 mb-4 p-4'>
                                    <a href='#' >
                                        <FaInstagram className='text-4xl' />
                                    </a>
                                    <a href='#' >
                                        <FaFacebook className='text-4xl' />
                                    </a>
                                    <a href='#' >
                                        <FaLinkedin className='text-4xl' />
                                    </a>
                                </div>
                                <span className='text-sm text-gray-1000'>
                                    <ul className='flex gap-3'>
                                        <li>Politica de Privacidade</li>
                                        <li>Termos de Condição</li>
                                    </ul>
                                </span>
                            </div>
                        </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Footer 