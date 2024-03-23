import { Container, Row, Col } from 'react-bootstrap';
function Header (props) {
    return (
        <header>
            <Container>
                <Row>
                    <Col sm={12} md={3}>
                        <h1>{props.nome}</h1>
                    </Col>
                    <Col sm={12} md={3}>
                        <h2>{props.curso}</h2>
                    </Col>
                </Row>
            </Container>
        </header>
    )
}

export default Header;