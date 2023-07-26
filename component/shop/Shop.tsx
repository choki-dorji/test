import React, { useState } from "react";
import { useGetProductsQuery } from "@/store/Slice";
import Additem from "./Additem";
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
  //

  //
  const { data, isLoading, error } = useGetProductsQuery();
  console.log("data", data);

  //   const arr = Object.keys(data).map((key) => ({
  //     key: key,
  //     value: data[key],
  //   }));
  //   console.log(arr);

  if (isLoading) {
    return <p>Loading ...</p>;
  }
  if (error) {
    return <p>Error</p>;
  }
  if (!data) {
    return <p>no data</p>;
  }
  return (
    <>
      <Additem />
      <div>
        {data.products.map((m: Product) => {
          return <p>{m.title}</p>;
        })}
      </div>
    </>
  );
}

export default Shop;
