import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Index1 from './screens/Index1'
import BronQilish from './screens/BronQilish'
import Lock from './screens/Lock'
import Pricing from './screens/Pricing'
import Tables1 from './screens/Tables1'
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
import './App.css'

const Dashboard = ({ match }) => {
    return (
        <Router>
            <div className='d-f'>
                <div className='mw-250'>
                    <Header />
                </div>
                <div className='mw-750'>
                    <main>
                        <Switch>
                            <Route path={`${match.path}/`} component={Index1} exact />
                            <Route path={`${match.path}/lock`} component={Lock} exact />
                            <Route path={`${match.path}/pricing`} component={Pricing} exact />
                            <Route path={`${match.path}/timeline`} component={Timeline} exact />
                            <Route path={`${match.path}/bronqilish`} component={BronQilish} exact />
                            <Route path={`${match.path}/tables`} component={Tables1} exact />
                            <Route path={`${match.path}/calendar`} component={Calendar} exact />
                            <Route path={`${match.path}/charts`} component={Charts} exact />
                            <Route
                                path={`${match.path}/full-screen-map`}
                                component={FullScreenMap}
                                exact
                            />
                            <Route
                                path={`${match.path}/google-maps`}
                                component={GoogleMaps}
                                exact
                            />
                            <Route
                                path={`${match.path}/user-edit-profile`}
                                component={UserEditProfile}
                                exact
                            />
                            <Route
                                path={`${match.path}/user-profile`}
                                component={UserProfile}
                                exact
                            />
                            <Route
                                path={`${match.path}/user-profile-settings`}
                                component={UserProfileSettings}
                                exact
                            />
                            <Route path={`${match.path}/vector-map`} component={VectorMap} exact />
                            <Route path={`${match.path}/widgets`} component={Widgets} exact />
                            <Route exact component={Error} />
                        </Switch>
                    </main>
                </div>
            </div>
        </Router>
    )
}

export default Dashboard
