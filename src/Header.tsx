import { Button, Container, Nav, NavLink, Navbar } from "react-bootstrap";

export function Header() {
  return (
    <Navbar sticky="top"  bg="dark" data-bs-theme="dark" >
      <Container>
        <Navbar.Brand href="/">Welcome to Central Park</Navbar.Brand>
        <Nav  className="me-auto">
          <Nav.Link href="/" >
            Home
          </Nav.Link>
          <Nav.Link href="/" as={NavLink}>
            City tour
          </Nav.Link>
          <Nav.Link href="/" as={NavLink}>
            Landmarks
          </Nav.Link>
          <Nav.Link href="/products" >
            Products
          </Nav.Link>
          <Nav.Link href="/products/cart" >
            <Button variant="outline-secondary" style={{position:"relative"}} >
            🛒
            <div className="bg-danger rounded-circle d-flex justify-content-center align-items-center" style={{color:'white',width:'1.2rem',height:'1.2rem',position:'absolute',bottom:0,right:0,transform:'translate(10%,25%)'}}>3</div>
            </Button>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
