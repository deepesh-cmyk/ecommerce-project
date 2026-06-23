import { useState } from "react";

function Cart() {

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Laptop",
      price: 50000,
      quantity: 1
    },
    {
      id: 2,
      name: "Mobile",
      price: 20000,
      quantity: 1
    }
  ]);

  const removeItem = (id) => {

    setCartItems(
      cartItems.filter(
        item => item.id !== id
      )
    );

  };

  const updateQuantity = (id, amount) => {

    setCartItems(

      cartItems.map(item =>

        item.id === id
          ? {
              ...item,
              quantity: Math.max(
                1,
                item.quantity + amount
              )
            }
          : item

      )

    );

  };

  const total = cartItems.reduce(

    (sum, item) =>

      sum +
      item.price * item.quantity,

    0

  );

  return (
    <div style={{ padding: "20px" }}>

      <h1>Shopping Cart</h1>

      {cartItems.map((item) => (

        <div
          key={item.id}
          style={{
            border: "1px solid black",
            margin: "10px",
            padding: "10px"
          }}
        >

          <h3>{item.name}</h3>

          <p>Price: ₹{item.price}</p>

          <p>Quantity: {item.quantity}</p>

          <button
            onClick={() =>
              updateQuantity(
                item.id,
                -1
              )
            }
          >
            -
          </button>

          <button
            onClick={() =>
              updateQuantity(
                item.id,
                1
              )
            }
            style={{
              marginLeft: "10px"
            }}
          >
            +
          </button>

          <button
            onClick={() =>
              removeItem(item.id)
            }
            style={{
              marginLeft: "10px"
            }}
          >
            Remove
          </button>

        </div>

      ))}

      <h2>
        Total: ₹{total}
      </h2>

    </div>
  );
}

export default Cart;