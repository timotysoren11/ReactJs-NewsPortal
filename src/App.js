import React from 'react'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FetchData from './components/FetchData'; 
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
           <Route exact path="/" element={<Home />} />
           <Route path="/general" element={<FetchData cat="general" />} />
           <Route path="/buisness" element={<FetchData cat="buisness" />} />
           <Route path="/entertainment" element={<FetchData cat="entertainment" />} />
           <Route path="/health" element={<FetchData cat="health" />} />
           <Route path="/science" element={<FetchData cat="science" />} />
           <Route path="/sports" element={<FetchData cat="sports" />} />
           <Route path="/technologies" element={<FetchData cat="technologies" />} />


        </Routes>
        <Footer />
      </Router>
 
    </>
  )
}

export default App
