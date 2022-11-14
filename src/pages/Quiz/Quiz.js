import React from "react";
import classNames from "classnames/bind";
import styles from "./Quiz.module.scss";

const cx = classNames.bind(styles);

function Quiz() {
  return (
    <div className={cx("wrapper-content")}>
      <div className={cx("container")}>
        <div className={cx("quiz")}>Quiz App</div>
      </div>
    </div>
  );
}

export default Quiz;
