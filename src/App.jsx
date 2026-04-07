

import { Route, Routes } from 'react-router'
import './App.css'
import Register from './Pages/Register'
import Login from './Pages/Login'
import Root from './Route/Root'
import Home from './Pages/Home'

function App() {
 

  return (
    <>
     

  <Routes>
  <Route path='/' element={<Root />} >
  
  <Route path='/' element={<Home/>}></Route>
  <Route path='/register' element={<Register/>}></Route>
  <Route path='/login' element={<Login/>}></Route>

  </Route>

</Routes>


    </>
  )
}

export default App
