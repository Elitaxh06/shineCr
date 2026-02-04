import './App.css'
import Home from './view/Home/Home.tsx'
import GalleryPage from './view/Galery/Galery.tsx'
import { Routes, Route } from 'react-router'
import ScrollToTop from './components/ScrollToTop.tsx'
function App() {
  
  return (

    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element ={<Home /> } />
        <Route path="/galeria" element ={<GalleryPage /> } />
      </Routes>


    </>
  )
}

export default App
