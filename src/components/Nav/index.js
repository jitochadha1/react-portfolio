import React from "react";
// import { capitalizeFirstLetter } from "../../utils/helpers";
import { Navbar, Nav, Form, FormControl, Button, Image } from "react-bootstrap";
import avatar from '../../assets/img/avatar.png';

function Navigation(props) {
  const { links = [], activePage, setActivePage } = props;

  return (
    <Navbar bg="dark" variant="dark">
      <Image className="thumbnail mr-2" src={avatar} roundedCircle />
      <Navbar.Brand href="#home">Jito Chadha</Navbar.Brand>
      <Nav className="mr-auto">
        {links.map((linkText) => (
          <li
            className={`${activePage === linkText && "isActiveNav"}`}
            onClick={() => setActivePage(linkText)}
            key={linkText}
          >
            <Nav.Link href={`#${linkText.split(" ").join("-")}`}>
              {linkText}
            </Nav.Link>
          </li>
        ))}
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
      </Form>
    </Navbar>
  );
}

export default Navigation;
