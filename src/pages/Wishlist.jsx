import { useState } from "react";

function Wishlist() {

  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: "Laptop",
      price: 50000
    },
    {
      id: 2,
      name: "Shoes",
      price: 1500
    }
  ]);

  const addItem = () => {

    const newItem = {
      id: Date.now(),
      name: "Mobile",
      price: 20000
    };

    setWishlistItems([
      ...wishlistItems,
      newItem
    ]);

  };

  const removeItem = (id) => {

    setWishlistItems(
      wishlistItems.filter(
        item => item.id !== id
      )
    );

  };

  return (
    <div style={{ padding: "20px" }}>

      <h1>Wishlist</h1>

      <h2>
        Total Items: {wishlistItems.length}
      </h2>

      <button onClick={addItem}>
        Add To Wishlist
      </button>

      <br /><br />

      {wishlistItems.map((item) => (

        <div
          key={item.id}
          style={{
            border: "1px solid black",
            padding: "10px",
            margin: "10px"
          }}
        >

          <h3>{item.name}</h3>

          <p>₹{item.price}</p>

          <button
            onClick={() =>
              removeItem(item.id)
            }
          >
            Remove
          </button>

        </div>

      ))}

    </div>
  );
}

export default Wishlist;