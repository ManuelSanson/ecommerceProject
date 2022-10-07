import Container from 'react-bootstrap/Container';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from 'react-router-dom';
import ItemCount from "./ItemCount";
import "./ItemDetail.css"

const ItemDetail = ({product}) => {
    return (
        <Container className='itemDetail'>
            <Card className='itemDetailCard' style={{width: "35rem",}}>
                <Card.Img variant="top" src={product.pictureURL} className='p-2 itemDetailPicture'/>
                <Card.Body className='mt-1 mb-1 itemDetailCardBody'>
                    <Card.Title> {product.title} </Card.Title>
                    <Card.Text className='pt-2 cardTextPrice'>
                        $ {product.price}
                    </Card.Text>
                    <Card.Text className='pt-2'>
                        {product.description}
                    </Card.Text>
                    <ItemCount product={product}/>
                    <Button className='mt-3' variant="dark" as={Link} to={'/cart'}> 
                        Add to cart
                    </Button>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default ItemDetail;