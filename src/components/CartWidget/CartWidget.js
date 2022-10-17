import { FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import "./CartWidget.css";

const CartWidget = () => {
    const { calculateItemsQuantity } = useCartContext();
    
    return (
        <div className='cartWidgetContainer'>
            <Link to='/cart'>
                <FiShoppingCart/>
            </Link>
            {calculateItemsQuantity() > 0 &&
            <div className='itemsQuantity'>
                <h6> {calculateItemsQuantity()} </h6>
            </div>}
        </div>
    )
}

export default CartWidget;