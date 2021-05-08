import {
    Container,
    Row,
    Col
} from 'react-bootstrap';
import Contact from './Contact'

export default () => (
    <Container className="mt-3">
        <Row>
            <Col>
                <Contact />
            </Col>
        </Row>
    </Container>
)