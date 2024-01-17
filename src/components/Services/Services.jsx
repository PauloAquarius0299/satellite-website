// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FaReact } from 'react-icons/fa';
import { FaShuttleSpace, FaSpaceAwesome } from 'react-icons/fa6';
import wave from '../../assets/wave.gif';

const ServiceData = [
    {
        title: 'HST',
        content: '300-1500km',
        description: 'Usado para observações astronômicas, capturando imagens impressionantes do universo ',
        icon: <FaReact className='text-7xl' />,
        aosDelay: '300',
    },
    {
        title: 'ISS',
        content: '500-1500km',
        description: 'É um satélite artificial habitável que orbita a Terra e serve como laboratório de pesquisa de evolução espacial',
        icon: <FaShuttleSpace className='text-7xl' />,
        aosDelay: '500',
    },
    {
        title: 'GPS',
        content: '300-1500km',
        description:
         'Parte do Sistema de Posição Global (GPS) usado para navegação',
        icon: <FaSpaceAwesome className='text-7xl' />,
        aosDelay: '800',
    },
]

const Services = () => {
  return (
    <div className='bg-black text-white relative z-50'>
        <div className='container'>
            <div className='min-h-[400px] '>
                <div data-aos='fade-up' data-aos-delay='500' className='grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10'>
                    {ServiceData.map((data) =>
                    (
                        // eslint-disable-next-line react/jsx-key
                        <div
                        className='min-h-[180px] flex flex-col gap-2 justify-center items-center bg-sky-900/60 rounded-xl backdrop-blur-sm text-center text-2xl py-8 px-3 w-full lg:w-[300px] mx-auto'
                        >
                            {data.icon}
                            <h1>{data.title}</h1>
                            <p>{data.content}</p>
                            <p className='text-sm'>{data.description}</p>
                        </div>
                    ))}
                </div>
                <img src={wave} alt=""
                className='h-[200px] w-full object-cover min-blend-screen -translate-y-20 relative z-[0]'
                />
            </div>
        </div>
    </div>
  )
}

export default Services