import React, { useState } from 'react'
import classes from './List.module.scss'
import ListItem from './ListItem/ListItem'
import Title from '../Title/Title'

const List = () => {
    const[sort, setSort] = useState('default')
    const[view, setView] = useState('list')

    let handleSort = (data) => {
        setSort(data)
    }
    let handleView = (data) => {
        setView(data)
    }

    return (
        <div className={classes.List}>
            <Title sort={handleSort} view={handleView} title='Upcoming Events'/>
            <div className={view === 'list' ? classes.ListView : classes.GridView}>
                <ListItem sortArr={sort} display={view}/>
            </div>
        </div>
    )
}

export default List
