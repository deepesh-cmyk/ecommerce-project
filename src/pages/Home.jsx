import { useState } from "react";
import products from "../data/products";
function Home() {
    const [category, setCategory] = useState("All");
  return (
    
    <div>

      <h1>Products</h1>
      <h2>Categories</h2>
      <div>
        <button onClick={() => setCategory("All")}>All</button>
        <button onClick={() => setCategory("Electronics")}>Electronics</button>
        <button onClick={() => setCategory("Fashion")}>Fashion</button>
      </div>
      {products.filter((product) => category === "All" || product.category === category).map((product) => (
        <div
  key={product.id}
  style={{
    border: "1px solid black",
    padding: "10px",
    margin: "10px"
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


export default Home;