import { useState } from "react";
import Modal from "react-modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { updateContact } from "../Redux/actions";

const EditContact = ({el}) => {

    const dispatch = useDispatch()


  const [modalIsOpen, setIsOpen] = useState(false);
  const [fullName, setFullName] = useState(el.fullName);
  const [email, setEmail] = useState(el.email);
  const [phoneNumber, setPhoneNumber] = useState(el.phoneNumber);
  const [birthdate, setBirthdate] = useState(el.birthdate);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const updateC = () => {
    const updatedContact = {
        fullName,
        email,
        phoneNumber,
        birthdate
    }
    dispatch(updateContact(el._id, updatedContact))
    closeModal()
  }

  return (
    <>
    <Button variant="success" onClick={openModal}>Update</Button>
      <Modal isOpen={modalIsOpen}>
        <Form.Group className="mb-3">
          <Form.Label>Full name :</Form.Label>
          <Form.Control
            placeholder="Full name"
            onChange={(e) => setFullName(e.target.value)}
            value={fullName}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email :</Form.Label>
          <Form.Control
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Phone number :</Form.Label>
          <Form.Control
            placeholder="Phone number"
            onChange={(e) => setPhoneNumber(e.target.value)}
            value={phoneNumber}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Birthdate :</Form.Label>
          <Form.Control
            placeholder="Birthdate"
            onChange={(e) => setBirthdate(e.target.value)}
            value={birthdate}
          />
        </Form.Group>
        <Button variant="dark" onClick={closeModal}>Cancel</Button>
        <Button type="submit" onClick={updateC}>
          Update contact
        </Button>
      </Modal>
    </>
  );
};

export default EditContact;
