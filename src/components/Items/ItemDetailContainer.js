import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getProduct } from "../../utils/products";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    
    const [product, setProduct] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getProduct(id);
                if(response){
                    setProduct(response)
                }
            } catch (error) {
                console.warn(error);
            }
        } 
        fetchData()
    }, [id])

    return (
        <Container>
            <h1 className="mt-3">Detalle del Producto</h1>
            {product && <ItemDetail product={product} />}
        </Container>
    );
}

export default ItemDetailContainer;