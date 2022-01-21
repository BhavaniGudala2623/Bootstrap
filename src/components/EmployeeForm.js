import React from "react";
import Sidebar from "./Sidebar";
import bootsratp from "bootstrap";



const EmployeeForm = () => {
    return (
        <div>
            <nav class="navbar navbar-light bg-dark">
                <div class="container-fluid">
                    <span class="navbar-brand mb-1 text-white h4">HRM Portal</span>
                    <a class="navbar-brand" href="#">
                        <img src="./images/logo.jpg.jpg" alt="" width="60" height="50" ></img>
                        <span class="navbar-brand mb-1 text-white h4">Arshaa Technologies</span>
                    </a>
                </div>
            </nav>
            <Sidebar/>
        </div>
    );
};

export default EmployeeForm;
