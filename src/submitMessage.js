//actually, nvm, if you want to use JSX, you have to import react
import React from 'react'

const SubmitMessage = ({messageStatus}) => {
    if(messageStatus === null){
        return(<></>)
    }
    else{
        const errorStyling = {
            color: 'red',
            width: 500,
            borderWidth: 'thin',
            border: 'solid red'
        }
        
        const successStyling = {
            color: 'green',
            width: 500,
            borderWidth: 'thin',
            border: 'solid green'
        }
 
        return(
            <p style={(messageStatus.isError)?errorStyling:successStyling}>{messageStatus.message}</p>
        )
    }
    
}

export default SubmitMessage
