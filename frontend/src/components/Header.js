import React from 'react'
import MuiAccordion from '@material-ui/core/Accordion'
import MuiAccordionSummary from '@material-ui/core/AccordionSummary'
import MuiAccordionDetails from '@material-ui/core/AccordionDetails'
import { withStyles } from '@material-ui/core/styles'
import { Link, Typography } from '@material-ui/core'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { LinkContainer } from 'react-router-bootstrap'

const Accordion = withStyles({
    root: {
        border: '1px solid rgba(0, 0, 0, .125)',
        boxShadow: 'none',
        '&:not(:last-child)': {
            borderBottom: 0,
        },
        '&:before': {
            display: 'none',
        },
        '&$expanded': {
            margin: 'auto',
        },
    },
    expanded: {},
})(MuiAccordion)

const AccordionSummary = withStyles({
    root: {
        backgroundColor: 'rgba(0, 0, 0, .03)',
        borderBottom: '1px solid rgba(0, 0, 0, .125)',
        marginBottom: -1,
        minHeight: 56,
        '&$expanded': {
            minHeight: 56,
        },
    },
    content: {
        '&$expanded': {
            margin: '12px 0',
        },
    },
    expanded: {},
})(MuiAccordionSummary)

const AccordionDetails = withStyles(theme => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiAccordionDetails)

const Header = () => {
    const [expanded, setExpanded] = React.useState(false)

    const handleChange = panel => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false)
    }

    return (
        <>
            <div>
                {/* CREATIVE TIM */}
                <Accordion className='bgct'>
                    <AccordionDetails>
                        <Typography>
                            <LinkContainer to='/'>
                                <Link>
                                <span className='iconsvg whitelogo' />
                                    CREATIVE TIM
                                </Link>
                            </LinkContainer>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                {/* User */}
                <Accordion className='bgct'
                    expanded={expanded === 'panel1'}
                    onChange={handleChange('panel1')}
                >
                    <AccordionSummary
                        expandIcon={<ArrowDropDownIcon />}
                        aria-controls='panel1bh-content'
                        id='panel1bh-header'
                    >
                        <Typography className=''>User Name</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <LinkContainer to='/user-profile'>
                                <Link>My Profile</Link>
                            </LinkContainer>
                        </Typography>
                    </AccordionDetails>
                    <AccordionDetails>
                        <Typography>
                            <LinkContainer to='/user-edit-profile'>
                                <Link>Edit Profile</Link>
                            </LinkContainer>
                        </Typography>
                    </AccordionDetails>
                    <AccordionDetails>
                        <Typography>
                            <LinkContainer to='/user-profile-settings'>
                                <Link>Settings</Link>
                            </LinkContainer>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                {/* Dashboard */}
                <Accordion className='bgct'>
                    <AccordionDetails>
                        <Typography>
                            <LinkContainer to='/'>
                                <Link>Dashboard</Link>
                            </LinkContainer>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                {/* Pages */}
                <Accordion className='bgct'
                    expanded={expanded === 'panel2'}
                    onChange={handleChange('panel2')}
                    color='secondary'
                >
                    <AccordionSummary
                        expandIcon={<ArrowDropDownIcon />}
                        aria-controls='panel2bh-content'
                        id='panel2bh-header'
                    >
                        <Typography className=''>
                            Pages
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <LinkContainer to='/pricing-page'>
                                <Link>Pricing Page</Link>
                            </LinkContainer>
                        </Typography>
                    </AccordionDetails>
                    <AccordionDetails>
                        <Typography>
                            <LinkContainer to='/timeline-page'>
                                <Link>Timeline Page</Link>
                            </LinkContainer>
                        </Typography>
                    </AccordionDetails>
                    <AccordionDetails>
                        <Typography>
                            <LinkContainer to='/login-page'>
                                <Link>Login Page</Link>
                            </LinkContainer>
                        </Typography>
                    </AccordionDetails>
                    <AccordionDetails>
                        <Typography>
                            <LinkContainer to='/register-page'>
                                <Link>Register Page</Link>
                            </LinkContainer>
                        </Typography>
                    </AccordionDetails>
                    <AccordionDetails>
                        <Typography>
                            <LinkContainer to='/lock-page'>
                                <Link>Lock Screen Page</Link>
                            </LinkContainer>
                        </Typography>
                    </AccordionDetails>
                    <AccordionDetails>
                        <Typography>
                            <LinkContainer to='/user-profile'>
                                <Link>User Profile</Link>
                            </LinkContainer>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                {/* Maps */}
                <Accordion className='bgct'
                    expanded={expanded === 'panel3'}
                    onChange={handleChange('panel3')}
                >
                    <AccordionSummary
                        expandIcon={<ArrowDropDownIcon />}
                        aria-controls='panel3bh-content'
                        id='panel3bh-header'
                    >
                        <Typography className=''>Maps</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <LinkContainer to='/google-maps'>
                                <Link>Google Maps</Link>
                            </LinkContainer>
                        </Typography>
                    </AccordionDetails>
                    <AccordionDetails>
                        <Typography>
                            <LinkContainer to='/full-screen-map'>
                                <Link>Full Screen Map</Link>
                            </LinkContainer>
                        </Typography>
                    </AccordionDetails>
                    <AccordionDetails>
                        <Typography>
                            <LinkContainer to='/vector-map'>
                                <Link>Vector Map</Link>
                            </LinkContainer>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                {/* Widgets */}
                <Accordion className='bgct'>
                    <AccordionDetails>
                        <Typography>
                            <LinkContainer to='/widgets'>
                                <Link>Widgets</Link>
                            </LinkContainer>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                {/* Charts */}
                <Accordion className='bgct'>
                    <AccordionDetails>
                        <Typography>
                            <LinkContainer to='/charts'>
                                <Link>Charts</Link>
                            </LinkContainer>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                {/* Calendar */}
                <Accordion className='bgct'>
                <AccordionDetails>
                    <Typography>
                        <LinkContainer to='/calendar'>
                            <Link>Calendar</Link>
                        </LinkContainer>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            </div>
        </>
    )
}

export default Header
