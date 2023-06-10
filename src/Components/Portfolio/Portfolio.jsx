
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "./PortfolioStyle.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import cam from "../../assist/CAM.png"
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Portfolio() {

    const [selectedImage, setSelectedImage] = useState("");
    const imageChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {

            setSelectedImage(e.target.files[0]);

        }
    };


    const [title, setTitle] = useState();
    const [serviceT, setServiceT] = useState();
    const [desc, setDesc] = useState();
    const [pLink, setPLink] = useState();


    const onSubmit = (e) => {
        toast.success(' A new pproject  added', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
            e.preventDefault();
        
            axios
                .post(
                    " ",
                    {
                        //   title: title,
                        //   description,
                    },
                    {
                        headers: {
                            authorization: localStorage.getItem("accessToken"),
                        },
                    }
                )
                .then((res) => {
                    if (res.status == 201) {
                        
                    }

                    
                });
        };
    
            
    
   


    return (
        <div className="Portfolio ">
            <Form onSubmit={ onSubmit}>


                <Row className='img-div'>
                    {selectedImage && (<div className='img-div'>
                        <img src={URL.createObjectURL(selectedImage)} alt="" />



                    </div>
                    )}
                    <div className='imgADD'>
                        <input
                            accept="image/*"
                            type="file"
                            id="image"
                            style={{ display: "none" }}
                            placeholder='uploadimg'
                            required
                            onChange={imageChange}
                            
                        />

                        <label htmlFor="image"><img src={cam}></img></label>
                    </div>
                </Row>
                <Row className="g-2 w-100">
                    <Col sm className='selectinput  '>
                        <Form.Select className='input-w' required onChange={(event) => setServiceT(event.target.value)}  >
                            <option value="">service type </option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>

                    </Col>
                    <Col md className='titleinput '>

                        <Form.Control type="text" placeholder="title ...  "  required className=' w-100'  onChange={(event) => setTitle(event.target.value)} />

                    </Col>
                </Row>


                <Row class="w-100 p-0 m-0 roow">
                    <Form.Control className="desc"
                        as="textarea"
                        placeholder="desc  ...  "
                        style={{ height: '100px' }}
                        onChange={(event) => setDesc(event.target.value)}
                        required
                    />
                    <Form.Control type="text" placeholder="project link "  required className='input1-w' onChange={(event) => setPLink(event.target.value)} />

                </Row>


                <div className='button-div'>
                    <Button type="submit" >add to portfolio</Button>
                </div>




            </Form>
            <ToastContainer icon={false}  className="toast-position"
        />
        </div>
         
    );
}

export default Portfolio;