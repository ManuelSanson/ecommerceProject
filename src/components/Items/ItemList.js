import Item from "./Item";
import "./ItemList.css";

const ItemList = ({products}) => {
    return (
        <section className="products">
            <div className='itemList'>
                {products.map((product) => 
                    <Item key={product.id} product={product}/>
                )}
            </div>
        </section>
    );
}

export default ItemList;