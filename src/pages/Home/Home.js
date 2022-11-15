import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import { listPages } from "../../constants/constants";
import HomeItem from "../../components/HomeItem/HomeItem";

const cx = classNames.bind(styles);

function Home() {
  const listPagesInHome = listPages.filter((page) => page.id !== 1);

  return (
    <div id={cx("home")}>
      <div className={cx("header-home")}></div>
      <div className={cx("list-page")}>
        {listPagesInHome.map((page) => (
          <HomeItem key={page.id} data={page} />
        ))}
      </div>
    </div>
  );
}

export default Home;
