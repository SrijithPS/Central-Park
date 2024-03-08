import { Button, Container, Nav ,Navbar} from "react-bootstrap";
import { Link } from "react-router-dom";
export function Header(){
  return(
    <Navbar  bg="dark" data-bs-theme="dark">
   
    <Navbar.Brand   href="/">Welcome to Central Park</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="#features">City tour</Nav.Link>
      <Nav.Link href="#features">Landmarks</Nav.Link>
      <Nav.Link href="/products">Products</Nav.Link>
      <Nav.Link href="/products/cart">🛒</Nav.Link>
    </Nav>
 
</Navbar>
  )
}