import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

// __ Components __
import Header from './Components/Header'
import './App.scss'
import Body from './Components/Body/Body'

function App() {

  return (
    <>
      <main className='app'>
        <Header/>
        <Body/>
      </main>
    </>
  )
}

export default App
