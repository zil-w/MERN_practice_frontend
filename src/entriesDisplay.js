import React from 'react'
import PhonebookEntry from './phonebookEntry'

const EntriesDisplay = ({searchTerm, entries, deletionHandler}) =>{
    const returnFilteredPersons = () =>{
        if(searchTerm === ''){
            return entries
        }
        else{
            return (entries.filter(person => person.name.toLowerCase().includes(searchTerm)))
        }
    }

    //what are my assumptions here? that by making the function deletionHandler accepting an id, it'd have an unique variation for each component that inherits it?
    //so in the end what we needed, for a function taking an argument that you intend to provide in the parent component, you need to define it in the child's property as a function tha returns the function provided with the argument
    //okay it is running right off the bat if we don't stick the function fed with arguments within a function
    //I believe we can just pass a function from parent to child component indefinitely, arrow function is only required right before you use it
    return(
        <>
            {returnFilteredPersons().map(person =><PhonebookEntry name = {person.name} number={person.number} key={person.id} handleDelete ={() => deletionHandler(person.name, person.id)}/>)}
        </>
    )
}

export default EntriesDisplay