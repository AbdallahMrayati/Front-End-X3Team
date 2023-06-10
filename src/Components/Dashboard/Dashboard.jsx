import Sidebar from "../SideBar/sideBar";
import "./Dashboard.css";
import Navbarcompo from "../Navbar/navbar";
import React, { useState } from "react";

import { Outlet } from "react-router-dom";
import open from "../../assist/open.png"


function Dashboard() {
  const [sideBar, setSidebar] = useState(false);

  const toggleSidebar = () => {
    setSidebar((prevState) => !prevState)
  }
  return (
    <div className="dashboard">
      <div className="row rowmain ">
        <Navbarcompo
          navitemdisply=""
          imgclass="img-navitem"
          textitem1="name"
          textitem2="log out"
        />
      </div>

      <div className="dash-container row rowmain">
        <div className="col-4">
          <Sidebar sidebar={sideBar} closeSide={toggleSidebar} />
        </div>
        <div className="w-md-100 col-sm-12 col-md-8 ">
          <Outlet />
        </div>

        <div className="sidebarbtn" onClick={toggleSidebar}>

          <img src={open} alt="" />
        </div>

      </div>
    </div>
  );
}

export default Dashboard;