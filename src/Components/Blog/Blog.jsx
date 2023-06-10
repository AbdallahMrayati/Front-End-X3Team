
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "./Blog.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState , useEffect } from 'react';
import cam from "../../assist/CAM.png"
import add from "../../assist/add.png"
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Blog() {

//get tag data
    const [tagdata, settagdata] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => settagdata(res.data))
            .catch(err => console.log(err))

    }, [])

    const [selectedImage, setSelectedImage] = useState();
    const imageChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {

            setSelectedImage(e.target.files[0]);

        }
    };
    const [selectedImages, setSelectedImages] = useState([]);
    const onselectedImges = (e) => {
        const onselectFiles = e.target.files;
        const selectFilesArray = Array.from(onselectFiles)
        const imgsArray = selectFilesArray.map((file) => {
            return file
        });

        setSelectedImages(imgsArray);
    }

    const [Mtitle, setMtitle] = useState();
    const [subtitel, setSubtitel] = useState();
    const [Tfilter, setTfilter] = useState();
    const [script, setScript] = useState();











    // add new blog

    const onSubmit = (e) => {

     
        e.preventDefault();
        axios
            .post(

                " ",
                {
                    //   title: title,
               
                    
                },
                {
                    headers: {
                        authorization: localStorage.getItem("accessToken"),
                    },
                }
            )
            .then((res) => {
                if (res.status == 201) {
                    toast.success('  A new article was added', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
                }


            });
    };




    return (
        <div className="Blog row">
            <Form onSubmit={onSubmit}>
                <div className='headTitle'>
                    <p>Add cover photo</p>
                </div>

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
                            onChange={imageChange}
                            required
                        />

                        <label htmlFor="image"><img src={cam}></img></label>
                    </div>

                </Row>
                <Row className="g-2 ">
                    <Col sm className='titelinput'>
                          <p classname="ptitle">field required </p>
                        <Form.Control type="text" placeholder="main titel" required onChange={(event) => setMtitle(event.target.value)} className='input-h' />

                    </Col>
                    <Col sm className='subtitelinput '>
                    <p classname="ptitle">field required </p>
                        <Form.Control type="text" placeholder="subtitel" required onChange={(event) => setSubtitel(event.target.value)}
                            className='input-h' />
                    </Col>

                </Row>
                <Row>
                    <Col sm className='taginput '>
                    <p classname="ptitle">field required </p>
                        <Form.Control className='input-h' name="tag" list='tag' style={{ width: "100%" }} placeholder='tag filter' required onChange={(event) => setTfilter(event.target.value)} />
                        <datalist id='tag' className="datalist">

                        {tagdata.map((d, i) => (

                            <option key={i} value={d.username}></option>
                        ))}
                        </datalist>
                    </Col>

                </Row>
                <Row>
                    <Col className='divscrpit'>
                    <p classname="ptitle">field required </p>
                        <Form.Control className="script"
                            as="textarea"
                            placeholder="script .."
                            style={{ height: '243px' }}
                            onChange={(event) => setScript(event.target.value)}
                            required
                        />
                    </Col>
                </Row>
                <div className='bodyTitle'>
                    <p>Add pictures to the articel </p>
                </div>
                <div className='d-flex div-img'>
                    <div className='g2 images-uploads'>


                        {selectedImages &&
                            selectedImages.map((image, index) => {
                                return (
                                    <div className='images-upload' key={index}>
                                        <img src={URL.createObjectURL(image)} alt="" />
                                    </div>
                                )
                            })

                        }




                        <div className='images-upload-add'>
                            <div className='imgsADD'>
                                <input
                                    accept="image/*"
                                    type="file"
                                    multiple={true}
                                    id="images"
                                    style={{ display: "none" }}
                                    placeholder='uploadimg'
                                    onChange={onselectedImges}
                                    required
                                />

                                <label htmlFor="images"><img src={add} >
                                </img>
                                </label>


                            </div>
                        </div>
                    </div>
                </div>
                <div className='button-div'>
                    <Button type="submit"> add to Blog</Button>
                </div>

            </Form>
            <ToastContainer icon={false} className="toast-position" />
        </div >
    );
}

export default Blog;