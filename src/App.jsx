import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RapidsLogo from './assets/RapidsLogo.jpg'
import Header from './components/Header'
import HomeContainer from './containers/HomeContainer'

import './App.css'

function App() {

  return (
    <>
    <h1>Kelvin Rapids</h1>
    <BrowserRouter>
      <Header/>
      <Routes>
      <Route path ='/' element ={<HomeContainer/>}/>
      </Routes>

    </BrowserRouter>
    </>
  )
}

export default App
