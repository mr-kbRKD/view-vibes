import React from "react";
import SideBar from "./SideBar.js";
import MainContainer from "./MainContainer.js";
import { Outlet } from "react-router-dom";

const Body = () => {
    return (

        <div className="flex">
            <SideBar />
            {/* <MainContainer /> */}
            <Outlet />
        </div>
    );
};

export default Body;