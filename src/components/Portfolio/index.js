import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Project from '../Project';
import portfolioItems from './portfolio-items';

// import { capitalizeFirstLetter } from "../../utils/helpers";

function Portfolio() {
  return (
    <Container>
      <Row>
        <Col>
          <h3>Portfolio</h3>
        </Col>
      </Row>
      <Row>
        {portfolioItems.map(project => (
          <Col md="4" className="mb-2">
            <Project {...project} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Portfolio;
