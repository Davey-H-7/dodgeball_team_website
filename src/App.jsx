import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import HomeContainer from './containers/HomeContainer'
import AboutContainer from './containers/AboutContainer'
import TeamContainer from './containers/TeamContainer'
import './App.css'


function App() {

  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
      <Route path ='/' element ={<HomeContainer/>}/>
      <Route path ='/about' element ={<AboutContainer/>}/>
      <Route path ='/team' element ={<TeamContainer/>}/>

      </Routes>

    </BrowserRouter>
    </>
  )
}

export default App
