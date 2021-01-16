import React from 'react'
import Button from './button'

const PhonebookEntry = ({name, number, handleDelete})=>{
    
    return(
        <>
            <p>{name} {number}</p> <Button handleDelete = {handleDelete}/>
        </>
    )
}

export default PhonebookEntry