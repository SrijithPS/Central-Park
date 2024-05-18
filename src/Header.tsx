import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <Navbar sticky="top" bg="dark" data-bs-theme="dark">
      <Container>
        <Link to="/">Home</Link>
        <Link to="/">City tour</Link>
        <Link to="/">Landmarks</Link>
        <Link to="/products">Products</Link>
        <Link to="/products/cart">Cart</Link>
      </Container>
    </Navbar>
  );
}
