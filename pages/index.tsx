import Head from "next/head";
import Image from "next/image";
import Header from "@/component/Header/Header";
import styles from "@/styles/Home.module.css";
import Shop from "@/component/shop/Shop";
import { useDispatch, useSelector } from "react-redux";
import { isLoggedin } from "@/store/loginReducer";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Shop1 from "@/component/shop/ShopCard";
import { Row } from "@nextui-org/react";

export default function Home() {
  const router = useRouter();
  const logged = useSelector((state: any) => state.login.logins);

  useEffect(() => {
    if (logged !== true) {
      // alert("You have been logged Out!");
      router.push("/login");
    }
  });

  return (
    <div>
      <Header />
      <Shop />
    </div>
  );
}
