import { combineReducers } from 'redux'
import picsReducer from './picsReducer'
import searchReducer from './searchReducer'

export default combineReducers({
    pics: picsReducer,
    search: searchReducer
})
