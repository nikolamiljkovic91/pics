import React from 'react'
import classes from './GridItem.module.scss'
import Width from '../../../assets/icons/width.png'
import Height from '../../../assets/icons/height.png'
import { connect } from 'react-redux'

const GridItem = (props) => {
    let array = props.data.pics || []

    let filterData = array.slice(0, 6).filter(item => {
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



           let grid = filterData.map(item => {
            return(
            <div onClick={() => {props.display === 'grid' && window.open(item.url, '_blank')}} key={item.id} className={props.display === 'list' ? classes.ListItem : classes.GridItem}>
                <div className={classes.ImgWrapper}>
                    <p>{item.author}</p>
                    <img src={item.download_url} alt="img"/>
                </div>
                <div className={classes.HeightWidth}>
                <div className={classes.Height}>
                    <img src={Height} alt="height"/>
                    <p>Height: <span>{item.height}</span></p>
                </div>
                <div className={classes.Width}>
                    <img src={Width} alt="height"/>
                    <p>Width: <span>{item.width}</span></p>
                </div>
                </div>
                {props.display === 'list' && <div className={classes.ButtonWrapper}>
                    <button onClick={() => window.open(item.url, '_blank')}>View More</button>
                </div>}
            </div>
            )
        })
    

    
    if(props.sortArr === 'max'){
         grid = maxToMin.map(item => {
            return(
            <div onClick={() => {props.display === 'grid' && window.open(item.url, '_blank')}} key={item.id} className={props.display === 'list' ? classes.ListItem : classes.GridItem}>
                <div className={classes.ImgWrapper}>
                    <p>{item.author}</p>
                    <img src={item.download_url} alt="img"/>
                </div>
                <div className={classes.HeightWidth}>
                <div className={classes.Height}>
                    <img src={Height} alt="height"/>
                    <p>Height: <span>{item.height}</span></p>
                </div>
                <div className={classes.Width}>
                    <img src={Width} alt="height"/>
                    <p>Width: <span>{item.width}</span></p>
                </div>
                </div>
                {props.display === 'list' && <div className={classes.ButtonWrapper}>
                    <button onClick={() => window.open(item.url, '_blank')}>View More</button>
                </div>}
            </div>
            )
        })
    }else if(props.sortArr === 'min'){
         grid = minToMax.map(item => {
            return(
            <div onClick={() => {props.display === 'grid' && window.open(item.url, '_blank')}} key={item.id} className={props.display === 'list' ? classes.ListItem : classes.GridItem}>
                <div className={classes.ImgWrapper}>
                    <p>{item.author}</p>
                    <img src={item.download_url} alt="img"/>
                </div>
                <div className={classes.HeightWidth}>
                <div className={classes.Height}>
                    <img src={Height} alt="height"/>
                    <p>Height: <span>{item.height}</span></p>
                </div>
                <div className={classes.Width}>
                    <img src={Width} alt="height"/>
                    <p>Width: <span>{item.width}</span></p>
                </div>
                </div>
                {props.display === 'list' && <div className={classes.ButtonWrapper}>
                    <button onClick={() => window.open(item.url, '_blank')}>View More</button>
                </div>}
            </div>
            )
        })
    }
 


        if(props.data.loading){
            return <div>Loading...</div>
        }else if(props.data.error){
            return <div>Error!</div>
        }else{
            return grid
        }
}


const mapStateToProps = state => {
    return{
        data: state.pics,
        text: state.search
    }
}

export default connect(mapStateToProps)(GridItem)