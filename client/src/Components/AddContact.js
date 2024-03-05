import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../Redux/actions";

const AddContact = () => {

    const dispatch = useDispatch()
    
    const [fullName, setFullName] = useState()
    const [email, setEmail] = useState()
    const [phoneNumber, setPhoneNumber] = useState()
    const [birthdate, setBirthdate] = useState()

    const add = () => {
        const newContact = {
            fullName,
            email,
            phoneNumber,
            birthdate
        }
        dispatch(addContact(newContact))
        alert("Contact added")
    }

  return (
    <>
      <Form.Group className="mb-3">
        <Form.Label>Full name :</Form.Label>
        <Form.Control placeholder="Full name" onChange={(e)=> setFullName(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email :</Form.Label>
        <Form.Control placeholder="Email" onChange={(e)=> setEmail(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Phone number :</Form.Label>
        <Form.Control placeholder="Phone number" onChange={(e)=> setPhoneNumber(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Birthdate :</Form.Label>
        <Form.Control placeholder="Birthdate" onChange={(e)=> setBirthdate(e.target.value)}/>
      </Form.Group>
      <Button type="submit" onClick={add}>Add contact</Button>
    </>
  );
};

export default AddContact;
