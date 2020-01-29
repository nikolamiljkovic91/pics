import React from 'react'
import classes from './ListItem.module.scss'
import { connect } from 'react-redux';
import Arrow from '../../../assets/icons/arrow.png'

const ListItem = (props) => {
    let array = props.data.pics || []

        let filterData = array.slice(6, 9).filter(item => {
        return item.author.toLowerCase().indexOf(props.text.searchText.toLowerCase()) !== -1 ||
        item.width.toString().indexOf(props.text.searchText) !== -1 ||
        item.height.toString().indexOf(props.text.searchText) !== -1
    })

        let newArr = filterData.map(item => {
        let sum = item.width + item.height
        return {...item, sum : sum}
    })

        let minToMax = newArr.slice(0)
        minToMax.sort((a,b) => {
        return a.sum - b.sum
    })

        let maxToMin = minToMax.slice(0)
        maxToMin.reverse()



    let list = filterData.map(item => {
        return(
        <div onClick={() => {props.display === 'grid' && window.open(item.url, '_blank')}} className={props.display === 'list' ? classes.ListItem : classes.GridItem} key={item.id}>
            <div className={classes.Content}>
            <div className={classes.ImgWrapper}>
                <img src={item.download_url} alt="img"/>
            </div>
            <div className={classes.Date}>
                <p>FEB</p>
                <p>14</p>
            </div>
            <div className={classes.Info}>
                <p>Mon - 19:30</p>
                <p>{item.author}</p>
                <div className={classes.WidthHeight}>
                    <p>Width: <span>{item.width},</span></p>
                    <p>Height: <span>{item.height}</span></p>
                </div>
            </div>
            </div>
            {props.display === 'list' && <div className={classes.Button}>
                <button onClick={() => window.open(item.url, '_blank')}>Find pics <span><img src={Arrow} alt="arrow"/></span></button>
            </div>}
        </div>
        )
    })

    if(props.sortArr === 'max'){
        list = maxToMin.map(item => {
        return(
        <div onClick={() => {props.display === 'grid' && window.open(item.url, '_blank')}} className={props.display === 'list' ? classes.ListItem : classes.GridItem} key={item.id}>
            <div className={classes.Content}>
            <div className={classes.ImgWrapper}>
                <img src={item.download_url} alt="img"/>
            </div>
            <div className={classes.Date}>
                <p>FEB</p>
                <p>14</p>
            </div>
            <div className={classes.Info}>
                <p>Mon - 19:30</p>
                <p>{item.author}</p>
                <div className={classes.WidthHeight}>
                    <p>Width: <span>{item.width},</span></p>
                    <p>Height: <span>{item.height}</span></p>
                </div>
            </div>
            </div>
            {props.display === 'list' && <div className={classes.Button}>
                <button onClick={() => window.open(item.url, '_blank')}>Find pics <span><img src={Arrow} alt="arrow"/></span></button>
            </div>}
        </div>
        )
    })
    }else if(props.sortArr === 'min'){
        list = minToMax.map(item => {
        return(
        <div onClick={() => {props.display === 'grid' && window.open(item.url, '_blank')}} className={props.display === 'list' ? classes.ListItem : classes.GridItem} key={item.id}>
            <div className={classes.Content}>
            <div className={classes.ImgWrapper}>
                <img src={item.download_url} alt="img"/>
            </div>
            <div className={classes.Date}>
                <p>FEB</p>
                <p>14</p>
            </div>
            <div className={classes.Info}>
                <p>Mon - 19:30</p>
                <p>{item.author}</p>
                <div className={classes.WidthHeight}>
                    <p>Width: <span>{item.width},</span></p>
                    <p>Height: <span>{item.height}</span></p>
                </div>
            </div>
            </div>
            {props.display === 'list' && <div className={classes.Button}>
                <button onClick={() => window.open(item.url, '_blank')}>Find pics <span><img src={Arrow} alt="arrow"/></span></button>
            </div>}
        </div>
        )
    })
    }

    if(props.data.loading){
        return <div>Loading...</div>
    }else if(props.data.error){
        return <div>Error!!!</div>
    }else{
        return list
    }
}

const mapStateToProps = state => {
    return{
        data: state.pics,
        text: state.search
    }
}

export default connect(mapStateToProps)(ListItem)
