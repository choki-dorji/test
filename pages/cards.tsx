import React from "react";
import Card from "@/component/Card/Card";
import Header from "@/component/Header/Header";
import Card1 from "@/component/Card/Card1";
import { isLoggedin } from "@/store/loginReducer";
import { useDispatch, useSelector } from "react-redux";

import { useRouter } from "next/router";
import { useEffect } from "react";

function Cards() {
  const router = useRouter();
  const logged = useSelector((state) => state.login.logins);

  useEffect(() => {
    if (logged !== true) {
      alert("You have been logged Out!");
      router.push("/login");
    }
  });
  return (
    <>
      <Header />
      <Card />
    </>
  );
}

export default Cards;
