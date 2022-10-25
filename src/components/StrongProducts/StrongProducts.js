import { useEffect, useState } from "react"
import { Spinner } from "react-bootstrap"
import { getStrongProducts } from "../../utils/products"
import ItemList from "../Items/ItemList"

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

    return (
        <div>
            <h3> You may also like... </h3>
            {products.length > 0 ? <ItemList products={products}/> : <div className='spinnerContainer'><Spinner/></div>}
        </div>
    )
}

export default StrongProducts;