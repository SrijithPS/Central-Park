import { Button, Card } from "react-bootstrap";
import { useCart } from "./context/CartContext";



const Cart = () => {
     const {cartItems}=useCart();
  return (
    <div className="cart">
      <div>
        <h2>Your Cart</h2>
      </div>
      <div className="cart-items">
      {cartItems.map((item)=>(
        <Card key={item.id} style={{ width: "250px", marginBottom: "10px" }}>
        <Card.Img src={item.image} style={{ objectFit: "cover" }} />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text className="text-muted">
            {" "}
            &#8377;{item.pricePaisa / 100} /-
          </Card.Text>
          <Button variant="outline-secondary">Remove</Button>
        </Card.Body>
      </Card>
      ))}
      </div>
    </div>
  );
};

export default Cart;
