import React from "react";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import classes from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";
import { search } from "@/store/Reducer2";
import { useState } from "react";
import store from "@/store/store";
import { User, Grid } from "@nextui-org/react";
import { useCookies } from "react-cookie";

function Header() {
  const router = useRouter();
  const [searchText, setSearchText] = useState("");
  const data1 = useSelector((state: any) => state.item);
  console.log("data1", data1.items.length);
  const dispatch = useDispatch();

  const searchhandler = () => {
    dispatch(search(searchText));
  };

  const handleChange = (e: any) => {
    setSearchText(e.target.value);
    if (searchText === "") {
      dispatch(search(searchText));
    }
  };

  // const handleCard = (event: React.MouseEvent) => {
  //   event.preventDefault();
  //   router.push("/cards");
  // };
  const [cookies, setCookies, removeCookies] = useCookies(["user"]);

  // console.log("from header", cookies);

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
            <input
              type="text"
              placeholder="Search..."
              value={searchText}
              onChange={handleChange}
            />
            <button onClick={searchhandler}>Search</button>
          </div>

          <div className={classes.header__cart}>
            <Link href="/user">
              <Grid>
                <User
                  bordered
                  src="https://i.pravatar.cc/150?u=a048581f4e29026701d"
                  name=""
                  color="success"
                />
              </Grid>
            </Link>
            <Link href="cards">
              <span className={classes.cart__count}>{data1.items.length}</span>
              <FontAwesomeIcon color="#fff" icon={faShoppingCart} />
            </Link>
            {/* <Link href="cards">
              <FontAwesomeIcon color="#fff" icon={faUser} />
            </Link> */}
          </div>
        </div>
      </header>
    </>
  );
}
console.log("store", store.getState());
export default Header;
