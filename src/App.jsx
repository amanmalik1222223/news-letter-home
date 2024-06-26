import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import ListLast from './components/ListLast';



function App() {

  
  return (
    <div className='relative bg-offWhite w-full h-[1000px] font-inter  '>
      <Header />
      <Hero />
      <ListLast/>

      
    </div>
  );
}


export default App
