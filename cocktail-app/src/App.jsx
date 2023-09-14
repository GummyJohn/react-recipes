import { useState } from 'react'
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import CategorySelect from './components/CategorySelect'
import Home from './components/Home'
import Navbar from './components/Navbar'
import AboutMeal from './components/AboutMeal'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path ='/' element={ <Home/> }/>
        <Route path = '/category/:id' element={<CategorySelect/>}/>
        <Route path ='/meal/:id' element={<AboutMeal />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
