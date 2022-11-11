import React from "react";
import classNames from "classnames/bind";
import styles from "./SearchFilter.module.scss";

const cx = classNames.bind(styles);

function SearchFilter() {
  return <div id={cx("search")}>SearchFilter</div>;
}

export default SearchFilter;
