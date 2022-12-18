import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { navigate, useNavigate } from "react-router-dom";



export function AddUser( ) {

  const[img, setImg] = useState("");
  const[name, setName] = useState("");
  const[id, setId] = useState("");
  const[mail, setMail] = useState("");
  const[designation, setDesignation] = useState("");

  const navigate = useNavigate();

  const addUser = () => {
  const newUser = {
    img: img,
    name: name,
    id: id,
    mail: mail,
    designation: designation,
  };
  // setUsers([...users, newUser]);
  // console.log(newUser);

  fetch("https://638cdc36eafd555746b0d43f.mockapi.io/users",{
      method: "POST",
      body: JSON.stringify(newUser),
      headers: { "Content-type": "application/json" },
      }).then(() => navigate("/userlist"));
};

  return (
   <div>
    <div className='add-user-form'>
       <TextField 
      label="img" 
      variant="outlined" 
      onChange={(event) => setImg(event.target.value)}
      />
       <TextField 
      label="name" 
      variant="outlined" 
      onChange={(event) => setName(event.target.value)}
      />
      <TextField 
      label="id" 
      variant="outlined" 
      onChange={(event) => setId(event.target.value)}
      />
      <TextField 
      label="mail" 
      variant="outlined" 
      onChange={(event) => setMail(event.target.value)}
      />
      <TextField 
      label="designation" 
      variant="outlined" 
      onChange={(event) => setDesignation(event.target.value)}
      />
      <Button variant="contained" onClick={addUser}>Add User</Button>
    </div>


   </div>
  );
}
