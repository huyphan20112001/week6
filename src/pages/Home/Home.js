import React from "react";
import classNames from "classnames/bind";
import styles from "./Home.module.scss";

const cx = classNames.bind(styles);

function Home() {
  return <div id={cx("home")}>Home</div>;
}

export default Home;
