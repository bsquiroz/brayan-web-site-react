import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import iconPass from "../../assets/icons/pass.png";
import iconUser from "../../assets/icons/user.png";
import iconLogin from "../../assets/icons/icon_login.png";

import "./styles.css";

const initialState = {
    email: "",
    pass: "",
};

export const Login = () => {
    return (
        <div className="container_secondary">
            <div className="login_container">
                <LoginInfo />
                <LoginForm />
            </div>
        </div>
    );
};

const LoginInfo = () => {
    return (
        <div className="login_info">
            <h2 className="login_title">La app</h2>
            <p>
                para poder estar al tanto de lo que pasa con tu mercancia en
                tiempo real
            </p>
            <span className="btn btn_register">
                <Link to="/register">Registrate</Link>
            </span>
        </div>
    );
};

const LoginForm = () => {
    const [valuesInputs, setValuesInputs] = useState(initialState);
    const { email, pass } = valuesInputs;

    const handleInputs = (e) => {
        setValuesInputs({
            ...valuesInputs,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <div className="login_form">
            <div className="box_iconLogin">
                <img src={iconLogin} alt="icon_login" />
            </div>
            <form onSubmit={handleSubmit}>
                <Input
                    type={"email"}
                    name={"email"}
                    value={email}
                    handleInputs={handleInputs}
                    icon={iconUser}
                />
                <Input
                    type={"password"}
                    name={"pass"}
                    value={pass}
                    handleInputs={handleInputs}
                    icon={iconPass}
                />
                <p className="text_recover">
                    ¿Olvidate tu contraseña?{" "}
                    <span>
                        <Link to="/recover-account">Presiona</Link>
                    </span>
                </p>
                <input type="submit" value="Enviar" className="btn btn_send" />
            </form>
        </div>
    );
};
