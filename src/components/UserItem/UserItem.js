import classNames from "classnames/bind";
import React from "react";
import styles from "./UserItem.module.scss";

const cx = classNames.bind(styles);
function UserItem({ data }) {
  return (
    <tr data-id="59962004">
      <td>{data.id}</td>
      <td>
        <a
          href="/lich-su-mua-hang/don-hang-59962004"
          data-id="59962004"
          className={cx("order_item")}
        >
          {data.username}
        </a>
      </td>

      <td>
        <div>
          <a href="" data-id="59962004" className={cx("order-item")}>
            {data.name}
          </a>
        </div>
      </td>

      <td>
        <b>{data.email}</b>
      </td>

      <td>
        <span>{data.phone}</span>
      </td>
      <td>
        <span>{data.website}</span>
      </td>
    </tr>
  );
}

export default UserItem;
