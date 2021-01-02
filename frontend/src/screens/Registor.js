import React from 'react'
import {
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    Grid,
    Input,
    InputAdornment,
    Link,
} from '@material-ui/core'
import EqualizerIcon from '@material-ui/icons/Equalizer'
import CodeIcon from '@material-ui/icons/Code'
import GroupIcon from '@material-ui/icons/Group'
import FaceIcon from '@material-ui/icons/Face'
import EmailIcon from '@material-ui/icons/Email'
import LockIcon from '@material-ui/icons/Lock'
import './../css/registor.css'
import { LinkContainer } from 'react-router-bootstrap'

const Registor = () => {
    return (
        <>
            <Grid
                container
                // direction='row'
                // justify='center'
                // alignItems='center'
                className='registor-size'
            >
                <Grid item xs={12}>
                    <h2 className='text-center tr color'>Registor</h2>
                </Grid>
                <Grid item xs={6} className='px-l'>
                    <div className='d-f mb-40'>
                        <div className='l-3'>
                            <EqualizerIcon className='iconsize' />
                        </div>
                        <div className='r-7'>
                            <h4 className='color'>Marketing</h4>
                            <p className='color-p'>
                                We've created the marketing campaign of the website. It was a very
                                interesting collaboration.
                            </p>
                        </div>
                    </div>
                    <div className='d-f mb-40'>
                        <div className='l-3'>
                            <CodeIcon className='iconsize' />
                        </div>
                        <div className='r-7'>
                            <h4 className='color'>Fully Coded in HTML5</h4>
                            <p className='color-p'>
                                We've developed the website with HTML5 and CSS3. The client has
                                access to the code using GitHub.
                            </p>
                        </div>
                    </div>
                    <div className='d-f mb-40'>
                        <div className='l-3'>
                            <GroupIcon className='iconsize' />
                        </div>
                        <div className='r-7'>
                            <h4 className='color'>Built Audience</h4>
                            <p className='color-p'>
                                There is also a Fully Customizable CMS Admin Dashboard for this
                                product.
                            </p>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={6} className='px-r'>
                    <form method='POST' action='/registor-page'>
                        <div className='tdf text-center'>
                            <Button className='ct' variant='contained'>
                                <i class='fab fa-twitter ic' />
                            </Button>
                            <Button className='cd' variant='contained'>
                                <i class='fab fa-dribbble ic' />
                            </Button>
                            <Button className='cf' variant='contained'>
                                <i class='fab fa-facebook-f ic' />
                            </Button>
                            <h4>or be classical</h4>
                        </div>
                        <div className='riwh'>
                            <FormControl color='secondary'>
                                <Input
                                    type='text'
                                    id='firstname'
                                    placeholder='First Name...'
                                    name='name'
                                    startAdornment={
                                        <InputAdornment position='start'>
                                            <FaceIcon />
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                        </div>
                        <div className='riwh'>
                            <FormControl color='secondary'>
                                <Input
                                    type='email'
                                    id='email'
                                    placeholder='Email...'
                                    name='email'
                                    startAdornment={
                                        <InputAdornment position='start'>
                                            <EmailIcon />
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                        </div>
                        <div className='riwh'>
                            <FormControl color='secondary'>
                                <Input
                                    type='password'
                                    id='password'
                                    placeholder='Password...'
                                    name='password'
                                    startAdornment={
                                        <InputAdornment position='start'>
                                            <LockIcon />
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                        </div>
                        <div className='rcheckbox'>
                            {/* <Checkbox
                                defaultChecked
                                color='default'
                                inputProps={{ 'aria-label': 'checkbox with default color' }}
                            /> */}
                            <FormControlLabel
                                className='color rmt-18'
                                control={
                                    <Checkbox
                                        // defaultChecked
                                        color='secondary'
                                        // name='checkedC'
                                    />
                                }
                                label={'I agree to the'}
                            />
                            <LinkContainer to='/404'>
                                <Link color='secondary'>terms and conditions</Link>
                            </LinkContainer>
                        </div>
                        <div className='text-center'>
                            <Button className='btnbgc' variant='contained' type='submit'>
                                GET STARTED
                            </Button>
                        </div>
                    </form>
                </Grid>
            </Grid>
        </>
    )
}

export default Registor
