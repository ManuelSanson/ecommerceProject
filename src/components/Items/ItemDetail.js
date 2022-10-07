import Container from 'react-bootstrap/Container';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from 'react-router-dom';
import ItemCount from "./ItemCount";
import "./ItemDetail.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

const ItemDetail = ({product}) => {
    AOS.init()
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
                    <div className='addToCart'>
                        <ItemCount product={product}/>
                        <Button className='mt-3' variant="dark" as={Link} to={'/cart'}> 
                            Add to cart
                        </Button>
                    </div>
                    <Card.Text className='mt-3'>
                        Stock available: {product.stock}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default ItemDetail;