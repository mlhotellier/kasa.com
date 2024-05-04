import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import RentalDetails from './pages/RentalDetails'
import Error from './pages/Error'
import Footer from './components/Footer'
import data from './datas/logements.json'
import './utils/globals_styles.scss'
import ScrollToTop from './components/ScrollToTop'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/logement/:id" element={<RentalDetails data={data} />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
      <ScrollToTop />
    </Router>
  </React.StrictMode>
)
