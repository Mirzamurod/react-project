import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { Container } from 'react-bootstrap'
import LoginHeader from '../components/LoginHeader'
import App from '../App'
import Dashboard from './../screens/Dashboard'
import Pricing from './../screens/Pricing'
import Lock from './../screens/Lock'
import Registor from './../screens/Registor'

const Login = () => {
    return (
        <Router>
            <LoginHeader />
            <main>
                <Container>
                    <Switch>
                        <Route path='/' exact component={App} />
                        <Route path='/dashboard-page' exact component={Dashboard} />
                        <Route path='/pricing-page' exact component={Pricing} />
                        <Route path='/registor-page' exact component={Registor} />
                        {/* <Route path="/login-page" exact component={ Login } /> */}
                        <Route path='/lock-page' exact component={Lock} />
                    </Switch>
                </Container>
            </main>
        </Router>
    )
}

export default Login
