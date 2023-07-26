import React from "react";
import Link from "next/link";
import classes from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const data1 = useSelector((state: any) => state.item);
  console.log("data1", data1);
  return (
    <>
      <header className={classes.header}>
        <div className={classes.header__container}>
          <div className={classes.header__logo}>
            <a href="#">
              <img src="logo.png" alt="Logo" />
            </a>
          </div>
          <div className={classes.header__search}>
            <input type="text" placeholder="Search..." />
            <button>Search</button>
          </div>
          <div className={classes.header__cart}>
            <span className={classes.cart__count}>{data1.items}</span>
            <FontAwesomeIcon icon={faShoppingCart} />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
