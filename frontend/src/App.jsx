import React from 'react'
import Home from './pages/Home';
import Result from './pages/Result';
import Buy from './pages/Buy';
import {Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar';


export const App = () => {
  return (
    <div className='px-4 sm:px-10 md:px-14 lg:px-28 
    min-h-screen bg-gradient-to-b frm-teal-50 to-orange-50'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/result' element={<Result/>}/>
        <Route path='/buy' element={<Buy/>}/>
      </Routes>
    </div>
  )
}
export default App
