import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Login from './screens/Login'
import Index1 from './screens/Index1'
import Pricing from './screens/Pricing'
import Lock from './screens/Lock'
import Registor from './screens/Registor'
import Timeline from './screens/Timeline'
import Calendar from './screens/Calendar'
import Charts from './screens/Charts'
import FullScreenMap from './screens/FullScreenMap'
import GoogleMaps from './screens/GoogleMaps'
import UserEditProfile from './screens/UserEditProfile'
import UserProfile from './screens/UserProfile'
import UserProfileSettings from './screens/UserProfileSettings'
import VectorMap from './screens/VectorMap'
import Widgets from './screens/Widgets'
import Error from './screens/Error'

const App = () => {
    return (
        <Router>
            <div className='d-f'>
                <div className='mw-250'>
                    <Header />
                </div>
                <div className='mw-750'>
                    <main>
                        <Switch>
                            <Route path='/' component={Index1} exact />
                            <Route path='/login-page' component={Login} exact />
                            <Route path='/lock-page' component={Lock} exact />
                            <Route path='/pricing-page' component={Pricing} exact />
                            <Route path='/registor-page' component={Registor} exact />
                            <Route path='/timeline-page' component={Timeline} exact />
                            <Route path='/calendar' component={Calendar} exact />
                            <Route path='/charts' component={Charts} exact />
                            <Route path='/full-screen-map' component={FullScreenMap} exact />
                            <Route path='/google-maps' component={GoogleMaps} exact />
                            <Route path='/user-edit-profile' component={UserEditProfile} exact />
                            <Route path='/user-profile' component={UserProfile} exact />
                            <Route path='/user-profile-settings' component={UserProfileSettings} exact />
                            <Route path='/vector-map' component={VectorMap} exact />
                            <Route path='/widgets' component={Widgets} exact />
                            <Route component={ Error } />
                        </Switch>
                    </main>
                </div>
            </div>
        </Router>
    )
}

export default App
