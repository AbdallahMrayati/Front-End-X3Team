import "./navbar.css"
import person from "../../assist/person.png"
import out from "../../assist/out.png"
import logo from "../../assist/logo 1.png"
import { Link } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState} from 'react';
function Navbarcompo(props) {

    const [data, setdata] = useState([]);
  useEffect(() => {
    let id =2;
      axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then (res =>setdata(res.data))
      .catch(err => console.log(err))
     
  }, [])


    return(
<div   className="NavBarr">
<div className="logo">
        <img src={logo}></img>
      </div>
    <div className="nav-items">
    
         <ul className="nav-items-ul">
            <li  className={props.navitemdisply}>
                <div className={props.imgclass}>
                       <img src={person}></img>
                </div>
                <h3>
                    {data.name}
                </h3>
            </li>
            <li className={props.navitemdisply}>
            <div className={props.imgclass}>
                <img src={out}></img>
                </div>
                <Link to="#" className="logout">
                {props.textitem2}
                </Link>
            </li>
         </ul>
    </div>
     
</div>
    )
    
}

export default Navbarcompo;