import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import HomeContainer from './containers/HomeContainer'
import AboutContainer from './containers/AboutContainer'
import NewsContainer from './containers/NewsContainer'
import ContactContainer from './containers/ContactContainer'
import FindContainer from './containers/FindContainer'
import GalleryContainer from './containers/GalleryContainer'
import './App.css'


function App() {

  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
      <Route path ='/' element ={<HomeContainer/>}/>
      <Route path ='/about' element ={<AboutContainer/>}/>
      <Route path ='/news' element ={<NewsContainer/>}/>
      <Route path ='/contact' element ={<ContactContainer/>}/>
      <Route path ='/find' element ={<FindContainer/>}/>
      <Route path ='/gallery' element ={<GalleryContainer/>}/>


      </Routes>

    </BrowserRouter>
    </>
  )
}

export default App
