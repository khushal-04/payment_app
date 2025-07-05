import {BrowserRouter, Route, Routes, useNavigate} from 'react-router-dom'
import {Signup} from './pages/Signup'
import {Signin} from './pages/Signin'
import {Dashboard} from './pages/Dashboard'
import {SendMoney} from './pages/SendMoney'
import { useEffect } from 'react'
function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path= '/' element={<DefaultDirect/>}></Route>
          <Route path='/signup' element={<Signup/>} />
          <Route path='/signin' element={<Signin/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/send' element={<SendMoney/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

function DefaultDirect(){
  const navigate = useNavigate()
  useEffect(()=>{
    const token = localStorage.getItem('token')
    if(token){
      navigate('/dashboard')
    }
    else{
      navigate('/signup')
    }
  },[navigate])
}

export default App
