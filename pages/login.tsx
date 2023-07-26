import React, { useState } from "react";
import { useRouter } from "next/router";
import classes from "./login.module.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

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
      router.push("/");
    } else {
      alert("Login failed");
    }
  };
  return (
    <div className={classes.logincontainer}>
      <div className={classes.logintitle}>Login</div>
      <form onSubmit={submitted}>
        <div className={classes.formgroup}>
          <label htmlFor="email">Username</label>
          <input
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
