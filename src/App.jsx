import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import Homepage from './Components/Homepage/Homepage'
import { BrowserRouter } from 'react-router-dom'

function App() {


  return (
    <>
      <BrowserRouter>
        <Homepage />
      </BrowserRouter>
    </>
  )
}

export default App
