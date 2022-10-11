import { Card } from "react-bootstrap";
import ItemCount from "../Items/ItemCount";
import { BsTrash } from 'react-icons/bs'
import './CartView.css';
import { useCartContext } from "../../context/CartContext";

const CartView = ({product}) => {
    const { deleteItem } = useCartContext();
    
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
                        <ItemCount product={product}/>
                        <button className='deleteButton' onClick={() => deleteItem(product.id)}> <BsTrash/> </button>
                    </Card.Body>
                </Card>
            </div>
        </section>
    )
}

export default CartView;