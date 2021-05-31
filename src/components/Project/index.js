import React from "react";
import {
    Card
} from 'react-bootstrap';
// import { capitalizeFirstLetter } from "../../utils/helpers";

function Project({ title, description, pictures, appLink, gitLink }) {
    return (
        <Card>
            {
                pictures.map((picture, index) => (
                    <Card.Img variant="top" key={index} src={picture} />
                ))
            }
            <Card.Body>
                <Card.Title> {title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                {appLink &&
                    <Card.Link href={appLink}>App</Card.Link>
                }
                {gitLink &&
                    <Card.Link href={gitLink}>Github</Card.Link>
                }
            </Card.Body>
        </Card>
    )
}




export default Project;

