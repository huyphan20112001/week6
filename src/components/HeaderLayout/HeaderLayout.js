import React from "react";
import styles from "./HeaderLayout.module.scss";
import classNames from "classnames/bind";
import Header from "../Header/Header";

const cx = classNames.bind(styles);

function HeaderLayout({ children }) {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("content")}>{children}</div>
    </div>
  );
}

export default HeaderLayout;
