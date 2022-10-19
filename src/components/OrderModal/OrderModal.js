import React from 'react';
import { Button, Form, Modal, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './OrderModal.css';

const OrderModal = ( {showModal, onClose, onBuy, orderId} ) => {

    return (
        <Modal show={showModal} onHide={onClose}>
            <Modal.Header closeButton>
            <Modal.Title>Complete Purchase</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="name" placeholder="Enter name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="phone" placeholder="Enter phone" />
                </Form.Group>
            </Modal.Body>
            <Modal.Footer className='text-center'>
            {!orderId && (
                <>
                    <Button variant="danger" onClick={onClose}>
                        Close
                    </Button>
                    <Button variant="success" onClick={onBuy}>
                        Buy
                    </Button>
                </>
            )}
            {orderId && (
                orderId ?
                <div className='successfulOrderFooter'>
                    <Alert key='success' variant='success'>
                        {orderId}
                    </Alert>
                    <Button variant='success' className='border' as={Link} to='/'> Continue Shopping </Button>
                </div>
                : <h2>waiting</h2>
            )}
            </Modal.Footer>
        </Modal>
    )
}

export default OrderModal;