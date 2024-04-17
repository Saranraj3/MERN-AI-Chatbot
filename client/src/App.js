import React from 'react'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import { Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </div>
  )
}

export default App