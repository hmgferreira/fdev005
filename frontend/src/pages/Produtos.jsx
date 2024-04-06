import { useState } from "react";
import { Card, Button, Row, Col } from 'react-bootstrap';
import CardProduto from "../components/CardProduto";
function Produtos () {

    const [lista, setLista] = useState([
        {
            id: 1,
            nome: "Camiseta",
            preco: 100,
            descricao: '',
            quantidade: 10,
        },
        {
            id: 2,
            nome: "Camiseta",
            preco: 100,
            descricao: '',
            quantidade: 10,
        }
    ]);    

    return (
        <>
            <Row>
                {lista.map((item, posicao) => (
                    <Col md={4}>
                        <CardProduto 
                            titulo={item.nome} 
                            descricao={item.descricao} 
                            valor={item.preco}
                        />
                    </Col>
                ))}
            </Row>

            <Row>
                <Col>
                    <CardProduto titulo="Mouse USB" descricao="USB" valor={19.99} />
                </Col>
                <Col>
                    <CardProduto titulo="Teclado USB" descricao="USB" valor={29.99} />
                </Col>
                <Col>
                    <CardProduto titulo="Monitor Gamer" descricao="34p" valor={2590.99} />
                </Col>
            </Row>
            <br />
            <Row>
                <Col>
                    <CardProduto titulo="Mouse USB" descricao="USB" valor={19.99} />
                </Col>
                <Col>
                    <CardProduto titulo="Teclado USB" descricao="USB" valor={29.99} />
                </Col>
                <Col>
                    <CardProduto titulo="Monitor Gamer" descricao="34p" valor={2590.99} />
                </Col>
            </Row>
            <br />
        </>
    )
}


export default Produtos;