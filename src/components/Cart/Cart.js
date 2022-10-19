import { Button } from "react-bootstrap";
import { useCartContext } from "../../context/CartContext";
import CartView from "./CartView";
import EmptyCartMessage from "./EmptyCartMessage";
import './Cart.css';
import { Link } from "react-router-dom";
import OrderSummary from "./OrderSummary";
import OrderModal from "../OrderModal/OrderModal";
import { useState } from "react";
import { createOrder } from '../../utils/orders';


const buyerMock = {
    name: 'coderhouse',
    phone: '1122334455',
    email: 'coder@mail.com'
}


const Cart = () => {
    const { cartList, clearList, itemsQuantity, totalPrice } = useCartContext();

    const [user, setUser] = useState(buyerMock);
    const [showModal, setShowModal] = useState(false);
    const [orderId, setSorderId] = useState();
    
    const handleOpen = () => {
        setShowModal(true)
    }

    const handleClose = () => {
        setShowModal(false)
    }

    const handleBuy = async () => {
        const newOrder = {
            buyer: buyerMock,
            items: cartList,
            total: totalPrice + 200,
        }
        const newOrderId = await createOrder(newOrder);
        setSorderId(newOrderId);
        clearList();
    }

    return (
        <main>
            {cartList.length ?

                <section>
                    <div className="yourCartItems m-4">
                        <h2>Your Cart:</h2>
                        <h4> Items: {itemsQuantity} </h4>
                    </div>
                    <div className="orderContainer m-5">
                        <div>
                            {cartList.map((product) => 
                            <CartView key={product.id} product={product}/>
                            )}
                        </div>
                        <OrderSummary onOpen={handleOpen}/>
                    </div>
                    <div className='text-center'>
                        <Button variant='light'  className='border' as={Link} to='/'> Continue Shopping </Button>
                        <Button variant='danger'  className='emptyCartButton' onClick={() => clearList()}> Empty Cart </Button>
                    </div>
                </section>

            : <EmptyCartMessage/>}
            <OrderModal 
                showModal={showModal} 
                onClose={handleClose} 
                onBuy={handleBuy}
                orderId={orderId}
            /> 
        </main>
    )
}

export default Cart;