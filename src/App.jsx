import React from 'react'
import Card from './Pages/Card/Card'
import {Route, Routes} from 'react-router'
import UserDetil from './Pages/UserDetail/UserDetil'

const App = () => {
  return (
    <Routes>
      <Route path='/user/:id' element={<UserDetil />} / >
      <Route path='/' element={<Card />} / >
    </Routes>
  )
}

export default App
