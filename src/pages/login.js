import React, { useState } from "react";
import { Link } from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux';
import { useNavigate } from "react-router-dom";
import {logIn} from "../redux/userSlice"
function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const users=useSelector(state=>state.auth.users);
  const signedIn=useSelector(state=>state.auth.loggedIn);
  const dispatch=useDispatch()
  console.log(signedIn)
  const navigate=useNavigate()
  console.log(users)
const signin_submitBtn=(e)=>{
    const checkSignedUp=users.some(item=>item.email===email && item.password===password)
    if(!checkSignedUp) alert("email yoki parol xato")
    else{
        const filteredUser=users.filter(item=>item.email===email && item.password===password)[0]
        console.log(filteredUser)
        dispatch(logIn(filteredUser))
      navigate("/")
    }
}
  return (
    <div>
      <div id="login-box">
        <div className="left">
          <h1>Sign In</h1>

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            name="email"
            placeholder="E-mail"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            placeholder="Password"
          />

          <input
            onClick={signin_submitBtn}
            type="submit"
            name="signup_submit"
            value="SignIn"
          />
        </div>

        <div className="right">
          <span className="loginwith">
            Sign in with
            <br />
            social network
          </span>

          <Link to="/register">
            {" "}
            <button className="social-signin facebook">
              Create new Account
            </button>
          </Link>
        </div>
        <div className="or">OR</div>
      </div>
    </div>
  );
}

export default Login;
