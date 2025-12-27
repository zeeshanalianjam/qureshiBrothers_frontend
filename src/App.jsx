import React from 'react'
import Home from './pages/Home'
import { Route, Router, Routes } from 'react-router-dom'
import NotFound from './pages/NotFound'
import Navigation from './components/navigation'

const App = () => {
  return (
    <div>
      <>
      <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </>
    </div>
  )
}

export default App
