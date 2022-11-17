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
                  {...register("password", { required: true })}
                />
                <label>Password</label>
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
                {errorPassword && <p>Pass word does not match</p>}
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
