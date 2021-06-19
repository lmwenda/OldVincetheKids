import React, { useState } from "react";
import axios from "axios";
import jwt from "jsonwebtoken";
import{ useHistory } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";

function Show() {
    const history = useHistory();

    const token: any = localStorage.getItem("token");
    const _id: any = jwt.decode(token);

    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const DeleteAccount = () => {
        axios.delete(`http://localhost:5000/api/users/delete/user/${_id._id}`)
          .then(response => console.log(response))
          .catch(err => console.log(err));

        // Removing Local Storage Items

        localStorage.removeItem("token");

        // Closing the Modal
    
        setShow(false);

        // Redirecting the User
        history.push('/login');
        window.location.reload();
    }
  
    return (
      <>
        <Button variant="danger" onClick={handleShow}>
          Delete Account
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Are you sure you want to delete your Account?</Modal.Title>
          </Modal.Header>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="danger" onClick={DeleteAccount}>
              Delete Account
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

export default Show;