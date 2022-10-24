import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import Swal from "sweetalert2";
import './Contact.css';

const Contact = () => {
    const [emailAddress, setEmailAddress] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const submitMessage = (e) => {
        e.preventDefault();
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your message has been sent',
            showConfirmButton: false,
            timer: 1500
        })
        setEmailAddress('');
        setSubject('');
        setMessage('');
    }

    const isDisabled = emailAddress === '' || subject === '' || message === '';

    return (
        <main>
            <h2 className="text-center mt-4 mb-4"> How can we help you? </h2>
            <h3 className="m-4"> Send us a message </h3>
            <Container className="formContainer">
                <Form className="mt-4 contactForm">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control value={emailAddress} type="email" placeholder="name@example.com" onChange={(e) => setEmailAddress(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control type="text" value={subject} onChange={(e) => setSubject(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows={3} value={message} onChange={(e) => setMessage(e.target.value)}/>
                    </Form.Group>
                </Form>
            </Container>
            <div className="mb-2 text-center">
                <Button disabled={isDisabled} onClick={submitMessage} variant="success" type="submit">
                    Submit
                </Button>
            </div>
        </main>
    )
}

export default Contact;