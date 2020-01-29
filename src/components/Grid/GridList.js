import React, { useEffect, useState } from 'react'
import GridItem from './GridItem/GridItem'
import classes from './GridList.module.scss'
import * as actions from '../../store/actions/index'
import { connect } from 'react-redux'
import Title from '../Title/Title'



const GridList = ({onFetchPics}) => {

    const[sort, setSort] = useState('default')
    const[view, setView] = useState('grid')

    useEffect(() => {
        onFetchPics()
    }, [onFetchPics])

    let handleSort = (data) => {
        setSort(data)
    }
    let handleView = (data) => {
        setView(data)
    }


    return (
        <div className={classes.Grid}>
            <Title sort={handleSort} view={handleView} title='Hot Tickets'/>
            <div className={classes.GridView}>
                <GridItem sortArr={sort} display={view}/>
            </div>
        </div>
    )
}


const mapDispatchToProps = dispatch => {
    return{
        onFetchPics : () => dispatch(actions.fetchPics())
    }
}

export default connect(null, mapDispatchToProps)(GridList)
