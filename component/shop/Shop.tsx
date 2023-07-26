import React, { useState } from "react";
import { useGetProductsQuery } from "@/store/Slice";
import Additem from "./Additem";
import { Button } from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/store/Reducer";
import store from "@/store/store";

import Image from "next/image";

import styles from "./shop1.module.css"; // Import the CSS file

interface Product {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: {
    count: number;
    rate: number;
  };
  title: string;
}

function Shop() {
  const dispatch = useDispatch();
  const [addtoCard, setAddToCard] = useState(0);
  const { data, isLoading, error } = useGetProductsQuery();

  if (isLoading) {
    return <p className={styles["message"]}>Loading ...</p>;
  }
  if (error) {
    return <p className={styles["message"]}>Error</p>;
  }
  if (!data) {
    return <p className={styles["message"]}>No data</p>;
  }

  const handleClick = (id: number) => {
    setAddToCard(addtoCard + 1);
    // console.log("add to card", addtoCard);
    console.log(dispatch(addToCart(addtoCard + 1)));
    console.log(store.getState().item);
  };

  return (
    <>
      <div>USER</div>
      {/* <Additem /> */}
      <div className={styles["product-list-container"]}>
        {data.products.map((m: Product) => (
          <div key={m.id} className={styles["product-item"]}>
            <p className={styles["product-title"]}>{m.title}</p>
            <p>{m.description}</p>
            <img
              src={m.image}
              alt={m.title}
              style={{ height: 250, width: 250, alignItems: "center" }}
            />
            <p>Price: ${m.price}</p>
            {/* <Button.Group>
              <Button>Add to Card</Button>
            </Button.Group> */}
            <button onClick={() => handleClick(m.id)}>Add to Card</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Shop;
