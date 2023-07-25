import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './component/Homepage'
import Users from './component/Users'
import Createusers from './component/Createusers'
import Editusers from './component/Editusers'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Homepage/>
        <Routes>
          <Route path='/users' element={<Createusers/>}></Route>
          <Route path='/' element={<Users/>}></Route>
          <Route path='/edit/:index' element={<Editusers/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}
export default App