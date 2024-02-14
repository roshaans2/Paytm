import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Dashboard from './components/Dashboard'
import Signup from './components/Signup'
import Signin from './components/Signin'
import SendMoney from './components/SendMoney'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/dashboard' element={<Dashboard/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/signin' element={<Signin/>}></Route>
          <Route path='/send' element={<SendMoney/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
