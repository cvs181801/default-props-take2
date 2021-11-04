import React from 'react'
import PropTypes from 'prop-types'

export default function Square(props) {
    return (

        <div>
            <img
                src={props.src}
                style={{borderRadius:props.borderRadius}}
                alt="A black puppy"
            ></img>
        </div>
    ) 
}


Square.defaultProps = {
    borderRadius: "30%",
    src: "https://picsum.photos/id/237/300/300"
} 

Square.propTypes = {
    borderRadius: PropTypes.string.isRequired,
    src: PropTypes.oneOf([PropTypes.string, PropTypes.number])
}
