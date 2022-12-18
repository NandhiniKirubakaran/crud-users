import { User } from "./User";
import { useEffect, useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

export function UserList( ) {
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    fetch("https://638cdc36eafd555746b0d43f.mockapi.io/users",{
      method: "GET",
    })
      .then((data) => data.json())
      .then((users) => setUsers(users));
  };

  useEffect(() => getUsers(), []);

const deleteUser = (id) => {
  // Delete -> Refresh the data
  fetch(`https://638cdc36eafd555746b0d43f.mockapi.io/users/${id}`,{
      method: "DELETE",
    })
      .then((data) => getUsers());
};


  return (
    <div>
      {/* <AddUser users={users} setUsers={setUsers} /> */}

      <div className='users-list'>
    {/* parent -> child (props) */}
      {users.map((mv) => (
           <div key = {mv.id}>
         <User userdetails={mv} id={mv.id}
         
         deleteButton = {
            <IconButton 
            style={{marginLeft:"auto"}}
              aria-label="delete" 
              size="small"
              color="error"
              onClick={() => deleteUser(mv.id)}
              >
              <DeleteIcon fontSize="inherit" />
              </IconButton>}
         />
       </div>
      ))}
    </div>
    </div>
  );
}
