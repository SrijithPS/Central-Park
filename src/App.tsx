import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";


import { Header } from "./Header";
import Products from "./components/Products";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <Header />
    <Container  className="mb-4">
  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/products" element={<Products   />} />
        <Route path="/products/cart" element={<Cart  />} />
      </Routes>
    </Container>
    </>
  );
}
export default App;
