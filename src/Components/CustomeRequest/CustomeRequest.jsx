
import "./CustomeRequestStyle.css";
import { Table } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import axios from "axios";
import React, { useEffect, useState} from 'react';
import delet from "../../assist/delete.png";
import searchh from "../../assist/search.png";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function CustomeRequest() {
  //get request from sever
  const [data, setTabledata] = useState([]);
  useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/users')
      .then (res =>setTabledata(res.data))
      .catch(err => console.log(err))
     
  }, [])

  console.log(data);
 
  const [search, setSearch] = useState('');
  const [Filter, setFilter] = useState('');
  const [sorte, setSort] = useState('none')
  console.log(sorte);







     // fillter data
  const i = data.filter((d) => {
    if (Filter === "name") {
      return search.toLowerCase() === '' ? d : d.name.toLowerCase().includes(search);

    }

    if (Filter === "company") { return search.toLowerCase() === '' ? d : d.username.toLowerCase().includes(search) }
    else return search.toLowerCase() === '' ? d : d.name.toLowerCase().includes(search) ||
      search.toLowerCase() === '' ? d : d.username.toLowerCase().includes(search)





   

  })
  
  
  
  
  // data sort
  i.sort(function(a, b) {
    
   
      
   if (sorte === "none" )  return  ( a.id < b.id ? -1 : 0);
   if (sorte ==="o2n")   return ( a.id < b.id ? -1 : 0);
   if (sorte ==="n2o")  return ( a.id > b.id ? -1 : 0); 
     
    
    
   

  })



  const [Checkedd, setICheckedd] = useState("false")
  const [Checked, setIsCheckedd] = useState("false")
  
  //put cheack our not to data
  const CheckHandler = (e) => {


    setICheckedd(!Checked)
    setIsCheckedd(e.target.checked);
    axios
      .put(
        "",
        {
          // id : id,
          // title: title,
          // description,
        },
        {
          headers: {
            authorization: localStorage.getItem("accessToken"),
          },
        }
      )
      .then((res) => {

        if (res.status === 200) {

        }
         
      });


  };



  
  // detet any request

const clickdelete = (id ) => {
  
  axios
    .delete(
      `https://jsonplaceholder.typicode.com/posts/${id}`,

     
    )
    .then((res) => {
      console.log("delet",res);
      if (res.status === 200) {
        toast.error(' request deleted', {
        
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
      });
      }
    });
}



return (
  <div className="CustomeRequest">
    <div className="box">

      <div sm className='searchinput'>
        <img src={searchh} alt="" />
        <Form.Control type="text" className="input-search" id="search" placeholder="Search .."
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>
      <div className='selectinput1'   >
        <Form.Select className='input-w' onChange={(e) => setFilter(e.target.value)} >
          <option vlaue="none">Filter by ..</option>
          <option value="company">company</option>
          <option value="name">name</option>
        </Form.Select>

      </div>

      <div className='selectinput2'>
        <Form.Select className='input-w'  onChange={(e) => setSort(e.target.value)}>
          <option value="none">Sort by date </option>
          <option value="o2n">old to new</option>
          <option value="n2o">new to old</option>

        </Form.Select>

      </div>







    </div>








    <div className="Table ">
      <Table className="table">
        <thead >

          <tr >

            <th className="name" > Name</th>
            <th className="cname">company name</th>
            <th  className="email"  >email</th>
            <th  className="pnum" >phone number</th>
            <th  className="pname">price name </th>
            <th  className="date" >date</th>
            <th  className="chekk" >cheked</th>
            <th  className="delet">delete</th>
          </tr>

        </thead>


        <tbody>

          {i.map((d, i) => (

            <tr key={i}>
              <td className="name" >{d.name}</td>
              <td className="cname">{d.username}</td>
              <td className="email" >{d.email}</td>
              <td className="pnum"  >{d.phone}</td>
              <td className="pname">{d.name}</td>
              <td className="date">{d.id}</td>
              <td className="chekk" ><div className="checkin"><input type="checkbox" id="check"
                checked={Checkedd}
                onChange={CheckHandler}
              /></div></td>
              <td className="delet"><button className="btn-delete" onClick={(e)=>  clickdelete(d.id , e)}><img src={delet} /></button></td>
            </tr>


          ))}
        </tbody>
      </Table>

    </div>
    <ToastContainer icon={false}    className="toast-position" />
  </div>
);
}

export default CustomeRequest;