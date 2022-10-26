import { FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import "./CartWidget.css";

const CartWidget = () => {
    const { itemsQuantity } = useCartContext();
    
    return (
        <div className='cartWidgetContainer'>
            <Link to='/cart'>
                <FiShoppingCart/>
            </Link>
            {itemsQuantity() > 0 &&
            <div className='itemsQuantity'>
                <h6> {itemsQuantity()} </h6>
            </div>}
        </div>
    )
}

export default CartWidget;