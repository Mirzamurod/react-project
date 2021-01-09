import React from 'react'
import {
    Button,
    FormControl,
    InputAdornment,
    InputLabel,
    Input,
    Grid,
} from '@material-ui/core'
import FaceIcon from '@material-ui/icons/Face'
import EmailIcon from '@material-ui/icons/Email'
import LockIcon from '@material-ui/icons/Lock'
import { LinkContainer } from 'react-router-bootstrap'
import './../css/login.css'

const Login = () => {
    return (
        <main>
            <Grid container direction='row' justify='center' alignItems='center'>
                <form action='/login-page'>
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
                                    <LinkContainer to='/auth/google'>
                                        <i className='fab fa-google-plus' />
                                    </LinkContainer>
                                </Button>
                            </div>
                        </div>
                        <div className='nep'>
                            <div className='liwh'>
                                <FormControl color='secondary'>
                                    <InputLabel htmlFor='firstname'>First Name...</InputLabel>
                                    <Input
                                        id='firstname'
                                        name='username'
                                        endAdornment={
                                            <InputAdornment position='end'>
                                                <FaceIcon />
                                            </InputAdornment>
                                        }
                                    />
                                </FormControl>
                            </div>
                            <div className='liwh'>
                                <FormControl color='secondary'>
                                    <InputLabel htmlFor='email'>Email</InputLabel>
                                    <Input
                                        type='email'
                                        id='email'
                                        name='email'
                                        endAdornment={
                                            <InputAdornment position='end'>
                                                <EmailIcon />
                                            </InputAdornment>
                                        }
                                    />
                                </FormControl>
                            </div>
                            <div className='liwh'>
                                <FormControl color='secondary'>
                                    <InputLabel htmlFor='password'>Password</InputLabel>
                                    <Input
                                        type='password'
                                        id='password'
                                        name='password'
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
                    </div>
                </form>
            </Grid>
        </main>
    )
}

export default Login
