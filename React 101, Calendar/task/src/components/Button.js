import PropTypes from 'prop-types'

const Button = ({color, text, onClick}) => {
     // show the event object
    /*
    const onClick = (e) => {
        console.log(e)
    }
    */
    return (
        <button className = 'btn' 
                style = {{backgroundColor: color}}
                onClick = {onClick}>
            {text}
        </button>
    )
}

Button.defaultProps = {
    color: 'red',
    text:  '!!!!!',
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}
export default Button
