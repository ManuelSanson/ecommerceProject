import Item from "./Item";
import "./ItemList.css";

const ItemList = ({products}) => {
    return (
        <div className="strongProducts">
            <div className='itemList'>
                {products.map((product) => 
                    <Item key={product.id} product={product}/>
                )}
            </div>
        </div>
    );
}

export default ItemList;