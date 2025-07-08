import React from 'react'
import Main from './components/Main'
import SmoothScrollProvider from './components/SmoothScrollProvider.jsx';

const App = () => {
  return (
    <SmoothScrollProvider speed={1} smooth={true} effects={false}>
      <Main />
    </SmoothScrollProvider>
  )
}

export default App