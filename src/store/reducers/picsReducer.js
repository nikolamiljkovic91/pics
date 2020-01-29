import * as actionTypes from '../actions/actionTypes'

const initialState = {
    pics: [],
    loading: false,
    error: false
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_PICS_START:
            return{
                ...state,
                loading: true
            }
        case actionTypes.FETCH_PICS_SUCCESS:
            return{
                ...state,
                pics: action.data,
                loading: false,
            }
        case actionTypes.FETCH_PICS_FAIL:
            return{
                ...state,
                loading: false,
                error: false
            }
        default:
            return state
    }
}

export default reducer