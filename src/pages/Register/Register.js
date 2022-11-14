import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Register.module.scss";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);

function Register() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    criteriaMode: "all",
  });

  const [errorPassword, setErrorPassword] = useState(false);

  const onSubmit = (data) => {
    const passwordValue = getValues("password");
    const rePasswordValue = getValues("rePassword");
    if (passwordValue !== rePasswordValue) {
      setErrorPassword(true);
    } else {
      setErrorPassword(false);
      localStorage.setItem("data", JSON.stringify(data));
      handleClick();
    }
  };

  const handleClick = () => {
    navigate("/login");
  };

  return (
    <div className={cx("wrapper-content")}>
      <div className={cx("container")}>
        <div className={cx("register")}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>Username</label>
            <input
              {...register("username", { required: true })}
              placeholder="Enter username"
            />{" "}
            <br />
            {errors.username && <p>This field is required</p>}
            <label>Email</label>
            <input
              {...register("email", { required: true })}
              placeholder="Enter email"
            />{" "}
            <br />
            {errors.email && <p>This field is required</p>}
            <label>Password</label>
            <input
              type="password"
              {...register("password", { required: true })}
              placeholder="Enter password"
            />{" "}
            <br />
            {errors.password && <p>This field is required</p>}
            <label>Re-Password</label>
            <input
              type="password"
              {...register("rePassword", { required: true })}
              placeholder="Re-Enter password"
            />
            <br />
            {errors.rePassword && <p>This field is required</p>}
            {errorPassword && <p>Password does not match</p>}
            <input type="submit" value="Register" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
