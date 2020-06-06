import React from "react";
import {Link} from "react-router-dom";


const NavigationComponent = () => {

    return(
        <div>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" 
                integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" 
                crossOrigin="anonymous"></link>
            <div className= "container center_div">
                <Link to="/"> Home </Link>
            </div>
            <div className = "container center_div">
                <Link to= "/welcome"> Welcome</Link>
            </div>
        </div>
    )
}

export default NavigationComponent;