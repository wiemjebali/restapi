import { GET_CONTACTS } from "./actionTypes";
import axios from "axios"

export const getContacts = () => async (dispatch) => {
    await axios.get("/contacts/getContacts")
    .then((res)=> dispatch({type: GET_CONTACTS, payload: res.data}))
    .catch((err)=> console.error(err))
}

export const addContact = (newContact) => async (dispatch) => {
    await axios.post("/contacts/addContact", newContact)
    .then(()=> dispatch(getContacts()))
    .catch((err)=> console.error(err))
}

export const deleteContact = (idContact) => async (dispatch) => {
    await axios.delete(`/contacts/deleteContact/${idContact}`)
    .then(()=> dispatch(getContacts()))
    .catch((err)=> console.error(err))
}

export const updateContact = (idContact, updateContact) => async (dispatch) => {
    await axios.put(`/contacts/updateContact/${idContact}`, updateContact)
    .then(()=> dispatch(getContacts()))
    .catch((err)=> console.error(err))
}