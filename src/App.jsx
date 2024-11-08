import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import HomeContainer from './containers/HomeContainer'

import './App.css'

function App() {

  return (
    <>
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
