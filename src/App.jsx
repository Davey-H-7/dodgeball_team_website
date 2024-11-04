import { Router, Routes } from 'react-router-dom'
import RapidsLogo from './assets/RapidsLogo.jpg'

import './App.css'

function App() {

  return (
    <>
    <h1>Kelvin Rapids</h1>
    <Router>
      <Header/>
      <Routes>
      <Route path ='/' element ={<Home/>}/>
      </Routes>

    </Router>
    </>
  )
}

export default App
