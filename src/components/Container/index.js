import {
    Container,
    Row,
    Col
} from 'react-bootstrap';

export default ({ children, centered }) => (
    <Container className="mt-3">
        <Row className={centered ? 'centered' : ''}>
            <Col>
                {children}
            </Col>
        </Row>
    </Container>
)