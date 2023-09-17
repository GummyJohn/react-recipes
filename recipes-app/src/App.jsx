import {BrowserRouter , Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import CategorySelect from './components/CategorySelect'
import Categories from './components/Categories'
import AboutMeal from './components/AboutMeal'


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path ='/' element={ <Categories/> }/>
        <Route path = '/category/:id' element={<CategorySelect/>}/>
        <Route path ='/meal/:id' element={<AboutMeal />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
