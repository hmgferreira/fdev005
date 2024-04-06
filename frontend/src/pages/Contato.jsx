import { useState } from "react";

function Contato () {

    // CRIE OS CAMPOS EMAIL, ENDEREÇO(LOGRADOURO, NUMERO E BAIRRO) E MENSAGEM CONFORME O CAMPO NOME E USE O USESTATE.
    const[nome, setNome] = useState('');

    // CRIE UMA FUNCA CHAMADA ENVIAR DADOS E AO CLICAR EM BUTTON DEVE EXIBIR UM ALERT PARA CADA CAMPO NA FUNCAO.
    function enviarDados() {
        alert(nome);
    }

    return (
        <>
            <form>
                <div className="mt-3">
                    <label htmlFor="nome" className="form-label">Nome - {nome}</label>
                    <input type="text" className="form-control" id="nome" onChange={e => setNome(e.target.value)} />
                </div>
                <div className="mt-3">
                    <label htmlFor="cep" className="form-label">CEP</label>
                    <input type="cep" className="form-control" id="cep" placeholder="000000000"/>
                </div>
                <div className="mt-3">
                    <button type="button" className="btn btn-success">Salvar</button>
                </div>
            </form>
            <br />
           
        </>
    )
}


export default Contato;