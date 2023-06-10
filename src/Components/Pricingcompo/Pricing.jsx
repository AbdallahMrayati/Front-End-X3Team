
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "./PricingStyle.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import axios from "axios";
function Pricing() {
    const [name, setName] = useState();
    const [desc, setDesc] = useState();
    const [price, setPrice] = useState();
    const [period, setPeriod] = useState();

    const addPrice = (event) => {
        toast.success(' A new pricing  added', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
        event.preventDefault();
        event.reset()
        // axios
        //     .post(
        //         " ",
        //         {
        //             //   title: title,
        //             //   description,
        //         },
        //         {
        //             headers: {
        //                 authorization: localStorage.getItem("accessToken"),
        //             },
        //         }
        //     )
        //     .then((res) => {
        //         if (res.status == 201) {
                   
        //         }
        //     });
    };






return (
    <div className="Pricing row">
        <Form onSubmit={addPrice}>
            <Row >
                <Form.Control type="text" onChange={(event) => setName(event.target.value)} required placeholder=" name pricing   ... " className='input1-w' />
                <Form.Control className="desc"
                    as="textarea"
                    placeholder="desc  ...  "
                    style={{ height: '100px' }}
                    onChange={(event) => setDesc(event.target.value)}
                    required
                />
            </Row>
            <Row className="g-3  ">
                <Col sm className='priceinput'>

                    <Form.Control type="text" placeholder="price...  " className='input-w' required onChange={(event) => setPrice(event.target.value)} />

                </Col>
                <Col sm className='selectinput '>
                    <Form.Select className='input-w' required onChange={(event) => setPeriod(event.target.value)}>
                        <option>period   ... </option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>

                </Col>
                <Col sm className='input-button'>
                    <Button className=' buttonn ' type='submit' >
                        add to price
                    </Button>
                </Col>
            </Row>







        </Form>
        <ToastContainer icon={false} className="toast-position"/>
    </div>
);
}

export default Pricing;