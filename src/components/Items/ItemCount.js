import Swal from 'sweetalert2';
import "./ItemCount.css"

const ItemCount = (({product, count, setCount}) => {
    
    const Add = (() => {
        if (product.stock > count) {
            setCount(count + 1);
        } else {
            Swal.fire({
                title: 'Oops!',
                text: 'It exceeds our stock',
                icon: 'error',
                background: '#f5f5dc',
                confirmButtonColor: '#000000',
                confirmButtonText: 'Ok'
            })
        }
    })

    const Delete = (() => {
        if (count > 1) {
            setCount(count - 1);
        }
    })

    return (
        <div className="counter">
            <button onClick={Delete}>-</button>
            <h5>{count}</h5>
            <button onClick={Add}>+</button>
        </div>
    )
})

export default ItemCount;