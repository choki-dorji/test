import React, { useState } from "react";
import { useRouter } from "next/router";
import classes from "./login.module.css";
import { useDispatch } from "react-redux";
import { isLoggedin } from "@/store/loginReducer";
import { useCookies } from "react-cookie";

function Login() {
  const [cookies, setCookies, removeCookies] = useCookies(["user"]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();

  const submitted = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(username, password);
    const response = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    console.log(response);
    if (response.ok) {
      dispatch(isLoggedin(true));
      setCookies("user", username, {
        path: "/",
      });
      router.push("/");
    } else {
      dispatch(isLoggedin(false));
      alert("Login failed");
    }
  };
  return (
    <div className={classes.logincontainer}>
      <div className={classes.logintitle}>Login</div>
      <form onSubmit={submitted}>
        <div className={classes.formgroup}>
          <label htmlFor="email" className={classes.label}>
            Username
          </label>
          <input
            className={classes.input}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            style={{ outline: "none" }}
            id="email"
            placeholder="Enter your usename"
          />
        </div>
        <div className={classes.formgroup}>
          <label htmlFor="password">Password</label>
          <input
            className={classes.input}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            style={{ outline: "none" }}
            placeholder="Enter your password"
          />
        </div>
        <button type="submit" className={classes.loginbtn}>
          Login
        </button>
      </form>
      <a href="#" className={classes.loginlink}>
        Forgot password?
      </a>
    </div>
  );
}

export default Login;
