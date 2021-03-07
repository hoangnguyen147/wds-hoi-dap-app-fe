import React, { useState } from "react";
import "./styles.scss";
import { connect } from "react-redux";
import { Redirect } from "react-router";

const Login = (props) => {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const handleOnChange = (event) => {
    const target = event.target;
    const name = target.name;

    setValues({
      ...values,
      [name]: target.value,
    });
  };


  return (
    <>
      <div className="login">
        <form
          className="login__form"
          autoComplete="off"
          autoSave="off"
        >
          <h2>Đăng Nhập</h2>
          <div className="login__field">
            <input
              type="text"
              name="username"
              value={values.username}
              onChange={handleOnChange}
              autoComplete="off"
              required
            />
            <label for="username">Username</label>
          </div>
          <div className="login__field">
            <input
              type="password"
              name="password"
              value={values.password}
              onChange={handleOnChange}
              required
            />
            <label for="password">Password</label>
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
};



export default Login;