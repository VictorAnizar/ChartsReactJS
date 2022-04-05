import react from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from "next/link";


const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                {/* <Link href="/index" passHref><Navbar.Brand>Inicio</Navbar.Brand> </Link> */}
                    <Nav className="me-auto">

                        <Link href="/" passHref>
                            <Nav.Link>Inicio</Nav.Link>
                        </Link>
                        <Link href="/GraficaPastel" passHref>
                            <Nav.Link>Grafica pastel</Nav.Link>
                        </Link>
                        <Link href="/Horizontalbar" passHref>
                            <Nav.Link>Grafica de barras horizontal</Nav.Link>
                        </Link>
                    </Nav>
            </Container>
        </Navbar>
    )
}

export default Header;