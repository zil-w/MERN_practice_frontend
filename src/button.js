import React from 'react'

const Button = ({handleDelete})=>{
    return(
        <button onClick={handleDelete}>delete</button>
    )
}

export default Button