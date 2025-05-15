import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import Footer from '../components/Footer';
function Router() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route>
        <Route path="/" element={<Home/>} />

        </Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default Router