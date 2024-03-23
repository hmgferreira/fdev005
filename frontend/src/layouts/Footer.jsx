import { Container, Row, Col } from 'react-bootstrap';

function Footer () {
    return (
        <footer>
            <Container>
                <Row>
                    <Col>
                        <address>
                            Rua IWTraining, 3000 <br />
                            Fortaleza - CE <br />
                            85 9985.9585
                        </address>
                    </Col>
                    <Col>
                        Redes Sociais
                    </Col>
                    <Col>
                        WhatsApp
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;