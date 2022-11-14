import React from "react";
import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import { listPages } from "../../constants/constants";
import HomeItem from "../HomeItem/HomeItem";
import HeaderItem from "../HeaderItem/HeaderItem";

const cx = classNames.bind(styles);

function Header() {
  return (
    <div className={cx("wrapper-header")}>
      <div className={cx("container")}>
        <div className={cx("header-list")}>
          {listPages.map((page) => (
            <HeaderItem key={page.id} data={page} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;
