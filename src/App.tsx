import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Products } from "./Products";
import { Cart } from "./Cart";
import { Header } from "./Header";

function App() {
  return (
    <Container fluid>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/cart" element={<Cart />} />
      </Routes>
    </Container>
  );
}
export default App;
