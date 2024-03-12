import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { ProductProps, Products } from "./components/Products";
import { Cart } from "./components/Cart";
import { Header } from "./Header";

function App() {
  return (
    <Container fluid>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/products" element={<Products addToCart={(Products)}  />} />
        <Route path="/products/cart" element={<Cart />} />
      </Routes>
    </Container>
  );
}
export default App;
