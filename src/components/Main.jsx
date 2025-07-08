import React from 'react'
import Header from './Header';
import Hero from './Hero';
import Clients from './Clients';
import About from './About';
import Method from './Method';
import Growth from './Growth';

function Main() {
  
  return (
    <main className='container overflow-hidden'>
    <Header />   
    <Hero />
    <Clients />
    <About />
    <Method />
    <Growth />
    </main>
  )
}

export default Main
