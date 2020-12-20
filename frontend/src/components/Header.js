import { Accordion, Button, Card, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
    return (
        <>
            <Accordion className='mw-250'>
                {/* CREATIVE TIM */}
                <Card className='bgc'>
                    <Card.Header>
                        <LinkContainer to='/'>
                            <Nav.Link>
                                <i className='mr-1 fab fa-react' />
                                CREATIVE TIM
                            </Nav.Link>
                        </LinkContainer>
                    </Card.Header>
                </Card>
                {/*  */}
                <Card className='bgc'>
                    {/* Profile Name */}
                    <Card.Header>
                        <Accordion.Toggle
                            as={Button}
                            className='pl-8 btnfocus'
                            variant='link'
                            eventKey='0'
                        >
                            <i className='fas fa-user mr-1' />
                            Tania Andrew
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey='0'>
                        <Card.Body>
                            <LinkContainer to='/'>
                                <Nav.Link>
                                    <i className='mr-1 far fa-id-card' name='Dashboard' />
                                    My Profile
                                </Nav.Link>
                            </LinkContainer>
                        </Card.Body>
                    </Accordion.Collapse>
                    <Accordion.Collapse eventKey='0'>
                        <Card.Body>
                            <LinkContainer to='/'>
                                <Nav.Link>
                                    <i className='mr-1 far fa-id-card' name='Dashboard' />
                                    Edit Profile
                                </Nav.Link>
                            </LinkContainer>
                        </Card.Body>
                    </Accordion.Collapse>
                    <Accordion.Collapse eventKey='0'>
                        <Card.Body>
                            <LinkContainer to='/'>
                                <Nav.Link>
                                    <i className='mr-1 fab fa-stripe-s' name='Dashboard' />
                                    Settings
                                </Nav.Link>
                            </LinkContainer>
                        </Card.Body>
                    </Accordion.Collapse>
                    {/* Dashboard */}
                    <Card.Header>
                        <LinkContainer to='/'>
                            <Nav.Link>
                                <i className='mr-1 fab fa-react' />
                                Dashboard
                            </Nav.Link>
                        </LinkContainer>
                    </Card.Header>
                    {/* Pages */}
                    <Card.Header>
                        <Accordion.Toggle
                            as={Button}
                            className='pl-8 btnfocus'
                            variant='link'
                            eventKey='1'
                        >
                            <i className='fas fa-image mr-1' /> Pages
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey='1'>
                        <Card.Body>
                            <LinkContainer to='/pricing-page'>
                                <Nav.Link>
                                    <i className='mr-1 fab fa-pied-piper-pp' />
                                    Pricing Page
                                </Nav.Link>
                            </LinkContainer>
                        </Card.Body>
                    </Accordion.Collapse>
                    <Accordion.Collapse eventKey='1'>
                        <Card.Body>
                            <LinkContainer to='/timeline-page'>
                                <Nav.Link>
                                    <i className='mr-1 fab fa-tumblr' />
                                    Timeline Page
                                </Nav.Link>
                            </LinkContainer>
                        </Card.Body>
                    </Accordion.Collapse>
                    <Accordion.Collapse eventKey='1'>
                        <Card.Body>
                            <LinkContainer to='/login'>
                                <Nav.Link>
                                    <i className='mr-1 fas fa-clipboard-list' />
                                    Login Page
                                </Nav.Link>
                            </LinkContainer>
                        </Card.Body>
                    </Accordion.Collapse>
                    <Accordion.Collapse eventKey='1'>
                        <Card.Body>
                            <LinkContainer to='/registor-page'>
                                <Nav.Link>
                                    <i className='mr-1 far fa-registered' />
                                    Register Page
                                </Nav.Link>
                            </LinkContainer>
                        </Card.Body>
                    </Accordion.Collapse>
                    <Accordion.Collapse eventKey='1'>
                        <Card.Body>
                            <LinkContainer to='/lock-page'>
                                <Nav.Link>
                                    <i className='mr-1 fas fa-unlock-alt' />
                                    Lock Screen Page
                                </Nav.Link>
                            </LinkContainer>
                        </Card.Body>
                    </Accordion.Collapse>
                    <Accordion.Collapse eventKey='1'>
                        <Card.Body>
                            <LinkContainer to='/user-profile'>
                                <Nav.Link>
                                    <i className='mr-1 fas fa-user-alt' />
                                    User Profile
                                </Nav.Link>
                            </LinkContainer>
                        </Card.Body>
                    </Accordion.Collapse>
                    <Accordion.Collapse eventKey='1'>
                        <Card.Body>
                            <LinkContainer to='/error-page'>
                                <Nav.Link>
                                    <i className='mr-1' />
                                    Error Page
                                </Nav.Link>
                            </LinkContainer>
                        </Card.Body>
                    </Accordion.Collapse>
                    <Card.Header>
                        <LinkContainer to='/'>
                            <Nav.Link>
                                <i className='mr-1 fab fa-react' />
                                CREATIVE TIM
                            </Nav.Link>
                        </LinkContainer>
                    </Card.Header>
                </Card>
            </Accordion>
        </>
    )
}

export default Header
