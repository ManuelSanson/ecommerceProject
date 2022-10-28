import { Card } from "react-bootstrap";
import ItemCount from "../Items/ItemCount";
import { BsTrash } from 'react-icons/bs'
import './CartView.css';
import { useCartContext } from "../../context/CartContext";
import { useState } from "react";

const CartView = ({product}) => {
    const { removeItem, addToCart } = useCartContext();

    const [count, setCount2] = useState(product.quantity);

    const setCount = (newCount) => {
        addToCart(product, newCount - count)
        setCount2(newCount)
    }
    
    return (
        <section className="mb-5">
            <div className="cartItemsContainer">
                <div>
                    <Card className='cartItemCard'>
                        <Card.Img variant="top" src={product.pictureURL} className='p-2 cartItemCardPicture'/>
                        <Card.Body className='cartItemBody fw-bold'>
                            <Card.Title> {product.title} </Card.Title>
                            <Card.Text className='mb-0 cartItemPrice'>
                                $ {product.price}
                            </Card.Text>
                            <ItemCount product={product} count={count} setCount={setCount}/>
                            <button className='deleteButton' onClick={() => removeItem(product.id)}> <BsTrash/> </button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </section>
    )
}

export default CartView;