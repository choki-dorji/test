import React, { useState } from "react";
import { usePostProductsMutation } from "@/store/Slice";
let id = 20;
function Additem() {
  const [title, setTitle] = useState("");
  const [Description, setDescription] = useState("");

  const [price, setPrice] = useState(0);
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
    <div>
      <form onSubmit={handleSubmit}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <input
          value={Description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input value={category} onChange={(e) => setCategory(e.target.value)} />
        {/* <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        /> */}
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default Additem;
