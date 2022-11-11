import React from "react";
import classNames from "classnames/bind";
import styles from "./Quiz.module.scss";

const cx = classNames.bind(styles);

function Quiz() {
  return <div id={cx("quiz")}>Quiz</div>;
}

export default Quiz;
