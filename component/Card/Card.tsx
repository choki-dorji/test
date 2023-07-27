import React, { useState } from "react";
import classes from "./card.module.css";
import { useDispatch, useSelector } from "react-redux";
import AddToCard from "./addtoCard";
import Amount from "./TotalAmount";
import { Button, Col } from "@nextui-org/react";

function Card() {
  interface Card {
    id: number;
    price: number;
    title: string;
    description: string;
    image: string;
  }

  const data = useSelector((state: any) => state.item.items);
  const totalPrice = data.reduce(
    (acc: number, item: Card) => acc + item.price,
    0
  );
  console.log(data);
  return (
    <>
      <div className={classes.order__summary}>
        <h3>Order Details</h3>
        {data.map((r: Card) => {
          return (
            <AddToCard
              id={r.id}
              title={r.title}
              description={r.description}
              price={r.price}
              image={r.image}
            />
          );
        })}

        <Amount data={data} />
        <Button>Pay</Button>
      </div>
    </>
  );
}

export default Card;
