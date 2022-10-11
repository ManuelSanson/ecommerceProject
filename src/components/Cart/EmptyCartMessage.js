import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import './EmptyCartMessage.css'

const EmptyCartMessage = () => {
    return (
        <div className="EmptyCartMessageContainer">
            <h3>You currently have no items in your shopping cart</h3>
            <Button variant='danger' className="continueShoppingButton" as={Link} to='/'>Click here to continue shopping</Button>
        </div>
    )
}

export default EmptyCartMessage;