import React from "react";
import axios from "axios";
import jwt from "jsonwebtoken";
import { Form } from "react-bootstrap";

interface IUser{
    id?: number,
    email?: string,
    username?: string,
    password?: string
}

function UserDetails() {

  // STORAGE

  const token: any = localStorage.getItem("token");
  const _id: any = jwt.decode(token);

  // USER OBJECT
  const [user, setUser] = React.useState<IUser>({
    email: "",
    username: "",
    password: "",
  });

  React.useEffect(() => {
    try{
      if (token) {
        axios.get(`http://localhost:5000/api/users/user/${_id._id}`)
          .then((response) => {
            console.log("UserDetails:", response);
            setUser({ email: response.data.email, username: response.data.username });
          })
          .catch((err) => console.log(err));
      }
    }catch(err){
      console.log(err);
    }
  }, [_id._id, token]);

  return (
    <div style={{ margin: "100px" }} className="userdetails">
      <h1 style={{ textAlign: "center" }}>User Details</h1>
      <Form.Control type="text" placeholder={`ID: ${_id._id}`} readOnly />
      <Form.Control type="text" placeholder={`Email: ${user.email}`} readOnly />
      <Form.Control
        type="text"
        placeholder={`Username: ${user.username}`}
        readOnly
      />
    </div>
  );
}

export default UserDetails;