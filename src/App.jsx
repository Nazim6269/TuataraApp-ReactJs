import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import AllProducts from "./pages/AllProducts";
import Cart from "./pages/Cart";
import CategoryProducts from "./pages/CategoryProducts";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Product from "./pages/Product";

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/product/:id" exact element={<Product />} />
        <Route path="/allProducts" exact element={<AllProducts />} />
        <Route path="/category/:name" exact element={<CategoryProducts />} />
        <Route path="/cart" exact element={<Cart />} />
        <Route path="*" exact element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}
