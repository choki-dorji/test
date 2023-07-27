import React from "react";
import classes from "./user.module.css";

function User() {
  return (
    <main>
      <section className={classes.user__profile}>
        <div className={classes.user__info}>
          <div className={classes.user__avatar}>
            <img
              src="https://i.pravatar.cc/150?u=a048581f4e29026701d"
              alt="Profile Picture"
            />
          </div>
          <div className={classes.user__details}>
            <h1>John Doe</h1>
            <p className={classes.username}>@johndoe123</p>
            <p className={classes.email}>Email: john.doe@example.com</p>
          </div>
        </div>

        <div className={classes.user__purchases}>
          <h2>Purchased Products</h2>
          <ul className={classes.product__list}>
            <li className={classes.product__item}>
              <div className={classes.product__image}>
                <img src="path/to/product1.jpg" alt="Product 1" />
              </div>
              <div className={classes.product__details}>
                <h3>Product 1</h3>
                <p className={classes.price}>$19.99</p>
                <p className={classes.order__date}>Order Date: July 27, 2023</p>
              </div>
            </li>
            <li className={classes.product__item}>
              <div className={classes.product__image}>
                <img src="path/to/product2.jpg" alt="Product 2" />
              </div>
              <div className={classes.product__details}>
                <h3>Product 2</h3>
                <p className={classes.price}>$29.99</p>
                <p className={classes.order__date}>Order Date: July 25, 2023</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}

export default User;
