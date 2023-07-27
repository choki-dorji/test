import React, { useState } from "react";
import { usePostProductsMutation } from "@/store/Slice";
import styles from "./shop.module.css"; // Import the CSS file

let id = 20;

function Additem() {
  const [title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [products, response] = usePostProductsMutation();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    products({
      category,
      description: Description,
      image: "dcjsbdjsbvjfvjbfjvbkjf",
      price: 20,
      id: ++id,
      rating: {
        count: 0,
        rate: 0,
      },
      title: title,
    })
      .unwrap()
      .then(() => {})
      .then((e) => {
        console.log(e);
      });
  };

  console.log("response", response);

  return (
    <div className={styles["form-container"]}>
      <form onSubmit={handleSubmit}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={styles["form-input"]}
          placeholder="Title"
        />
        <input
          value={Description}
          onChange={(e) => setDescription(e.target.value)}
          className={styles["form-input"]}
          placeholder="Description"
        />
        <input
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className={styles["form-input"]}
          placeholder="Category"
        />
        <button type="submit" className={styles["form-submit-btn"]}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Additem;
