import React from "react";
import resume from '../../assets/Jito_resume.pdf';
// import { capitalizeFirstLetter } from "../../utils/helpers";

function Resume() {

    return (
        <iframe src={resume + '#zoom=80'} />
    )
}




export default Resume;