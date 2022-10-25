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
import StrongProducts from "../StrongProducts/StrongProducts";

const Cart = () => {
    const { cartList, clearList, itemsQuantity, totalPrice } = useCartContext();

    const [buyer, setBuyer] = useState({
        emailAddress: '',
        name: '',
        phone: '',
    });

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
            buyer: buyer,
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
                    <article className='text-center mt-5'>
                        <StrongProducts/>
                    </article>
                </section>

            : <EmptyCartMessage/>}
            <OrderModal 
                showModal={showModal} 
                onClose={handleClose} 
                onBuy={handleBuy}
                orderId={orderId}
                setBuyer={setBuyer}
            /> 
        </main>
    )
}

export default Cart;