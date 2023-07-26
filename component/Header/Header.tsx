import React from "react";
import Link from "next/link";
import classes from "./Header.module.css";

function Header() {
  return (
    <header className={classes.mainheade}>
      <div className={classes.container}>
        {/* <div className={classes.logo}>
          <img className={classes.img} src="logo.png" alt="Your Logo" />
        </div> */}
        <div className={classes.searchcart}>
          <div className={classes.searchbar}>
            <input type="text" placeholder="Search products..." />
            <button className={classes.button}>Search</button>
          </div>
          <div className={classes.carticon}>
            <i className="fas fa-shopping-cart"></i>
            <span className={classes.span}>3</span>
          </div>
        </div>
        <nav className={classes.mainnav}>
          <ul className={classes.ul}>
            <Link className={classes.li} href="#">
              Home
            </Link>
            <Link className={classes.li} href="#">
              Shop
            </Link>
            <Link className={classes.li} href="#">
              About
            </Link>
            <Link className={classes.li} href="#">
              Contact
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
