import { FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import "./CartWidget.css";

const CartWidget = () => {
    return (
        <Link to='/cart'>
            <FiShoppingCart/>
        </Link>
    )
}

export default CartWidget;