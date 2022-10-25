import React, { useState } from 'react';
import { Button, Form, Modal, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './OrderModal.css';
import Spinner from '../Spinner/Spinner';

const OrderModal = ( {showModal, onClose, onBuy, orderId, setBuyer} ) => {

    const initialValues = {
        emailAddress: '',
        confirmationEmailAddress: '',
        name: '',
        phone: '',
    }

    const [values, setValues] = useState(initialValues);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        });

        const buyerDraft = {
            emailAddress: values.emailAddress,
            name: values.name,
            phone: values.phone,
        }
        setBuyer(buyerDraft)
    };

    const isDisabled = values.emailAddress === '' || values.confirmationEmailAddress === '' || values.name === '' || values.phone === '';

    const handleOnClose = () => {
        onClose();
        setValues(initialValues)
    }

    const [showSpinner, setShowSpinner] = useState(false);

    const handleOnBuy = () => {
        onBuy();
        setShowSpinner(true);
    }

    return (
        <Modal show={showModal} onHide={handleOnClose}>
            <Modal.Header closeButton>
            <Modal.Title>Complete Purchase</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group className="mb-3" >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control value={values.emailAddress} name='emailAddress' type="email" placeholder="Enter email" onChange={handleInputChange}/>
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control value={values.confirmationEmailAddress} name='confirmationEmailAddress' type="email" placeholder="Re-enter email" onChange={handleInputChange}/>
                </Form.Group>
                {values.emailAddress !== values.confirmationEmailAddress && values.emailAddress !== '' && values.confirmationEmailAddress !== '' && 
                <Alert key='danger' variant='danger'>
                    Your email does not match
                </Alert>}
                <Form.Group className="mb-3" >
                    <Form.Label>Name</Form.Label>
                    <Form.Control value={values.name} name='name' type="name" placeholder="Enter full name" onChange={handleInputChange}/>
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Phone</Form.Label>
                    <Form.Control value={values.phone} name='phone' type="phone" placeholder="Enter phone" onChange={handleInputChange}/>
                </Form.Group>
            </Modal.Body>
            <Modal.Footer className='text-center'>
            {!showSpinner && (
                <>
                    <Button variant="danger" onClick={handleOnClose}>
                        Close
                    </Button>
                    <Button disabled={isDisabled} variant="success" onClick={handleOnBuy}>
                        Buy
                    </Button>
                </>
            )}
            {showSpinner && !orderId ?
            <div className='modalOrderFooter'> <Spinner/> </div>  :
            showSpinner && orderId && (
                <div className='modalOrderFooter'>
                    <Alert key='success' variant='success'>
                        Thank you for your purchase! Your Order ID is: <b> {orderId} </b>
                    </Alert>
                    <Button variant='success' className='border' as={Link} to='/'> Continue Shopping </Button>
                </div>
            )
            }
            </Modal.Footer>
        </Modal>
    )
}

export default OrderModal;