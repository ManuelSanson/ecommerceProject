import { Button, Container } from "react-bootstrap";
import { useCartContext } from "../../context/CartContext";
import CartView from "./CartView";
import EmptyCartMessage from "./EmptyCartMessage";
import './Cart.css';
import { Link } from "react-router-dom";

const Cart = () => {
    const { cartList, removeList, calculateTotal } = useCartContext();

    return (
        <Container>
            {cartList.length ?
                <div>
                    <h1>Shopping Cart</h1>
                    {cartList.map((product) => 
                    <CartView key={product.id} product={product}/>
                    )}
                    <div className="totalContainer m-4">
                        <h2> Total: $ {calculateTotal()} </h2>
                    </div>
                    <div className='cartButtonsContainer'>
                        <Button variant='light'  className='border' as={Link} to='/'> Continue Shopping </Button>
                        <Button variant='danger'  className='emptyCartButton' onClick={() => removeList()}> Empty Cart </Button>
                    </div>
                </div> 
            : <EmptyCartMessage/>}
        </Container>
    )
}

export default Cart;