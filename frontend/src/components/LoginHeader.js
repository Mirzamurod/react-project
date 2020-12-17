import { Nav, Navbar, Container } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"


const LoginHeader = () => {
    return <>
        <Navbar bg="primary" variant="dark" collapseOnSelect>
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand></Navbar.Brand>
                </LinkContainer>
                <Nav className="ml-auto">
                    <LinkContainer to="/dashboard-page">
                        <Nav.Link>
                            <i className="mr-1" />Dashboard
                        </Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/pricing-page">
                        <Nav.Link>
                            <i className="mr-1" />PRICING
                        </Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/registor-page">
                        <Nav.Link>
                            <i className="mr-1" />REGISTOR
                        </Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/login-page">
                        <Nav.Link>
                            <i className="mr-1" />LOGIN
                        </Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/lock-page">
                        <Nav.Link>
                            <i className="mr-1" />LOCK
                        </Nav.Link>
                    </LinkContainer>
                </Nav>
            </Container>
        </Navbar>
    </>
}

export default LoginHeader;