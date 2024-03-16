
function Header (props) {
    
    return (
        <header>
            <h1>{props.nome}</h1>
            <h2>{props.curso}</h2>
            {props.children}
        </header>
    )
}


export default Header;