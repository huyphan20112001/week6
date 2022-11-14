import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./HeaderItem.module.scss";

const cx = classNames.bind(styles);

function HeaderItem({ data }) {
  return (
    <Link to={`/${data.path}`} className={cx("header-item")}>
      {data.name}
    </Link>
  );
}

export default HeaderItem;
