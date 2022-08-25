import { Routes, Route } from "react-router-dom";
// import "./App.css";
import { Home } from "./pages/home";
import { AddProduct } from "./pages/addProduct";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="addproduct" element={<AddProduct />} />
      </Routes>
    </div>
  );
}

export default App;
