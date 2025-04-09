import React from 'react'
import { Button, Form } from 'react-bootstrap';
export default function Search() {
    return (
        <div>
            <Form className="d-flex">
                <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                />
                <Button variant="outline-info">Search</Button>
            </Form>
        </div>
    )
}
