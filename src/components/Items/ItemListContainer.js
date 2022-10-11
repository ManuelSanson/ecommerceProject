import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import { useParams } from 'react-router-dom';
import { getAllProducts, getProductsByCategory } from '../../utils/products';
import Spinner from '../Spinner/Spinner';
import ItemList from './ItemList';
import "./ItemListContainer.css";

const ItemListContainer = ({greeting}) => {

    const { categoryId } = useParams();

    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            if (categoryId) {
                try {
                    setProducts([])
                    const response = await getProductsByCategory(categoryId);
                    if(response){
                        setProducts(response)
                    }
                } catch (error) {
                    console.warn(error);
                }
            } else {
                try {
                    setProducts([])
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

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <Container>
            <h3 className="title">{categoryId && capitalizeFirstLetter(categoryId)}</h3>
            <h3 className="greeting">{greeting}</h3>
            {products.length > 0 ? <ItemList products={products}/> : <div className='spinnerContainer'><Spinner/></div>}
        </Container>
    )
}

export default ItemListContainer;