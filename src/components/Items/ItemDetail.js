import Container from 'react-bootstrap/Container';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from 'react-router-dom';
import ItemCount from "./ItemCount";
import "./ItemDetail.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useCartContext } from '../../context/CartContext';
import { useState } from 'react';

const ItemDetail = ({product}) => {
    AOS.init()

    const { addToCart, cartList } = useCartContext()
    const isInCart = () => cartList.some((item) => item.id === product.id);

    const [count, setCount] = useState(1);

    return (
        <Container className='itemDetail'>
            <Card data-aos={'zoom-out'} className='itemDetailCard' style={{width: "50rem",}}>
                <Card.Img variant="top" src={product.pictureURL} className='p-2 itemDetailPicture'/>
                <Card.Body className='mt-1 mb-1 itemDetailCardBody'>
                    <Card.Title className='mb-4'> {product.title} </Card.Title>
                    <Card.Text className='pt-2 mb-3 cardTextPrice'>
                        $ {product.price}
                    </Card.Text>
                    <Card.Text className='pt-2'>
                        {product.description}
                    </Card.Text>
                    {isInCart(product.id) ?
                    <Button as={Link} to={'/cart'} className='mt-3' variant="dark">
                        Go to Cart
                    </Button>
                    : <div className='addToCart'>
                        <ItemCount product={product} count={count} setCount={setCount}/>
                        <Button onClick={() => addToCart(product, count)} className='mt-3' variant="dark">
                            Add to cart
                        </Button>
                    </div>}
                    <Card.Text className='mt-3'>
                        Stock available: {product.stock}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default ItemDetail;