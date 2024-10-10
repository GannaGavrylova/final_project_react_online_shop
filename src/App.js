import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/home";
import Categories from "./pages/categories";
import Footer from "./components/footer";
import CategoryPage from "./pages/categoryPage";
import ProductsCategory from "./pages/productsCategory";

function App() {
  return (
    <div className="App_container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:id" element={<CategoryPage />} />
        <Route
          path="/categories/:categoryId/products"
          element={<ProductsCategory />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
