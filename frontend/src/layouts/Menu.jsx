import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../App';
function Menu() {
    const { setLogged } = useContext(AuthContext);
    function logout() {
        localStorage.removeItem('token@fdev005');
        setLogged(false);
    }
    return (
        <ul id='menu'>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/produtos">Produtos</Link>
            </li>
            <li>
                <Link to="/contato">Contato</Link>
            </li>
            <li>
                <a href onClick={logout}>Sair</a>
            </li>
        </ul>
    )
}
export default Menu;