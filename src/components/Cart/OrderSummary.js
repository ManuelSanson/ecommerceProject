import React from 'react';
import { Button, Card, } from 'react-bootstrap';
import { useCartContext } from '../../context/CartContext';
import './OrderSummary.css';

const OrderSummary = ({onOpen}) => {
    const { totalPrice } = useCartContext();

    return (
        <section>
            <div className="orderSummary">
                <Card className='orderSummaryCard'>
                    <Card.Body className=''>
                        <Card.Title className='mb-4 fs-2 text-center'> Order Summary </Card.Title>
                        <div className='m-2 orderSummaryDetail'>
                            <Card.Text className='fw-bold'>
                                Subtotal:
                            </Card.Text>
                            <Card.Text>
                                $ {totalPrice()}
                            </Card.Text>
                        </div>
                        <div className='m-2 orderSummaryDetail'>
                            <Card.Text className='fw-bold'>
                                Free Delivery
                            </Card.Text>
                        </div>
                        <div className='m-4 orderSummaryDetail fs-4'>
                            <Card.Text className='fw-bold'>
                                Total:
                            </Card.Text>
                            <Card.Text>
                                $ {totalPrice()}
                            </Card.Text>
                        </div>
                        <div className='text-center mt-5'>
                            <Button variant='success' className='border' onClick={onOpen}> Complete purchase </Button>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </section>
    )
}

export default OrderSummary;