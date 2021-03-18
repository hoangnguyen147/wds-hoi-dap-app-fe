import React, { useState } from "react";
import "./styles.scss";
import { connect } from "react-redux";
import { Redirect, useHistory } from "react-router";
import { userRegister } from "../../redux/actions/user"

const Register = ({ user, isLoading, ...props }) => {
    const [values, setValues] = useState({
        name: "",
        username: "",
        password: "",
    });

    const history = useHistory();

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
        props.userRegister(values);
    }

    if (user) return <Redirect to="/home" />

    return (
        <>
            <div className="register">
                <form
                    className="register__form"
                    autoComplete="off"
                    autoSave="off"
                    onSubmit={handleSubmit}
                >
                    <h2>Đăng Ký</h2>
                    <div className="register__field">
                        <input
                            type="text"
                            name="name"
                            value={values.name}
                            onChange={handleOnChange}
                            autoComplete="off"
                            required
                        />
                        <label for="name">Your Name</label>
                    </div>
                    <div className="register__field">
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
                    <div className="register__field">
                        <input
                            type="password"
                            name="password"
                            value={values.password}
                            onChange={handleOnChange}
                            required
                        />
                        <label for="password">Password</label>
                    </div>
                    <button type="submit">Register</button>
                </form>
            </div>
        </>
    );
};



const mapStateToProps = (state) => ({
    isLoading: state.general.isLoading,
    user: state.user.user,
});

const mapDispatchToProps = (dispatch) => ({
    userRegister: (values) => dispatch(userRegister(values)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);