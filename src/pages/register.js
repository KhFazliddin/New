import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../redux/userSlice";
import "../assets/style/register.css";
import { useNavigate, Link } from "react-router-dom";

function Register(props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const users = useSelector((state) => state.auth.users);
  const dispatch = useDispatch();
  const navigate = useNavigate("");

  const signup_submitBtn = (e) => {
    e.preventDefault();
    if (!username) alert("ism kiritmadingiz");
    else if (!email) alert("email kiritmadizgiz");
    else if (!password) alert("parol kiritmadingiz");
    else if (!confirm) alert("parolni qayta kiritmadingiz");
    else if (password !== confirm)
      alert("parolni qaytadan to'g'ri kiritmadingiz");
      
    else {
      const emailCheck=users.length>0 && users.some(item=>item.email===email )
      if(emailCheck) alert("bunday emailli foydalanuvchi bor")
      else{
      const newObj = { username, email, password };
      dispatch(addUser(newObj));
      setUsername("");
      setEmail("");
      setPassword("");
      setConfirm("");
      navigate("/login");
      }
    }
  };

  return (
    <div>
      <div id="login-box">
        <div className="left">
          <h1>Sign up</h1>

          <input
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            name="username"
            placeholder="Username"
          />
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            name="email"
            placeholder="E-mail"
          />
          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            placeholder="Password"
          />
          <input
            required
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            type="password"
            name="password2"
            placeholder="Retype password"
          />

          <input
            onClick={signup_submitBtn}
            type="submit"
            name="signup_submit"
            value="Sign me up"
          />
        </div>

        <div className="right">
          <span className="loginwith">
            Sign in with
            <br />
            social network
          </span>

          <button className="social-signin facebook">
            Log in with facebook
          </button>
          <button className="social-signin twitter">Log in with Twitter</button>
          <button className="social-signin google">Log in with Google+</button>
          <Link to="/login">
            {" "}
            <button className="social-signin facebook">
              Log In your Account
            </button>
          </Link>
        </div>
        <div className="or">OR</div>
      </div>
    </div>
  );
}

export default Register;
