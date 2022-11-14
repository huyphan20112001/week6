import React from "react";
import styles from "./DefaultLayout.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <div className={cx("content")}>{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
