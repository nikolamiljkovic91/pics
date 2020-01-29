import React, { useState } from 'react'
import classes from './Search.module.scss'
import { connect } from 'react-redux'
import * as actions from '../../../store/actions/index'

const Search = (props) => {
    const[inputText, setInputText] = useState('')


    let inputHandler = (event) => {
        event.preventDefault()
        setInputText(event.target.value)
    }
    let submitHandler = (event) => {
        if(event.key === 'Enter'){
            props.onFilterData(inputText)
        }
    }

    return (
        <div className={classes.Search}>
            <input type='text' onChange={inputHandler} value={inputText} onKeyPress={submitHandler} placeholder='Search for author, height or width'/>
            <button onClick={() => props.onFilterData(inputText)}>Search</button>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return{
        onFilterData: (text) => dispatch(actions.filterData(text))
    }
}

export default connect(null, mapDispatchToProps)(Search)
