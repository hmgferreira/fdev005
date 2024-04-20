import { useContext } from "react";
import { Row, Col } from "react-bootstrap";
import { AuthContext } from "../../App";

function Login() {

    const { setLogged } = useContext(AuthContext);

    function logar() {
        // PEGAR VALORES DO LOGIN E DA SENHA/
        // VERIFICAR NO BANCO DE DADOS SE O EMAIL E A SENHA ESTAO COORRETAS.
        // DEPOIS DA ACESSO AO USUARIO;
        // ALTERAR O USECONTEXT LOGGED PARA TRUE.
        // jwt.io
        localStorage.setItem('token@fdev005', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ik1hcmNpbyBGZXJyZWlyYSIsImlhdCI6MTUxNjIzOTAyMn0.V3hBbmJfEi986IVvGNoBztM1tSx0dfqx8dXHbFWvFfA*');
        setLogged(true); 
    }

    return (
        <>
            <Row>
                <Col className="d-flex justify-content-center align-items-center">
                    <form action="">
                        <div className="mt-3">
                            <label>Email</label>
                            <input type="text" className="form-control" placeholder="Email" />
                        </div>
                        <div className="mt-3">
                            <label>Senha</label>
                            <input type="password" className="form-control" placeholder="Senha" />
                        </div>
                        <div className="mt-3">
                            <button onClick={logar} type="button" className="btn btn-success btn-sm">Acessar</button>
                        </div>
                    </form>
                </Col>
            </Row>
        </>
    )
}

export default Login;