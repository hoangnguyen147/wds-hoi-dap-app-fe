import React, { useState } from "react";
import "./styles.scss";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { userLogin } from "../../redux/actions/user"

const Login = ({ user, isLoading, ...props }) => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    props.userLogin(values);
  }

  if(user) return <Redirect to="/home" />

  return (
    <React.Fragment>
      <div className="login">
        <form
          className="login__form"
          autoComplete="off"
          autoSave="off"
          onSubmit={handleSubmit}
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
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.general.isLoading,
  user: state.user.user,
});

const mapDispatchToProps = (dispatch) => ({
  userLogin: (values) => dispatch(userLogin(values)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
