import React from "react";
import{Link,BrowserRouter}from "react-router-dom";
function Navbar(){
    return(
        <>
        <div className="bg-blue-500 h-28 w-full flex items-center justify-center ">
            <h1>hospital management system</h1>

    
            </div >
            <div className="bg-gray-500 h-28 w-full flex items-center justify-center ">
                <BrowserRouter>
                <nav>
<Link to="/">patients</Link>||
<Link to="/Doctors">Doctors</Link>||
<Link to="/appointments">appointments</Link>
                </nav>
</BrowserRouter>
            </div>
            </>
    )

}
export default Navbar;                      