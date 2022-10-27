import { useEffect, useState } from "react";
import { Button, Carousel, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getStrongProducts } from "../../utils/products";
import Spinner from "../Spinner/Spinner";
//import ItemList from "../Items/ItemList";
import './StrongProducts.css';

const StrongProducts = () => {
    
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getStrongProducts();
                if(response){
                    setProducts(response)
                }
            } catch (error) {
                console.warn(error);
            }
        } 
        fetchData()
    }, [])
    console.log(products);

    return (
        <div>
            <h3> You may also like... </h3>            
            {products.length > 0 ?
            <Container className='carouselContainer'>
                <Carousel fade interval={1500} variant='dark'>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={products[0].pictureURL}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <Button className='mt-1' variant="danger" as={Link} to={`/item/${products[0].id}`}> 
                            View details
                        </Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={products[1].pictureURL}
                        alt="First slide"
                        />
                        <Carousel.Caption >
                        <Button className='mt-1' variant="danger" as={Link} to={`/item/${products[1].id}`}> 
                            View details
                        </Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={products[2].pictureURL}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <Button className='mt-1' variant="danger" as={Link} to={`/item/${products[2].id}`}> 
                            View details
                        </Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
            : <div className='spinnerContainer'><Spinner/></div>}
        </div>
    )
}

export default StrongProducts;