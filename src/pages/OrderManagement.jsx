import { useState } from "react";

function OrderManagement() {

  const [orders, setOrders] = useState([
    {
      id: 1,
      product: "Laptop",
      amount: 50000,
      status: "Pending"
    },
    {
      id: 2,
      product: "Mobile",
      amount: 20000,
      status: "Shipped"
    }
  ]);

  const updateStatus = (id, newStatus) => {

    setOrders(

      orders.map(order =>

        order.id === id
          ? {
              ...order,
              status: newStatus
            }
          : order

      )

    );

  };

  return (
    <div style={{ padding: "20px" }}>

      <h1>Order Management</h1>

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

          <p>Status: {order.status}</p>

<p>
  Tracking:
  {
    order.status === "Pending"
      ? " Order Received"
      : order.status === "Shipped"
      ? " On The Way"
      : " Delivered Successfully"
  }
</p>

          <select
            value={order.status}
            onChange={(e) =>
              updateStatus(
                order.id,
                e.target.value
              )
            }
          >
            <option value="Pending">
              Pending
            </option>

            <option value="Shipped">
              Shipped
            </option>

            <option value="Delivered">
              Delivered
            </option>
          </select>

        </div>

      ))}

    </div>
  );
}

export default OrderManagement;