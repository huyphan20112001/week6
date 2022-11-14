import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Login.module.scss";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);

function Login() {
  const [data, setData] = useState([]);

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
  };

  return (
    <div className={cx("wrapper-content")}>
      <div className={cx("container")}>
        <div className={cx("register")}>
          <form onSubmit={handleSubmit(handleCheckLogin)}>
            <label>Username</label>
            <input
              {...register("username", { required: true })}
              placeholder="Enter username"
            />{" "}
            <br />
            {errors.username && <p>This field is required</p>}
            <label>Password</label>
            <input
              type="password"
              {...register("password", { required: true })}
              placeholder="Enter password"
            />{" "}
            <br />
            {errors.password && <p>This field is required</p>}
            <input type="submit" value="Login" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
