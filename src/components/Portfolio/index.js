import React from "react";
import { Container, Row, Col } from "react-bootstrap";

// import { capitalizeFirstLetter } from "../../utils/helpers";

function Portfolio() {
  const portfolioItems = [
    {
      title: "Title",
      description: "...",
      pictures: ["jungle.png"],
    },
    {
      title: "Title",
      description: "...",
      pictures: ["jungle.png"],
    },
  ];

  return (
    <Container>
      <Row>
        <Col>
          <h3>Portfolio</h3>
        </Col>
      </Row>
      <Row>
        {portfolioItems.map(({ title, description, pictures }) => (
          <Col md="4">
            {pictures.map((picture, index) => (
              <img key={index} src={picture} />
            ))}
            <h5>{title}</h5>
            <p>{description}</p>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Portfolio;
