import { Link } from "react-router-dom";
import "./sideBarStyle.css";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import close from "../../assist/close.png"
function Sidebar({ sidebar, closeSide }) {
  return (

    <>
      <div className={sidebar ? "roww open" : "roww"}>

        <div className="coll">
          <div className="btn-closside" onClick={closeSide} >
            <img src={close}></img>
          </div>
          <ul className="menu-ul">
            <li className="menu-ul-li"><h3 className="drop">Admins account managment
              <p className="line"></p>
            </h3>
              <ul className="menu-ul-li-ul">
                <li className="menu-ul-li-ul-li"><Link to="#"><p className="line"></p>create new account</Link></li>
                <li className="menu-ul-li-ul-li"><Link to="#"><p className="line"></p>view admins accounts</Link></li>
                <li className="menu-ul-li-ul-li"><Link to="#"><p className="line"></p>change my password</Link></li>

              </ul>
            </li>

            <li className="menu-ul-li"><Link to="/dashboard/blog"><p className="line"></p>blog</Link></li>
            <li className="menu-ul-li"><Link to="/dashboard/portfolio"><p className="line"></p>portfolio</Link></li>
            <li className="menu-ul-li"><Link to="/dashboard/pricing"><p className="line"></p>pricing</Link> </li>
            <li className="menu-ul-li"><Link to="/dashboard/custome-request"><p className="line"></p>recieved requests </Link> </li>

          </ul>
        </div>

      </div>




      <div className="roww1">

        <div className="coll">
          <div className="btn-closside" onClick={closeSide} >
            <BsArrowLeftCircleFill />
          </div>
          <ul className="menu-ul">
            <li className="menu-ul-li"><h3 className="drop">Admins account managment
              <p className="line"></p>
            </h3>
              <ul className="menu-ul-li-ul">
                <li className="menu-ul-li-ul-li"><Link to="#"><p className="line"></p>create new account</Link></li>
                <li className="menu-ul-li-ul-li"><Link to="#"><p className="line"></p>view admins accounts</Link></li>
                <li className="menu-ul-li-ul-li"><Link to="#"><p className="line"></p>change my password</Link></li>
              </ul>
            </li>

            <li className="menu-ul-li"><Link to="/dashboard/blog"><p className="line"></p>blog</Link></li>
            <li className="menu-ul-li"><Link to="/dashboard/portfolio"><p className="line"></p>portfolio</Link></li>
            <li className="menu-ul-li"><Link to="/dashboard/pricing"><p className="line"></p>pricing</Link> </li>
            <li className="menu-ul-li"><Link to="/dashboard/custome-request"><p className="line"></p>recieved requests </Link> </li>

          </ul>
        </div>

      </div>
    </>
  );
}

export default Sidebar;