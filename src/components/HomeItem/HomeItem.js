import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./HomeItem.module.scss";

const cx = classNames.bind(styles);

function HomeItem({ data }) {
  return (
    <Link to={`/${data.path}`} className={cx("page-item")}>
      <div className={cx("page-img")}>
        <img src={data.image} alt={data.name} />
      </div>
      <h2 className={cx("page-heading")}>{data.name}</h2>
    </Link>
  );
}

export default HomeItem;
