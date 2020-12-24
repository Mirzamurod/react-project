import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Login from './screens/Login'
import Index1 from './screens/Index1'
import Pricing from './screens/Pricing'
import Lock from './screens/Lock'
import Registor from './screens/Registor'
import Timeline from './screens/Timeline'

const App = () => {
    return (
        <Router>
            <div className='d-f'>
                <div className='mw-250'>
                    <Header />
                </div>
                <div className='mw-750'>
                    <main>
                        <Route path='/' component={Index1} exact />
                        <Route path='/login-page' component={Login} exact />
                        <Route path='/lock-page' component={Lock} exact />
                        <Route path='/pricing-page' component={Pricing} exact />
                        <Route path='/registor-page' component={ Registor } exact />
                        <Route path='/timeline-page' component={ Timeline } exact />
                    </main>
                </div>
            </div>
        </Router>
    )
}

export default App
