//import React from 'react'
import axios from 'axios'

const dbPath = `/api/persons`

const addNumber = newEntry => {
    //console.log('entry to add',  newEntry)
    const request = axios.post(dbPath, newEntry)
    return request.then(response => response.data)
}

const deleteNumber = id => {
    const request = axios.delete(`${dbPath}/${id}`)
    return request.then(response => response.data)
}

const getAllNumbers = () =>{
    const request = axios.get(dbPath)
    return request.then(response => response.data)
}

const modifyNumber = (id, newEntry) => {
    console.log('entry to modify',  newEntry, ' at ', `${dbPath}/${id}`)
    const request = axios.put(`${dbPath}/${id}`, newEntry)
    return request.then(response => response.data)
}

const phoneServices = {addNumber, deleteNumber,getAllNumbers, modifyNumber}

export default phoneServices