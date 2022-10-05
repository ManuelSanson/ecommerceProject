import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import { useParams } from 'react-router-dom';
import { getProducts } from '../../utils/products';
import ItemList from './ItemList';
import "./ItemListContainer.css";

const ItemListContainer = ({greeting}) => {

    const { categoryId } = useParams();
    
    useEffect(() => {
        console.log(categoryId);
    }, [categoryId])

    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getProducts();
                if(response){
                    setProducts(response)
                }
            } catch (error) {
                console.warn(error);
            }
        } 
        fetchData()
    }, [])

    return (
        <Container>
            <h1 className="title">Productos</h1>
            <h3 className="greeting">{greeting}</h3>
            <ItemList products={products}/>
        </Container>
    )
}

export default ItemListContainer;