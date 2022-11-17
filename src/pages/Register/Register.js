import React, { useEffect, useReducer, useRef, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Register.module.scss";
import { Controller, set, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);

function Register() {
  const [errorPassword, setErrorPassword] = useState("");
  const [openNoti, setOpenNoti] = useState(false);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    getValues,
    setError,
    formState: { errors },
  } = useForm({
    criteriaMode: "all",
  });

  const onSubmit = (data) => {
    const passwordValue = getValues("password");
    const rePasswordValue = getValues("rePassword");
    if (passwordValue.length > 16 || passwordValue.length < 6) {
      setError("password", {
        types: {
          message: "Password must be between 6 and 16 characters in length",
        },
      });
    } else if (passwordValue !== rePasswordValue) {
      setErrorPassword("Password does not match");
    } else {
      setErrorPassword("");
      localStorage.setItem("data", JSON.stringify(data));
      setOpenNoti(true);
    }
  };

  const handleRedirect = () => {
    navigate("/login");
  };

  return (
    <div className={cx("wrapper-content")}>
      <div className={cx("container")}>
        {openNoti && (
          <>
            <div className={cx("notification")}>
              <span>You have successfully registered</span>
              <span>
                You will be redirected to the <b>Login Page</b>
              </span>
              <button onClick={handleRedirect}>Ok</button>
            </div>
            <div className={cx("overlay")}></div>
          </>
        )}
        <div className={cx("register")}>
          <form className={cx("form")} onSubmit={handleSubmit(onSubmit)}>
            <div className={cx("wrapper-regiter")}>
              <div className={cx("register-item")}>
                <input
                  className={cx("input")}
                  {...register("fullname", { required: true })}
                />
                <label>Fullname</label>
                {errors.username && (
                  <p className={cx("red")}>This field is required</p>
                )}
              </div>
              <div className={cx("register-item")}>
                <input
                  className={cx("input")}
                  {...register("username", { required: true })}
                />
                <label>Username</label>
                {errors.username && (
                  <p className={cx("red")}>This field is required</p>
                )}
              </div>
              <div className={cx("register-item")}>
                <input
                  className={cx("input")}
                  {...register("email", {
                    required: true,
                    pattern: {
                      value:
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,

                      message: "Please enter a valid email",
                    },
                  })}
                />
                <label>Email</label>
                {errors.email && (
                  <p className={cx("red")}>Please enter a valid email</p>
                )}
              </div>
              <div className={cx("register-item")}>
                <input
                  className={cx("input")}
                  type="password"
                  {...register("password", {
                    required: true,
                    types: {
                      maxLength: 16,
                    },
                  })}
                />
                <label>Password</label>
                {errors.password && errors.password.types && (
                  <p className={cx("red")}>{errors.password.types.message}</p>
                )}
                {errors.password && (
                  <p className={cx("red")}>This field is required</p>
                )}
              </div>
              <div className={cx("register-item")}>
                <input
                  className={cx("input")}
                  type="password"
                  {...register("rePassword", { required: true })}
                />
                <label>Re-Password</label>
                {errors.rePassword && (
                  <p className={cx("red")}>This field is required</p>
                )}
                {errorPassword !== "" && <p>{errorPassword}</p>}
              </div>
              <div className={cx("submit")}>
                <input type="submit" value="Register" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
