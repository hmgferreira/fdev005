import { useState } from "react";
import Cards, { CardsSmall } from "../components/Cards";
function Home () {

    const[contador, setContador] = useState(0);
    function aumentar() {
        setContador(contador + 1);
    }
    
    function diminuir() {
        if(contador > 0) {
            setContador(contador - 1);        
        }
    }
    return (
        <>
            Home
            <br />
            {contador} - 
            <button onClick={aumentar}>Aumentar ++</button>
            <button onClick={diminuir}>Diminuir --</button>
        </>
    )
}


export default Home;