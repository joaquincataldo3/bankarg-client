import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import SharedLayout from './components/shared-layout/sharedLayout'
import Home from './pages/home/home'

function App() {

  return (
    <Routes>

      <Route path='/' element={<SharedLayout />}>

        <Route index element={<Home />} />

      </Route>

    </Routes>
  )


}

export default App
