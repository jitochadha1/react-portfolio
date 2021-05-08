import React from "react";
import Nav from "../Nav";
// import { capitalizeFirstLetter } from "../../utils/helpers";

function Header(props) {

    return (
        <header>
            <Nav {...props} />
        </header>
    )
}




export default Header;