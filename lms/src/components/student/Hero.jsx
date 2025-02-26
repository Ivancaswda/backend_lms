import React from 'react'
import {assets} from "../../assets/assets.js";
import SearchBar from "./SearchBar.jsx";

const Hero = () => {
    return (
        <div className='flex flex-col items-center justify-center w-full md:pt-36 pt-20 px-7 md:px-0 space-y-7 text-center bg-gradient-to-b from-cyan-100/70'>
            <h1 className='md:text-home-heading-large text-home-heading-small relative font-bold text-gray-800 max-w-3xl mx-auto'>Усильте
                ваше будущее с курсами сделаными что подходить <span className='text-blue-600'> к вашему выбору
            <img src={assets.sketch} alt="sketch" className='md:block hidden absolute -bottom-7 right-0'/></span></h1>

            <p className='md:block hidden text-gray-500 max-w-2xl mx-auto'>Мы вмести несём лучших-мировых инструкторов, позновательный контент и поддержаное
                коммюнити чтобы помочь воплотиться вашим личным и профессиональным целям</p>
            <p className=' md:hidden text-gray-500 max-w-sm mx-auto'>Мы вмести несём лучших-мировых инструкторов
                чтобы помочь воплотиться вашим личным и профессиональным целям</p>
            <SearchBar/>
        </div>
    )
}
export default Hero
