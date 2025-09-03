import React from 'react'
import Header from './Header';
import Hero from './Hero';
import Clients from './Clients';
import About from './About';
import Method from './Method';
import Growth from './Growth';
import Footer from './Footer';

function Main() {
  
  return (
    <main className='overflow-hidden w-full'>
    <Header />   
    <Hero />
    <Clients />
    <About />
    <Method />
    <Growth />
    <Footer />
    </main>
  )
}

export default Main
