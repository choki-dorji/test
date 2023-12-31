import React, { useState } from "react";
import { useGetProductsQuery, useSearchProductsQuery } from "@/store/Slice";
import Additem from "./Additem";
import { Button } from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/store/Reducer";
import store from "@/store/store";
import { Loading, Grid } from "@nextui-org/react";

import Image from "next/image";

import styles from "./shop1.module.css"; // Import the CSS file
import Shop1 from "./ShopCard";

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

  const dataa = useSelector((state: any) => state.id);
  if (isLoading) {
    return (
      <Grid.Container gap={2} justify="center" align="center">
        <Grid>
          <Loading type="spinner" size="xl" />
        </Grid>
      </Grid.Container>
    );
  }
  if (error) {
    return <p className={styles["message"]}>Error</p>;
  }
  if (!data) {
    return <p className={styles["message"]}>No data</p>;
  }

  const handleClick = (
    id: number,
    image: string,
    price: number,
    title: string,
    description: string
  ) => {
    setAddToCard(addtoCard + 1);
    // console.log("title", price);
    // console.log("add to card", addtoCard);
    dispatch(
      addToCart({
        id,
        image: image,
        price: price,
        title: title,
        description: description,
      })
    );
    console.log(store.getState().item);
  };

  interface SS {
    title: string;
  }

  // ////////////////////////////////
  console.log(dataa.id);
  // const { data: data2 } = useSearchProductsQuery(dataa.id);
  const alldata = data.filter((t: SS) =>
    t.title.toLowerCase().includes(dataa.id)
  );
  console.log(alldata);

  interface Product {
    id: number;
    title: string;
    image: string;
    description: string;
    price: number;
  }

  return (
    <>
      {/* ... (other content) */}
      <div className={styles["product-list-container"]}>
        {alldata
          ? alldata.map((t: Product) => (
              <Shop1
                title={t.title}
                price={t.price}
                id={t.id}
                image={t.image}
                description={t.description}
                onClicking={() =>
                  handleClick(t.id, t.image, t.price, t.title, t.description)
                }
              />
            ))
          : data.map((m: Product) => (
              <Shop1
                title={m.title}
                price={m.price}
                id={m.id}
                image={m.image}
                description={m.description}
                onClicking={() =>
                  handleClick(m.id, m.image, m.price, m.title, m.description)
                }
              />
            ))}
      </div>
    </>
  );
}

export default Shop;
