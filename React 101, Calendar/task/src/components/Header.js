// There's no need for it anymore: import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import {useLocation} from 'react-router-dom'

const Header = ({User, onPush, showAdd}) => {
    const location = useLocation()
    
    return (
        <header className = 'header'>
            <h1>Task Tracker: {User}</h1>
            { location.pathname === '/' &&
            <Button color = {showAdd ? 'red' : 'lightblue'}  
                    text = {showAdd ? 'Close' : 'Add'} 
                    onClick = {onPush}/>
            }
        </header>
    )
}

// default in case no prop was given
Header.defaultProps = {
    User: "No User",
}

// Specify the data type you expect for a prop
Header.propTypes = {
    User: PropTypes.string.isRequired,
}

// CSS option 0 |    Use index.css
// CSS option 1 |    <tag style = {{property: ''}}> </tag>
// CSS option 2 |    <tag style = {headingStyle}> </tag>
/*
const headingStyle =  {
    color: 'black', 
    backgroundColor: 'lightgrey',
} */
export default Header
