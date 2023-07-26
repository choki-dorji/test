import Head from "next/head";
import Image from "next/image";
import Header from "@/component/Header/Header";

import styles from "@/styles/Home.module.css";
import Shop from "@/component/shop/Shop";

export default function Home() {
  return (
    <div>
      <Header />
      <Shop />
    </div>
  );
}
