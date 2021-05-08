import React, { useState } from "react";
import {
    Form,
    Button,
    Alert
} from 'react-bootstrap';
// import { capitalizeFirstLetter } from "../../utils/helpers";

const config = {
    show: true
}

function Contact() {
    const [input, setInput] = useState({
        name: 'Jito',
        email: 'jito@gmail.com',
        message: 'Hello!'
    });
    const [invalidEmail, setInvalidEmail] = useState(false);
    const [formSubmit, setFormSubmit] = useState(false);

    const checkEmailValidity = (event) => {
        const input = event.target;
        const isNotValid = !input.value || !input.checkValidity()

        setInvalidEmail(isNotValid);
    }

    const updateName = (event) => setInput({ ...input, name: event.target.value })
    const updateEmail = (event) => setInput({ ...input, email: event.target.value })
    const updateMessage = (event) => setInput({ ...input, message: event.target.value })

    const handleSubmit = () => {
        const isComplete = input.name && input.email && input.message;

        if (isComplete) {
            setFormSubmit(true);
        } else {
            // alert('Please complete the form before submit')
        }
    }

    console.log(input)

    return (
        <Form onSubmit={handleSubmit}>
            {/* Name */}
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Name"
                    value={input.name}
                    onChange={updateName} />
            </Form.Group>

            {/* Email */}
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter email"
                    onBlur={checkEmailValidity}
                    value={input.email}
                    onChange={updateEmail} />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            {/* Message */}
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Message</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={4}
                    value={input.message}
                    onChange={updateMessage} />
            </Form.Group>

            {/* Your email is invalid? */}
            {invalidEmail &&
                <Alert variant="dark" className="mb-3">
                    Your email is invalid
                </Alert>
            }

            {/* Submit */}
            {!formSubmit &&
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            }

            {/* Success message */}
            {formSubmit &&
                <Alert variant="success">
                    Thank you {input.name}! We have received the information
                </Alert>
            }
        </Form>
    )
}




export default Contact;