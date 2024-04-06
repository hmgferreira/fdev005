import { Card, Button } from 'react-bootstrap';
export default function CardProduto(props) {
    
    return (
        <>
            <Card>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{props.titulo}</Card.Title>
                    <Card.Text>
                        {props.descricao}
                        <br />
                        R$ {props.valor}
                    </Card.Text>
                    <Button variant="primary">Comprar</Button>
                </Card.Body>
            </Card>
        </>
    )
}