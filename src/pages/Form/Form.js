import React from "react";
import classNames from "classnames/bind";
import styles from "./Form.module.scss";

const cx = classNames.bind(styles);

function Form() {
  return <div id={cx("form-signup")}>Form</div>;
}

export default Form;
