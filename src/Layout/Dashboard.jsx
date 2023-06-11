import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaHome } from 'react-icons/fa';
import { FcBusinessman, FcPaid } from 'react-icons/fc';
import { SiGoogleclassroom } from 'react-icons/si';
import { MdClass } from 'react-icons/md';


const Dashboard = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-start mt-10">
        
        <Outlet></Outlet>

        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side ">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-blue-400 text-base-content">
          {/* Sidebar content here */}
          <li>
            <NavLink to="/dashboard/mycart"><MdClass></MdClass> My Classes</NavLink>
          </li>
          <li>
            <NavLink to="/instructors"><FcPaid></FcPaid> My Enrolled Class</NavLink>
          </li>
          <div className="divider"></div> 
          <li>
            <NavLink to="/"><FaHome></FaHome> Home</NavLink>
          </li>
          <li>
            <NavLink to="/instructors"><FcBusinessman></FcBusinessman> Instructors</NavLink>
          </li>
          <li>
            <NavLink to="/classes"> <SiGoogleclassroom></SiGoogleclassroom> Classes</NavLink>
          </li>
          <li>
            {/* <NavLink to=""> </NavLink> */}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
