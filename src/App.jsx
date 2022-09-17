import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import ProtectedRoutes from './ProtectedRoutes'
import Login from './components/Login'
import './components/styles/Login.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      <header className='header'>

        <nav className='header_nav'>
          <ul className='header_list'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/login'> login </Link></li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />

        <Route element={<ProtectedRoutes />} >
          {/* <Route path='/pokedex' element={} /> */}
          {/* <Route path='/pokedex/:name' element={} /> */}
        </Route>
      </Routes>
    </div>
  )
}

export default App