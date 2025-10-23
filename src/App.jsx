import { Routes, Route } from "react-router-dom";
import './App.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomePage from './components/homepage/homepage';
import ProductsPage from "./components/products/productsPage";
import Navbar from "./components/navbar";
import DetailsPage from "./components/product-details/details-page";

function App() {

  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductsPage />} />
        <Route path="/productdetails" element={<DetailsPage />} />
      </Routes>
    </>
  )
}

export default App
