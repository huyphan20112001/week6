import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Login.module.scss";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);

function Login() {
  const [data, setData] = useState([]);
  const [errorUsername, setErrorUsername] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    criteriaMode: "all",
  });

  useEffect(() => {
    const dataUser = JSON.parse(localStorage.getItem("data"));
    dataUser && setData(dataUser);
  }, []);

  const { username, password } = data;

  const handleCheckLogin = () => {
    const usernameValue = getValues("username");
    const passwordValue = getValues("password");
    username === usernameValue && password === passwordValue && navigate("/");
    username !== usernameValue && setErrorUsername("Username does not exist");
    password !== passwordValue && setErrorPassword("Password does not match");
  };

  return (
    <div className={cx("wrapper-content")}>
      <div className={cx("container")}>
        <div className={cx("login")}>
          <form onSubmit={handleSubmit(handleCheckLogin)}>
            <div className={cx("input")}>
              <input
                className={cx("input-field")}
                {...register("username", { required: true })}
              />{" "}
              <label className={cx("input-label")}>Username</label>
              {errorUsername !== "" && <p>{errorUsername}</p>}
              {errors.username && <p>This field is required</p>}
            </div>
            <div className={cx("input")}>
              <input
                className={cx("input-field")}
                type="password"
                {...register("password", { required: true })}
              />{" "}
              <label className={cx("input-label")}>Password</label>
              {errorPassword !== "" && <p>{errorPassword}</p>}
              {errors.password && <p>This field is required</p>}
            </div>
            <div className={cx("action")}>
              <input
                className={cx("action-button")}
                type="submit"
                value="Login"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
