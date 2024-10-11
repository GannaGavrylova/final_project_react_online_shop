import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/home";
import Categories from "./pages/categories";
import Footer from "./components/footer";
import CategoryPage from "./pages/categoryPage";
import AllProducts from "./pages/products/allProducts";
import Discounts from "./pages/discounts";
import ProductPage from "./pages/products/productPage";

function App() {
  return (
    <div className="App_container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:id" element={<CategoryPage />} />
        <Route path="/products/all" element={<AllProducts />} />
        <Route path="/sale" element={<Discounts Limit={8} />} />
        <Route path="/products/:id" element={<ProductPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
