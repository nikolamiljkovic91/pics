import React from 'react'
import classes from './Title.module.scss'

const Title = (props) => {

    return (
        <>
        <div className={classes.ButtonsWrapper}>
                <h2>{props.title}</h2>
                <div className={classes.Buttons}>
                    <div>
                        <button onClick={() => props.view('list')}>List</button>
                        <button onClick={() => props.view('grid')}>Grid</button>
                    </div>
                    <div>
                        <button onClick={() => props.sort('max')}>Max</button>
                        <button onClick={() => props.sort('min')}>Min</button>
                        <button onClick={() => props.sort('default')}>Default</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Title
