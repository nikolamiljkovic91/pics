import * as actionTypes from '../actions/actionTypes'

const initialState = {
    searchText: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FILTER_DATA:
            return{
                ...state,
                searchText: action.data
            }
        default:
            return state
    }
}

export default reducer