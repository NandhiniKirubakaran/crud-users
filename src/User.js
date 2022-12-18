import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Card from '@mui/material/Card';
import { useState } from "react";




export function User({ userdetails }) {
  // const userdetails = {
  //   name: "Harsitha A",
  //   id: "BW2022",
  //   img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB745nyEr2XCXKHIQLuIi9LGRLFHfswn5BBg&usqp=CAU",
  //   mail: "njfewnkf@gmail.com",
  //   designation: "Developer",
  // };
  let [like, setLike] = useState(0);
  let [disLike, setDisLike] = useState(0);

  const increment = () => setLike(like + 1);
  const decrement = () => setDisLike(disLike + 1);


  return (
    <div className='list-user'>
      <Card className='profile'>
        <img src={userdetails.img} alt={userdetails.name} className="profile-img" />
        <h3 className='profile-name'>Name: {userdetails.name}</h3>
        <h3 className='profile-id'>Emp.ID: {userdetails.id}</h3>
        <h4 className='profile-mail'>Mail: {userdetails.mail}</h4>
        <h4 className='profile-position'>designation: {userdetails.designation}</h4>
        <div className='buttons'>
          <div className='all-buttons'>
            <div className='like-button'>
              <IconButton onClick={increment} color="primary" aria-label="like" size="small">
                <Badge badgeContent={like} color="primary">😍</Badge>
              </IconButton>
              <IconButton onClick={decrement} color="primary" aria-label="disLike" size="small">
                <Badge badgeContent={disLike} color="error">🤔</Badge>
              </IconButton>
            </div>
            <div className='button'>
              <IconButton aria-label="edit" size="small">
                <EditIcon fontSize="inherit" />
              </IconButton>
              
            </div>
          </div>
        </div>
      </Card>

    </div>
  );
}
