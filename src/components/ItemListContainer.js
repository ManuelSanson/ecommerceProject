import Container from 'react-bootstrap/Container';
import "./ItemListContainer.css";
import ItemCount from "./ItemCount.js"

const ItemListContainer = ({greeting}) => {
    return (
        <Container>
            <h1 className="title">Productos</h1>
            <h3 className="greeting">{greeting}</h3>
            <ItemCount/>
        </Container>
    )
}

export default ItemListContainer;