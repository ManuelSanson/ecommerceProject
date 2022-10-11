// import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
// import { useParams } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import CartView from "./CartView";
import EmptyCartMessage from "./EmptyCartMessage";
// import { getProduct } from "../../utils/products";
import './Cart.css';

const Cart = () => {
    const { cartList, removeList } = useCartContext();

    return (
        <Container>
            {cartList.length ? 
                <div>
                    <h1>Shopping Cart</h1>
                    {cartList.map((product) => 
                    <CartView key={product.id} product={product}/>
                    )}
                    <div className='emptyCartButtonContainer'>
                        <Button variant='danger'  className='emptyCartButton' onClick={() => removeList()}> Empty Cart </Button>
                    </div>
                </div> 
            : <EmptyCartMessage/>}
        </Container>
    )
}

export default Cart;