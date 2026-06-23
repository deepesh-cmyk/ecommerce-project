import products from "../data/products";

function CreatorDashboard() {

  const totalProducts = products.length;

  const totalCategories =
    [...new Set(products.map(product => product.category))]
      .length;

  return (
    <div style={{ padding: "20px" }}>

      <h1>Creator Dashboard</h1>

      <hr />

      <h2>Statistics</h2>

      <div
        style={{
          display: "flex",
          gap: "20px",
          marginBottom: "20px"
        }}
      >

        <div
          style={{
            border: "1px solid black",
            padding: "20px"
          }}
        >
          <h3>Total Products</h3>
          <p>{totalProducts}</p>
        </div>

        <div
          style={{
            border: "1px solid black",
            padding: "20px"
          }}
        >
          <h3>Total Categories</h3>
          <p>{totalCategories}</p>
        </div>

      </div>

      <h2>Product List</h2>

      {products.map((product) => (
        <div
          key={product.id}
          style={{
            border: "1px solid black",
            margin: "10px 0",
            padding: "10px"
          }}
        >
          <h3>{product.name}</h3>
          <p>₹{product.price}</p>
          <p>{product.category}</p>
        </div>
      ))}

    </div>
  );
}

export default CreatorDashboard;