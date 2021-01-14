import React, { useEffect, useState } from 'react'
import {} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Button, FormControl, InputAdornment, InputLabel, Input, Grid } from '@material-ui/core'
import FaceIcon from '@material-ui/icons/Face'
import EmailIcon from '@material-ui/icons/Email'
import LockIcon from '@material-ui/icons/Lock'
import { Link } from 'react-router-dom'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { login } from '../actions/userActions'
import './../css/login.css'

const Login = ({ location, history }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const { loading, error, userInfo } = userLogin

    const redirect = location.search ? location.search.split('=')[1] : '/'

    useEffect(() => {
        if (userInfo) {
            history.push(redirect)
        }
    }, [history, userInfo, redirect])

    const submitHandler = e => {
        e.preventDefault()
        dispatch(login(email, password))
    }

    return (
        <main>
            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader />}
            <Grid container direction='row' justify='center' alignItems='center'>
                <form onSubmit={submitHandler}>
                    <div className='center-login'>
                        <div className='regicon'>
                            <p className='ts'>Log in</p>
                            <div className='text-center'>
                                <Button className='is' color='secondary'>
                                    <i className='fab fa-facebook-square' />
                                </Button>
                                <Button className='is' color='secondary'>
                                    <i className='fab fa-twitter' />
                                </Button>
                                <Button className='is' color='secondary'>
                                    <i className='fab fa-google-plus' />
                                </Button>
                            </div>
                        </div>
                        <div className='nep'>
                            <div className='liwh'>
                                <FormControl color='secondary' controlId='name'>
                                    <InputLabel htmlFor='firstname'>First Name...</InputLabel>
                                    <Input
                                        type='name'
                                        id='name'
                                        // name='name'
                                        value={name}
                                        onChange={e => setName(e.target.value)}
                                        endAdornment={
                                            <InputAdornment position='end'>
                                                <FaceIcon />
                                            </InputAdornment>
                                        }
                                    />
                                </FormControl>
                            </div>
                            <div className='liwh'>
                                <FormControl color='secondary' controlId='email'>
                                    <InputLabel htmlFor='email'>Email</InputLabel>
                                    <Input
                                        type='email'
                                        id='email'
                                        // name='email'
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        endAdornment={
                                            <InputAdornment position='end'>
                                                <EmailIcon />
                                            </InputAdornment>
                                        }
                                    />
                                </FormControl>
                            </div>
                            <div className='liwh'>
                                <FormControl color='secondary' controlId='password'>
                                    <InputLabel htmlFor='password'>Password</InputLabel>
                                    <Input
                                        type='password'
                                        // id='password'
                                        // name='password'
                                        onChange={e => setPassword(e.target.value)}
                                        endAdornment={
                                            <InputAdornment position='end'>
                                                <LockIcon />
                                            </InputAdornment>
                                        }
                                    />
                                </FormControl>
                            </div>
                        </div>
                        <div>
                            <Button
                                type='submit'
                                color='secondary'
                                className='btn-block btns text-center'
                            >
                                Let's Go
                            </Button>
                        </div>
                        <div className='text-black text-center'>
                            New Customer?{' '}
                            <Link to={redirect ? `/register-page?redirect=${redirect}` : '/register-page'}>
                                Register
                            </Link>
                        </div>
                    </div>
                </form>
            </Grid>
        </main>
    )
}

export default Login
