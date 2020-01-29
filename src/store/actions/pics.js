import * as actionTypes from './actionTypes'
import axios from 'axios'

const URL = 'https://picsum.photos/v2/list'

export const fetchPicsStart = () => {
    return{
        type: actionTypes.FETCH_PICS_START
    }
}

export const fetchPicsFail = (error) => {
    return{
        type: actionTypes.FETCH_PICS_FAIL,
        error: error
    }
}

export const fetchPicsSuccess = (data) => {
    return{
        type: actionTypes.FETCH_PICS_SUCCESS,
        data: data
    }
}

export const fetchPics = () => {
    return dispatch => {
        dispatch(fetchPicsStart())
        axios.get(URL)
        .then(response => {
            let arr = response.data;
            let newPos;
            let temp;

            for(let i = arr.length -1; i > 0; i--){
                newPos = Math.floor(Math.random() * (i-1));
                temp = arr[i];
                arr[i] = arr[newPos];
                arr[newPos] = temp;
            }
            dispatch(fetchPicsSuccess(arr.slice(0, 9)))
        })
        .catch(error => {
            dispatch(fetchPicsFail(error))
        })
    }
}