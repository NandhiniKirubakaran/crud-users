import './App.css';
import { UserList } from './UserList';
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { NotFound } from './NotFound';
import { Home } from './Home';
import Button from '@mui/material/Button';
import { AddUser } from './AddUser';
import { useState } from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles'; 
import Paper from '@mui/material/Paper';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

function App() {

  const [users, setUsers] = useState([]);

  const navigate = useNavigate();

  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });


  return (
    <ThemeProvider theme={darkTheme}>
      <Paper style={{ minHeight: "100vh" }} elevation={4} >
    <div className="App">
    
      <AppBar position="static">
        <Toolbar>
        <Button color="inherit" onClick={() => navigate ("/home")}>Home</Button>
        <Button color="inherit" onClick={() => navigate ("/userlist")}>UserList</Button>
        <Button color="inherit" onClick={() => navigate ("/adduser")}>AddUser</Button>
        <Button 
        style={{marginLeft:"auto"}}
        startIcon ={ mode == "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
        color="inherit" onClick={() => setMode(mode == "light" ? "dark" : "light")}>
        {mode == "light" ? "dark" : "light"} mode</Button>
        </Toolbar>
      </AppBar>


      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/userlist" element={<UserList />} />
        <Route path="/adduser " element={<AddUser />} />
        {/* <Route path="about" element={<About />} /> */}
      </Routes>
    </div>
    </Paper >
    </ThemeProvider>
  );
}

export default App;
