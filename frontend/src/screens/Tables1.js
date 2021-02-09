import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Navbar1 from '../components/Navbar1'
import Loader from '../components/Loader'
import Message from '../components/Message'
import './../css/bronqilish.css'
import './../css/tables1.css'
import { deleteTable, listTable } from '../actions/tableActions'
import { Link } from 'react-router-dom'
import { IconButton } from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'

const Tables1 = ({ history }) => {
    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const tableList = useSelector(state => state.tableList)
    const { loading, tables, error } = tableList

    const tableDelete = useSelector(state => state.tableDelete)
    const { success: successDelete } = tableDelete

    useEffect(() => {
        if (userInfo) {
            dispatch(listTable())
        } else {
            history.push('/login')
        }
    }, [dispatch, history, userInfo, successDelete])

    const deleteHandler = id => {
        if (window.confirm('Ishonchingiz komilmi')) {
            dispatch(deleteTable(id))
        }
    }

    return (
        <div>
            <div className='navbar1'>
                <Navbar1 />
            </div>
            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant='danger'>{error}</Message>
            ) : (
                <div className='tables1'>
                    <TableContainer>
                        <Table aria-label='simple table'>
                            <TableHead>
                                <TableRow>
                                    <TableCell align='left'>
                                        MAS'UL DEPARTAMENT yoki ORGAN
                                    </TableCell>
                                    <TableCell align='center '>SPIKER</TableCell>
                                    <TableCell align='center'>TAKLIF ETILGANLAR</TableCell>
                                    <TableCell align='center'>BOSHLANISH VAQTI</TableCell>
                                    <TableCell align='center'>TUGASH VAQTI</TableCell>
                                    <TableCell align='center'>STATUS</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {tables.map(table => (
                                    <TableRow key={table._id}>
                                        <TableCell align='left'>{table.masul}</TableCell>
                                        <TableCell align='center'>{table.sT}</TableCell>
                                        <TableCell align='center'>
                                            {table.tE}
                                        </TableCell>
                                        <TableCell align='center'>{table.bV}</TableCell>
                                        <TableCell align='center'>{table.tV}</TableCell>
                                        <TableCell align='center'>
                                            <Link to={`/dashboard/table/${table._id}/edit`}>
                                                <IconButton>
                                                    <EditIcon />
                                                </IconButton>
                                            </Link>
                                            <IconButton onClick={() => deleteHandler(table._id)}>
                                                <DeleteIcon />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            )}
        </div>
    )
}

// Tables1.protoType = {
//     konferensTuri: PropTypes.string.isRequired,
//     masullar: PropTypes.string.isRequired,
//     taklifEtilganlar: PropTypes.string.isRequired,
//     yonalish: PropTypes.string.isRequired,
//     qatnashadi: PropTypes.string.isRequired,
//     spiker: PropTypes.string.isRequired,
//     startTime: PropTypes.string.isRequired,
//     endTime: PropTypes.string.isRequired,
// }

export default Tables1
