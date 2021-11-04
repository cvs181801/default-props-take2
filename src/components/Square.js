import React from 'react'

export default function Square(props) {
    const styles = {
        backgroundColor: props.backgroundColor,
        height: props.height,
        width: props.width
}
    return (

        <div>
            <div style={styles}></div>
        </div>
    ) 
}


Square.defaultProps = {
    backgroundColor: "green",
    height: "3em",
    width: "3em"
    
}   
