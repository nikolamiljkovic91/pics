import * as actionTypes from './actionTypes'

export const searchData = (data) => {
    return{
        type: actionTypes.FILTER_DATA,
        data: data
    }
}

export const filterData = (data) => {
    return dispatch => {
        dispatch(searchData(data))
    }
}