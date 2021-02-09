import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MuiAccordion from '@material-ui/core/Accordion'
import MuiAccordionSummary from '@material-ui/core/AccordionSummary'
import MuiAccordionDetails from '@material-ui/core/AccordionDetails'
import { withStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import { Link } from 'react-router-dom'
import { logout } from '../actions/userActions'

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

    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const logoutHandler = () => {
        dispatch(logout())
    }

    return (
        <>
            <div>
                {/* CREATIVE TIM */}
                <Accordion className='bgct'>
                    <AccordionDetails>
                        <Typography>
                            <Link to='/dashboard'>
                                <p>
                                    <span className='iconsvg whitelogo' />
                                    CREATIVE TIM
                                </p>
                            </Link>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                {/* User */}
                {userInfo ? (
                    <Accordion
                        className='bgct'
                        expanded={expanded === 'panel1'}
                        onChange={handleChange('panel1')}
                    >
                        <AccordionSummary
                            expandIcon={<ArrowDropDownIcon />}
                            aria-controls='panel1bh-content'
                            id='panel1bh-header'
                        >
                            <Typography className=''>{userInfo.name}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <Link to='/dashboard/user-profile'>
                                    <p>My Profile</p>
                                </Link>
                            </Typography>
                        </AccordionDetails>
                        <AccordionDetails>
                            <Typography>
                                <Link to='/dashboard/user-edit-profile'>
                                    <p>Edit Profile</p>
                                </Link>
                            </Typography>
                        </AccordionDetails>
                        <AccordionDetails>
                            <Typography>
                                <Link to='/user-profile-settings'>
                                    <p>Settings</p>
                                </Link>
                            </Typography>
                        </AccordionDetails>
                        <AccordionDetails>
                            <Typography>
                                <Link to='/login'>
                                    <p onClick={logoutHandler} className='cursor-p'>
                                        Logout
                                    </p>
                                </Link>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                ) : (
                    <Accordion
                        className='bgct'
                        expanded={expanded === 'panel1'}
                        onChange={handleChange('panel1')}
                    >
                        <AccordionDetails>
                            <Typography>
                                <Link to='/login'>
                                    <p>Sign In</p>
                                </Link>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                )}
                {/* Dashboard */}
                <Accordion className='bgct'>
                    <AccordionDetails>
                        <Typography>
                            <Link to='/dashboard'>
                                <p>Dashboard</p>
                            </Link>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                {/* Pages */}
                <Accordion
                    className='bgct'
                    expanded={expanded === 'panel2'}
                    onChange={handleChange('panel2')}
                    color='secondary'
                >
                    <AccordionSummary
                        expandIcon={<ArrowDropDownIcon />}
                        aria-controls='panel2bh-content'
                        id='panel2bh-header'
                    >
                        <Typography className=''>Pages</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <Link to='/dashboard/pricing'>
                                <p>Pricing Page</p>
                            </Link>
                        </Typography>
                    </AccordionDetails>
                    <AccordionDetails>
                        <Typography>
                            <Link to='/dashboard/timeline'>
                                <p>Timeline Page</p>
                            </Link>
                        </Typography>
                    </AccordionDetails>
                    <AccordionDetails>
                        <Typography>
                            <Link to='/dashboard/bronqilish'>
                                <p>Konferensiya zalini bron qilish</p>
                            </Link>
                        </Typography>
                    </AccordionDetails>
                    <AccordionDetails>
                        <Typography>
                            <Link to='/dashboard/tables'>
                                <p>Tables</p>
                            </Link>
                        </Typography>
                    </AccordionDetails>
                    <AccordionDetails>
                        <Typography>
                            <Link to='/dashboard/lock'>
                                <p>Lock Screen Page</p>
                            </Link>
                        </Typography>
                    </AccordionDetails>
                    <AccordionDetails>
                        <Typography>
                            <Link to='/dashboard/user-profile'>
                                <p>User Profile</p>
                            </Link>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                {/* Maps */}
                <Accordion
                    className='bgct'
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
                            <Link to='/dashboard/google-maps'>
                                <p>Google Maps</p>
                            </Link>
                        </Typography>
                    </AccordionDetails>
                    <AccordionDetails>
                        <Typography>
                            <Link to='/dashboard/full-screen-map'>
                                <p>Full Screen Map</p>
                            </Link>
                        </Typography>
                    </AccordionDetails>
                    <AccordionDetails>
                        <Typography>
                            <Link to='/dashboard/vector-map'>
                                <p>Vector Map</p>
                            </Link>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                {/* Widgets */}
                <Accordion className='bgct'>
                    <AccordionDetails>
                        <Typography>
                            <Link to='/dashboard/widgets'>
                                <p>Widgets</p>
                            </Link>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                {/* Charts */}
                <Accordion className='bgct'>
                    <AccordionDetails>
                        <Typography>
                            <Link to='/dashboard/charts'>
                                <p>Charts</p>
                            </Link>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                {/* Calendar */}
                <Accordion className='bgct'>
                    <AccordionDetails>
                        <Typography>
                            <Link to='/dashboard/calendar'>
                                <p>Calendar</p>
                            </Link>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        </>
    )
}

export default Header
