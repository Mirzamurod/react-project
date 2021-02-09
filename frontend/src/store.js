import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
    userDetailsReducer,
    userLoginReducer,
    userRegisterReducer,
    userUpdateProfileReducer,
} from './reducers/userReducers'
import {
    createTableReducer,
    tableDeleteReducer,
    tableListReducer,
    tableUpdateReducer,
} from './reducers/tableReducer'

const reducer = combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    tableList: tableListReducer,
    createTable: createTableReducer,
    tableUpdate: tableUpdateReducer,
    tableDelete: tableDeleteReducer,
})

const userInfoFromStorage = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null

const createTableFromStroge = localStorage.getItem('createTable')
    ? JSON.parse(localStorage.getItem('createTable'))
    : {}

const initialState = {
    table: { createTable: createTableFromStroge },
    userLogin: { userInfo: userInfoFromStorage },
}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)
console.log(store.getState())

export default store
