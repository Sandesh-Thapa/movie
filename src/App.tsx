import { Routes, Route } from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import Navbar from "./components/Navbar"
import "./App.css"
import Footer from "./components/Footer"
import HomePage from "./pages/HomePage"
import MovieDetail from "./pages/MovieDetail"

function App() {
  return (
    <>
    <ToastContainer />
    <div className="app d-flex flex-column justify-content-between">
      <div>
        <div className="position-absolute start-0 top-0">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
        </Routes>
      </div>
      <Footer />
    </div>
    </>
  )
}

export default App
