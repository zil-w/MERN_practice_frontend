import React from 'react'
import UserInput from './userInput'

const NewEntryForm = ({submissionHandler, newName, nameChange, newPhoneNum, phoneChange}) => {
    return(
        <form onSubmit = {submissionHandler}>
          <div>
            <UserInput name='name' value = {newName} onChange = {nameChange}/> {/*trying to separate these into their own components fail for some reason, the event handler returned to UserInput returns undefined*/}
            <UserInput name='number' value={newPhoneNum} onChange={phoneChange}/>{/*okay you are being a bit too careless, the issue was simply because your attribute is named wrong in the props, next time, just debug by printing props instead of the function, the function just gives you undefined, which isn't helpful*/}
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
    )
}

export default NewEntryForm