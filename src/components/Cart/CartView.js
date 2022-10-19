import { Card } from "react-bootstrap";
import ItemCount from "../Items/ItemCount";
import { BsTrash } from 'react-icons/bs'
import './CartView.css';
import { useCartContext } from "../../context/CartContext";
import { useState } from "react";
import OrderSummary from "./OrderSummary";

const CartView = ({product}) => {
    const { deleteItem } = useCartContext();

    const [count, setCount] = useState(product.quantity);
    
    return (
        <section className="m-5">
            <div className="yourCartItems">
                <h2>Your Cart:</h2>
                <h4> Items: {product.quantity} </h4>
            </div>
            <div className="cartItemsContainer">
                <div>
                    <Card className='cartItemCard' style={{width: "50rem",}}>
                        <Card.Img variant="top" src={product.pictureURL} className='p-2 cartItemCardPicture'/>
                        <Card.Body className='cartItemBody fw-bold'>
                            <Card.Title> {product.title} </Card.Title>
                            <Card.Text className='mb-0 cartItemPrice'>
                                $ {product.price}
                            </Card.Text>
                            <ItemCount product={product} count={count} setCount={setCount}/>
                            <button className='deleteButton' onClick={() => deleteItem(product.id)}> <BsTrash/> </button>
                        </Card.Body>
                    </Card>
                </div>
                <OrderSummary/>
                
            </div>
        </section>
    )
}

export default CartView;