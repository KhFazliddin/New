import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Me from "../assets/images/Me.jpeg";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import "../assets/style/home.css";
import { useSelector } from "react-redux";
export default function ImageAvatars() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const f=useSelector(state=>state.auth.user)
  console.log(f)
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
    <div className="Dashboard">
        <Button
          id="demo-positioned-button"
          aria-controls={open ? "demo-positioned-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          Dashboard
        </Button>
      </div>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <Link to="/">
          <MenuItem onClick={handleClose}>Profile</MenuItem>
        </Link>
        <Link to="/login">
          <MenuItem onClick={handleClose}>Log In</MenuItem>
        </Link>
        <Link to="/register">
          <MenuItem onClick={handleClose}>Add new account</MenuItem>
        </Link>
        <Link to="/logout">
          <MenuItem onClick={handleClose}>Log Out</MenuItem>
        </Link>
      </Menu>
    
    <Stack direction="row" spacing={2}>
      <div className="aboutMe">
        <Avatar alt="Remy Sharp" src={Me} />
        <p>{f && f.username}</p>
      </div>
    </Stack>
    </div>
  );
}
