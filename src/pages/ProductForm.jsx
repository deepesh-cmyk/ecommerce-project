import { useState } from "react";

function ProductForm() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !price || !category) {
      alert("Please fill all fields");
      return;
    }

    console.log({
      name,
      price,
      category,
      description,
    });

    alert("Product Added Successfully");

    setName("");
    setPrice("");
    setCategory("");
    setDescription("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Add Product</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br />
        <br />

        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <br />
        <br />

        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <br />
        <br />

        <textarea
          placeholder="Description"
          rows="4"
          cols="40"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <br />
        <br />

        <input type="file" />

        <br />
        <br />

        <button type="submit">
          Add Product
        </button>
      </form>
    </div>
  );
}

export default ProductForm;