import React, { useEffect, useState, useRef } from "react";
import classNames from "classnames/bind";
import styles from "./SearchFilter.module.scss";
import userList from "../../utils/userList";
import UserItem from "../../components/UserItem/UserItem";

const cx = classNames.bind(styles);

function SearchFilter() {
  const [users, setUsers] = useState([]);
  const [userSearch, setUserSearch] = useState([]);

  const inputRef = useRef();
  const optionRef = useRef();

  useEffect(() => {
    const fetchUser = async () => {
      let response = await userList();
      setUsers(response);
      setUserSearch(response);
    };
    fetchUser();
  }, []);

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      if (inputRef.current.value !== "") {
        const newList = userSearch.filter((user) => {
          if (optionRef.current.value === "Username") {
            return user.username
              .toLowerCase()
              .includes(inputRef.current.value.toLowerCase());
          } else if (optionRef.current.value === "Name") {
            return user.name
              .toLowerCase()
              .includes(inputRef.current.value.toLowerCase());
          } else if (optionRef.current.value === "Email") {
            return user.email
              .toLowerCase()
              .includes(inputRef.current.value.toLowerCase());
          } else if (optionRef.current.value === "Phone") {
            return user.phone
              .toLowerCase()
              .includes(inputRef.current.value.toLowerCase());
          } else {
            return user.website
              .toLowerCase()
              .includes(inputRef.current.value.toLowerCase());
          }
        });
        setUserSearch(newList);
      } else setUserSearch(users);
    }
  };

  return (
    <div className={cx("wrapper-content")}>
      <div className={cx("container")}>
        <div className={cx("search")}>
          <h1 className={cx("heading")}>Search Filter</h1>
          <div className={cx("wrapper")}>
            <input
              type="text"
              className={cx("search-input")}
              placeholder="Search by name..."
              ref={inputRef}
              onKeyUp={handleSearch}
            />
            <label htmlFor="search-by">Choose a value :</label>
            <select ref={optionRef} name="search-by" id={cx("choose-search")}>
              <option value="Choose a value">Choose a value</option>
              <option value="Username">Username</option>
              <option value="Name">Name</option>
              <option value="Email">Email</option>
              <option value="Phone">Phone</option>
              <option value="Website">Website</option>
            </select>
            <div className={cx("cate")}>
              <div className={cx("history list")}>
                <table cellPadding="0" cellSpacing="0">
                  <tbody>
                    <tr>
                      <th>Serial</th>
                      <th>Username</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Website</th>
                    </tr>
                    {userSearch.map((user) => (
                      <UserItem key={user.id} data={user} />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchFilter;
