import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import Login from './components/auth/Login'
import Register from './components/auth/Register'
import './App.css'
import React from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Login></Login>
       */}
      <Register></Register>
    </>
  )
}

export default App
