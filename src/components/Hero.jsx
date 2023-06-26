import React from 'react';
import {logo} from "../assets";

function Hero() {
  return (
   <header className='w-full flex items-center justify-center flex-col '>
   <nav className='flex justify-between items-center w-full mb-10 pt-3'>
   
   <img src={logo} className='w-28 object-contain' alt="" />

   <button className='black_btn'>  
   Github
   </button>
   </nav>
   <h1 className='head_text'>
   Summarize Articles with <br className='max-md:hidden' />

   <span className='orange_gradient '>OpenAI GPT-4</span>
   
   </h1>
   
   
   </header>
  )
}

export default Hero