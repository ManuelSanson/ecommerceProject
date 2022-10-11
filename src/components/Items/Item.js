import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from 'react-router-dom';
import './Item.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Item = ({product}) => {
    AOS.init()
    return (
        <Card data-aos={"flip-down"} className='itemCard' style={{width: "18rem",}}>
            <Card.Img variant="top" src={product.pictureURL} className='p-2 itemCardPicture'/>
            <Card.Body>
                <Card.Title> {product.title} </Card.Title>
                <Card.Text className='cardTextPrice'>
                    $ {product.price}
                </Card.Text>
                <Card.Text className='cardTextDescription'>
                    {product.description}
                </Card.Text>
                <Button className='mt-1' variant="dark" as={Link} to={`/item/${product.id}`}> 
                    View details
                </Button>
            </Card.Body>
        </Card>
    );
}

export default Item;
