import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom'
import Login from './screens/Login'
import Dashboard from './dashboard'
import Register from './screens/Register'

const App = () => {
    const [isAuth, setIsAuth] = useState(null)
    useEffect(() => {
        const token = localStorage.getItem('userInfo')
        setIsAuth(token)
    }, [setIsAuth])
    // console.log(isAuth)
    return (
        <Router>
            {isAuth ? (
                <main>
                    <Route path={'/dashboard'} component={Dashboard} exact />
                </main>
            ) : (
                <main>
                    <Route path='/login' component={Login} exact />
                    <Route path='/register' component={Register} exact />
                </main>
            )}
            <Redirect to={isAuth ? '/dashboard' : '/login'} />
        </Router>
    )
}

export default App
