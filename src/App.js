import { Routes, Route } from "react-router-dom";
// import "./App.css";
import { ProductList } from "./pages/productList";
import { AddProduct } from "./pages/addProduct";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="addproduct" element={<AddProduct />} />
      </Routes>
    </div>
  );
}

export default App;
