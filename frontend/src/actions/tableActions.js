import axios from 'axios'
import {
    TABLE_CREATE_FAIL,
    TABLE_CREATE_REQUEST,
    TABLE_CREATE_SUCCESS,
    TABLE_DELETE_FAIL,
    TABLE_DELETE_REQUEST,
    TABLE_DELETE_SUCCESS,
    TABLE_LIST_FAIL,
    TABLE_LIST_REQUEST,
    TABLE_LIST_SUCCESS,
    TABLE_UPDATE_FAIL,
    TABLE_UPDATE_REQUEST,
    TABLE_UPDATE_SUCCESS,
} from '../constants/tableConstant'
import { logout } from './userActions'

export const listTable = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: TABLE_LIST_REQUEST,
        })

        const {
            userLogin: { userInfo }
        } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.get(`/api/tables`, config)

        dispatch({
            type: TABLE_LIST_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: TABLE_LIST_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

export const createTable = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: TABLE_CREATE_REQUEST,
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        }

        const { data } = await axios.post('/api/tables', {}, config)

        dispatch({
            type: TABLE_CREATE_SUCCESS,
            payload: data,
        })
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        if (message === 'Not authorized, token failed') {
            dispatch(logout())
        }
        dispatch({
            type: TABLE_CREATE_FAIL,
            payload: message,
        })
    }
}

export const updateTable = table => async (dispatch, getState) => {
    try {
        dispatch({
            type: TABLE_UPDATE_REQUEST,
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`,
            },
        }

        const { data } = await axios.put(`/api/tables/${table._id}`, table, config)

        dispatch({
            type: TABLE_UPDATE_SUCCESS,
            payload: data,
        })
        // dispatch({ type:  })
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message

        if (message === 'Not authorized, token failed') {
            dispatch(logout())
        }
        dispatch({
            type: TABLE_UPDATE_FAIL,
            payload: message,
        })
    }
}

export const deleteTable = id => async (dispatch, getState) => {
    try {
        dispatch({
            type: TABLE_DELETE_REQUEST,
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        }

        await axios.delete(`/api/tables/${id}`, config)

        dispatch({
            type: TABLE_DELETE_SUCCESS,
        })
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message

        if (message === 'Not authorized, token failed') {
            dispatch(logout())
        }
        dispatch({
            type: TABLE_DELETE_FAIL,
            payload: message,
        })
    }
}
