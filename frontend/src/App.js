import Footer from "./component/layout/Footer/Footer.js";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import './App.css';
import Header from "./component/layout/Header/Header.js";
import ProductDetails from "./component/Product/ProductDetails.js";
import Home from "./component/Home/Home.js";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Search from "./component/Product/search.js";
import Products from "./component/Product/Products.js";
import LoginSingnUp from "./component/User/LoginSinUP.js";
  
function App() {

  return (<>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/products" element={<Products/>}></Route>
        <Route path="/products/:keyword" element={<Products/>}></Route>

        <Route path="/search" element={<Search/>}></Route>
        <Route path="/login" element={<LoginSingnUp/>}></Route>

     

      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App;
 