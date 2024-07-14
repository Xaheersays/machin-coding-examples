import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Timer from './Components/Timer'
import TimeContextProvider from './Context/TimeContextProvider'
function App() {

  return (
    <>
      <TimeContextProvider>
        
        <Timer></Timer>
      </TimeContextProvider>
    </>
  )
}

export default App
