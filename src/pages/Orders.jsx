import { useState } from "react";

function Orders() {

  const [address, setAddress] = useState("");

  const [orders, setOrders] = useState([
    {
      id: 1,
      product: "Laptop",
      amount: 50000,
      address: "Madurai"
    }
  ]);

  const placeOrder = () => {

    if (!address) {
      alert("Please Enter Address");
      return;
    }

    const newOrder = {
      id: Date.now(),
      product: "Mobile",
      amount: 20000,
      address: address
    };

    setOrders([
      ...orders,
      newOrder
    ]);

    setAddress("");

    alert("Order Placed Successfully");

  };

  return (
    <div style={{ padding: "20px" }}>

      <h1>Checkout & Orders</h1>

      <h2>Address Management</h2>

      <input
        type="text"
        placeholder="Enter Address"
        value={address}
        onChange={(e) =>
          setAddress(e.target.value)
        }
      />

      <br /><br />

      <button onClick={placeOrder}>
        Place Order
      </button>

      <hr />

      <h2>Order History</h2>

      {orders.map((order) => (

        <div
          key={order.id}
          style={{
            border: "1px solid black",
            padding: "10px",
            margin: "10px"
          }}
        >

          <h3>{order.product}</h3>

          <p>Amount: ₹{order.amount}</p>

          <p>Address: {order.address}</p>

        </div>

      ))}

    </div>
  );
}

export default Orders;