import {
    TABLE_CREATE_FAIL,
    TABLE_CREATE_REQUEST,
    TABLE_CREATE_SUCCESS,
    TABLE_UPDATE_FAIL,
    TABLE_UPDATE_REQUEST,
    TABLE_UPDATE_SUCCESS,
    TABLE_RESET,
    TABLE_DELETE_REQUEST,
    TABLE_DELETE_SUCCESS,
    TABLE_DELETE_FAIL,
    TABLE_LIST_REQUEST,
    TABLE_LIST_SUCCESS,
    TABLE_LIST_FAIL,
} from '../constants/tableConstant'

export const tableListReducer = (state = { tables: [] }, action) => {
    switch (action.type) {
        case TABLE_LIST_REQUEST:
            return { loading: true, tables: [] }
        case TABLE_LIST_SUCCESS:
            return { loading: false, tables: action.payload.tables }
        case TABLE_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const createTableReducer = (state = {}, action) => {
    switch (action.type) {
        case TABLE_CREATE_REQUEST:
            return { loading: true }
        case TABLE_CREATE_SUCCESS:
            return { loading: false, success: true, table: action.payload }
        case TABLE_CREATE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const tableUpdateReducer = (state = { table: {} }, action) => {
    switch (action.type) {
        case TABLE_UPDATE_REQUEST:
            return { loading: true }
        case TABLE_UPDATE_SUCCESS:
            return { loading: false, success: true, table: action.payload }
        case TABLE_UPDATE_FAIL:
            return { loading: false, error: action.payload }
        case TABLE_RESET:
            return { table: {} }
        default:
            return state
    }
}

export const tableDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case TABLE_DELETE_REQUEST:
            return { loading: true }
        case TABLE_DELETE_SUCCESS:
            return { loading: false, success: true }
        case TABLE_DELETE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}