import { Card } from "react-bootstrap";
import ItemCount from "../Items/ItemCount";
import { BsTrash } from 'react-icons/bs'
import './CartView.css';
import { useCartContext } from "../../context/CartContext";
import { useState } from "react";

const CartView = ({product}) => {
    const { deleteItem } = useCartContext();

    const [count, setCount] = useState(product.quantity);
    
    return (
        <section className="cartItemsContainer">
            <div>
                <Card className='cartItemCard' style={{width: "60rem",}}>
                    <Card.Img variant="top" src={product.pictureURL} className='p-2 cartItemCardPicture'/>
                    <Card.Body className='cartItemBody'>
                        <Card.Title> {product.title} </Card.Title>
                        <Card.Text className='cartItemPrice'>
                            $ {product.price}
                        </Card.Text>
                        <ItemCount product={product} count={count} setCount={setCount}/>
                        <button className='deleteButton' onClick={() => deleteItem(product.id)}> <BsTrash/> </button>
                    </Card.Body>
                </Card>
            </div>
        </section>
    )
}

export default CartView;