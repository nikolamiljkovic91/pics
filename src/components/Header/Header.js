import React from 'react'
import Search from './Search/Search'
import classes from './Header.module.scss'

const Header = () => {
    return (
        <div className={classes.Header}>
            Header
            <Search />
        </div>
    )
}

export default Header;
