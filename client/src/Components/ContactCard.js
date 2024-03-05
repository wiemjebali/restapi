import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { deleteContact } from "../Redux/actions";
import { useDispatch } from "react-redux";
import EditContact from "./EditContact";

const ContactCard = ({ el }) => {

  const dispatch = useDispatch()

  const deleteC = () =>{
    const deleteConfirm = window.confirm("Voulez-vous supprimer ce contact")
    if (deleteConfirm) {
    dispatch(deleteContact(el._id))
    }
  }


  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>FullName: {el.fullName}</Card.Title>
        <Card.Text>
         Email: {el.email}
        </Card.Text>
        <Card.Text>
         Phone number: {el.phoneNumber}
        </Card.Text>
        <Card.Text>
         Birthdate:  {el.birthdate}
        </Card.Text>
        <EditContact el={el} />
        <Button variant="danger" onClick={deleteC}>Delete</Button>
      </Card.Body>
    </Card>
  );
};

export default ContactCard;
