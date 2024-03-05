import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getContacts } from "../Redux/actions"
import ContactCard from "./ContactCard"



const ListContacts = () => {

    const dispatch = useDispatch()
    const contacts = useSelector(state => state.contacts.result)

    useEffect(()=> {
        dispatch(getContacts())
    }, [])

    return (
        <>
            <h1>list</h1>
            {
                contacts &&
                contacts.map((el)=> <ContactCard el={el} />)
            }
        </>
    )

}

export default ListContacts