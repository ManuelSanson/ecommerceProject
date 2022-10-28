import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { getOrder } from '../../utils/orders';
import Item from '../Items/Item';
import Spinner from '../Spinner/Spinner';
import './SeeOrder.css';

const SeeOrder = () => {
    
    // const newOrderId = sessionStorage.getItem('newOrderId')
    
    //console.log(newOrderId);

    const initialValue = {
        search: '',
    }
    //const [search, setSearch] = useState('');
    const [value, setValue] = useState(initialValue);
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValue({
            ...value,
            [name]: value,
        });
    };

    const [order, setOrder] = useState(null);

    const newOrderId = value.search;

    useEffect(() => {
        const fetchData = async () => {
            try {
                
                const response = await getOrder(newOrderId);
                if(response){
                    setOrder(response)
                }
            } catch (error) {
                console.warn(error);
            }
        }
        if (value.search !== '') {
            fetchData()
        }
    }, [newOrderId, value.search])

    console.log(value.search);
    console.log(newOrderId);

    return (
        <main className='seeOrderContainer'>

            <div className='searchInputContainer m-5'>
                <Form.Group className="mb-3 searchInput" controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" rows={1} name='search' value={value.search} onChange={handleInputChange} placeholder='🔎 Enter your Order ID'/>
                </Form.Group>
            </div>
            
            {order && value.search !== '' ? 
            <section className='seeOrderMade'>
                {order && 
                    order.items.map((item) => 
                        <>
                            <Item key={item.id} product={item}/>
                            <p key={item.id + 1}> Qty: {item.quantity} </p>    
                        </>
                    )
                }

                {order && <p> Total: $ {order.total} </p>}

            </section>
            : <div className='orderSpinnerContainer'>
                <Spinner/>
            </div> 
            }   
                
            
        </main>
    )
}

export default SeeOrder;