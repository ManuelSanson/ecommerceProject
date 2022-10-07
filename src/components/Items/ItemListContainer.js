import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import { useParams } from 'react-router-dom';
import { getAllProducts, getProductsByCategory } from '../../utils/products';
import ItemList from './ItemList';
import "./ItemListContainer.css";

const ItemListContainer = ({greeting}) => {

    const { categoryId } = useParams();

    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            if (categoryId) {
                try {
                    const response = await getProductsByCategory(categoryId);
                    if(response){
                        setProducts(response)
                    }
                } catch (error) {
                    console.warn(error);
                }
            } else {
                try {
                    const response = await getAllProducts();
                    if(response){
                        setProducts(response)
                    }
                } catch (error) {
                    console.warn(error);
                }
            }
        }
        fetchData()
    }, [categoryId])

    return (
        <Container>
            <h1 className="title">Products</h1>
            <h3 className="greeting">{greeting}</h3>
            <ItemList products={products}/>
        </Container>
    )
}

export default ItemListContainer;