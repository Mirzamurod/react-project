import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Login from './screens/Login'

const App = () => {
    return (
        <Router>
            <Route path='/login' component={ Login } exact />
            <Route path="/" component={ Header } exact />
        </Router>
    )
}

export default App
