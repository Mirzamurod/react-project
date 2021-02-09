import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import { Button, Checkbox, FormControlLabel, FormGroup } from '@material-ui/core'
import { NavLink } from 'react-router-dom'
import Autocomplete from '@material-ui/lab/Autocomplete'
import Navbar from '../components/Navbar1'
import { createTable } from '../actions/tableActions'
import Tables1 from './Tables1'
import './../css/bronqilish.css'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        boxShadow: 'none',
        backgroundColor: 'transparent',
    },
}))

const BronQilish = ({ history }) => {
    const dispatch = useDispatch()

    const classes = useStyles()

    const [konf, setKonf] = useState('')
    const [masul, setMasul] = useState('')
    const [tE, setTe] = useState('')
    const [bV, setBv] = useState('')
    const [yT, setYt] = useState('')
    const [iJQ, setIjq] = useState('')
    const [tV, setTv] = useState('')
    const [sT, setSt] = useState('')
    const [checkedA, setCheckedA] = useState(true)
    const [checkedB, setCheckedB] = useState(true)
    const [checkedD, setCheckedD] = useState(false)

    const submitHandler = e => {
        e.preventDefault()
        dispatch(createTable({ konf, masul, tE, bV, yT, iJQ, tV, sT }))
        history.push('/dashboard/tables')
    }

    return (
        <div>
            <div className='navbar1'>
                <Navbar />
            </div>
            <div className='bronqilish'>
                <div className=''>
                    <h3>Konferens zalni bron qilish</h3>
                    <from onSubmit={submitHandler}>
                        <Grid container spacing={3}>
                            <Grid item xs={3} className='b-grid'>
                                <Paper className={classes.paper}>
                                    <Autocomplete
                                        id='konferensTuri'
                                        freeSolo
                                        options={konferensTuri.map(option => option.title)}
                                        value={konf}
                                        style={{ width: 325 }}
                                        renderInput={params => (
                                            <TextField
                                                {...params}
                                                label='KONFERENS TURI'
                                                variant='outlined'
                                                color='secondary'
                                            />
                                        )}
                                    />
                                </Paper>
                                <Paper className={classes.paper}>
                                    <Autocomplete
                                        id='masul'
                                        freeSolo
                                        options={masullar.map(option => option.title)}
                                        value={masul}
                                        // onChange={e => setMasul(e.target.value)}
                                        style={{ width: 325 }}
                                        renderInput={params => (
                                            <TextField
                                                {...params}
                                                label="MAS'UL DEPARTAMENT yoki ORGAN"
                                                // margin='normal'
                                                variant='outlined'
                                            />
                                        )}
                                    />
                                </Paper>
                                <Paper className={classes.paper}>
                                    <Autocomplete
                                        id='taklifEtilganlar'
                                        freeSolo
                                        options={taklifEtilganlar.map(option => option.title)}
                                        value={tE}
                                        // onChange={e => setMasul(e.target.value)}
                                        style={{ width: 325 }}
                                        renderInput={params => (
                                            <TextField
                                                {...params}
                                                label='TAKLIF ETILGANLAR'
                                                // margin='normal'
                                                variant='outlined'
                                            />
                                        )}
                                    />
                                </Paper>
                            </Grid>
                            <Grid item xs={3} className='b-grid'>
                                <TextField
                                    className={`${classes.paper} b-grid-i`}
                                    style={{ width: 355 }}
                                    name='startTime'
                                    value={bV}
                                    onChange={e => setBv(e.target.value)}
                                    id='boshlashVaqti'
                                    label='BOSHLANISH VAQTI'
                                    variant='outlined'
                                    color='secondary'
                                />
                                <Paper className={classes.paper}>
                                    <Autocomplete
                                        id='yonalishniTanlang'
                                        freeSolo
                                        options={yonalish.map(option => option.title)}
                                        value={yT}
                                        // onChange={e => setYt(e.target.value)}
                                        style={{ width: 325 }}
                                        renderInput={params => (
                                            <TextField
                                                {...params}
                                                label="YO'NALISHNI TANLANG"
                                                // margin='normal'
                                                variant='outlined'
                                            />
                                        )}
                                    />
                                </Paper>
                                <Paper className={classes.paper}>
                                    <Autocomplete
                                        id='ishJoyidanQatnashadi'
                                        freeSolo
                                        options={qatnashadi.map(option => option.title)}
                                        value={iJQ}
                                        // onChange={e => setIjq(e.target.value)}
                                        style={{ width: 325 }}
                                        renderInput={params => (
                                            <TextField
                                                {...params}
                                                label='ISH JOYIDAN QATNASHADI'
                                                // margin='normal'
                                                variant='outlined'
                                            />
                                        )}
                                    />
                                </Paper>
                            </Grid>
                            <Grid item xs={3} className='b-grid'>
                                <TextField
                                    className={`${classes.paper} b-grid-i`}
                                    style={{ width: 355 }}
                                    name='endTime'
                                    value={tV}
                                    onChange={e => setTv(e.target.value)}
                                    id='tugashVaqti'
                                    label='TUGASH VAQTI'
                                    variant='outlined'
                                    color='secondary'
                                />
                                <Paper className={classes.paper}>
                                    <Autocomplete
                                        id='spiker'
                                        freeSolo
                                        options={spiker.map(option => option.title)}
                                        value={sT}
                                        // onChange={e => setSt(e.target.value)}
                                        style={{ width: 325 }}
                                        renderInput={params => (
                                            <TextField
                                                {...params}
                                                label='SPIKER'
                                                // margin='normal'
                                                variant='outlined'
                                            />
                                        )}
                                    />
                                </Paper>
                            </Grid>
                            <Grid item xs={3} className='b-grid-4'>
                                <p>ZALNI TANLANG</p>
                                <FormGroup row>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={checkedA}
                                                onChange={e => setCheckedA(e.target.checked)}
                                                name='checkedA'
                                            />
                                        }
                                        label='3 etaj Katta majlislar zali'
                                    />
                                </FormGroup>
                                <FormGroup row>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={checkedB}
                                                onChange={e => setCheckedB(e.target.checked)}
                                                name='checkedB'
                                            />
                                        }
                                        label='3 etaj Kichik majlislar zali'
                                    />
                                </FormGroup>
                                <FormGroup row>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={checkedD}
                                                onChange={e => setCheckedD(e.target.checked)}
                                                name='checkedD'
                                            />
                                        }
                                        label='2 etak Kichik majlislar zali'
                                    />
                                </FormGroup>
                            </Grid>
                            <Grid item xs={11}>
                                <Button color='secondary' variant='outlined' className='f-right'>
                                    Submit
                                </Button>
                            </Grid>
                        </Grid>
                    </from>
                    <h4>KUN TARTIBI</h4>
                    <Grid container className='kt'>
                        <Grid item xs={9} className='b-border'>
                            <ol>
                                <li>KREDITLARNI QAYTARILISHI VA REJANI BAJARILISHI</li>
                                <li>MUAMMOLI AKTIVLAR</li>
                                <li>TOPSHIRIQLAR IJROSI</li>
                            </ol>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    )
}

const konferensTuri = [
    { title: 'CISCO' },
    { title: 'ZOOM' },
    { title: 'JOYIDA' },
    { title: 'DISCORD' },
    { title: 'TELEGRAM' },
]

const masullar = [{ title: 'SELEKT' }, { title: 'IJRO APPARATI' }]

const taklifEtilganlar = [{ title: 'MULTI SELEKT' }]

const yonalish = [{ title: 'MULTI SELEKT' }]

const qatnashadi = [{ title: 'MULTI SELEKT' }]

const spiker = [{ title: 'SELEKT' }]

// BronQilish.propTypes = {
//     addTables: PropTypes.string.isRequired,
// }

export default BronQilish
