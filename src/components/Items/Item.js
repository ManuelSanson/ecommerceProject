import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from 'react-router-dom';
import './Item.css';

function Item({product}) {
    
    return (
        <Card className='itemCard' style={{width: "18rem",}}>
            <Card.Img variant="top" src={product.pictureURL} className='p-2'/>
            <Card.Body className='mt-2'>
                <Card.Title> {product.title} </Card.Title>
                <Card.Text className='pt-2 cardTextPrice'>
                    $ {product.price}
                </Card.Text>
                <Card.Text className='pt-2'>
                    {product.description}
                </Card.Text>
                <Button className='mt-3' variant="dark" as={Link} to={`/item/${product.id}`}> 
                    View details
                </Button>
            </Card.Body>
        </Card>
    );
}

export default Item;
