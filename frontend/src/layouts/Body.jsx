import { Container } from "react-bootstrap";
import Menu from "./Menu";
function Body (props) {
    return (
        <main>
            <Container>
                <Menu />
                {props.children}
            </Container>
        </main>
    )
}
export default Body;