import React from 'react'

const UserInput = (props)=>{
    //console.log(`userInput receiving: `, props)

    return(
        <div>
            {props.name}: <input value = {props.value} onChange={props.onChange}/>
        </div>
    )
}

export default UserInput