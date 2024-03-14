import React, { useState } from 'react';
import './App.css';

// Mock data for products
const mockProducts = [
  { id: 1, name: 'Product A', category: 'Category 1', price: 10, stock: 50 },
  { id: 2, name: 'Product B', category: 'Category 2', price: 20, stock: 30 },
  { id: 3, name: 'Product C', category: 'Category 1', price: 15, stock: 20 },
];

function ProductsManagement() {
  // State to manage user input for new product
  const [newProduct, setNewProduct] = useState({ name: '', category: '', price: '', stock: '' });
  // State to manage existing products
  const [products, setProducts] = useState(mockProducts);

  // Function to handle changes in input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  // Function to add a new product
  const addProduct = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    const productId = products.length + 1; // Generate a unique ID for the new product
    const newProductWithId = { ...newProduct, id: productId };
    setProducts([...products, newProductWithId]); // Add the new product to the list of products
    setNewProduct({ name: '', category: '', price: '', stock: '' }); // Reset the newProduct state
  };

  // Function to delete a product
  const deleteProduct = (productId) => {
    const updatedProducts = products.filter((product) => product.id !== productId);
    setProducts(updatedProducts);
  };

  return (
    <div className="products-container">
      <h1 className="section-title">Products Management</h1>
      {/* Form for adding a new product */}
      <form onSubmit={addProduct}>
        <input type="text" name="name" placeholder="Name" value={newProduct.name} onChange={handleChange} />
        <input type="text" name="category" placeholder="Category" value={newProduct.category} onChange={handleChange} />
        <input type="number" name="price" placeholder="Price" value={newProduct.price} onChange={handleChange} />
        <input type="number" name="stock" placeholder="Stock Quantity" value={newProduct.stock} onChange={handleChange} />
        <button type="submit">Add Product</button>
      </form>
      {/* List of existing products */}
      <ul className="products-list">
        {products.map((product) => (
          <li key={product.id} className="product-item">
            <span className="product-detail">Name: {product.name}</span>
            <span className="product-detail">Category: {product.category}</span>
            <span className="product-detail">Price: {product.price}</span>
            <span className="product-detail">Stock Quantity: {product.stock}</span>
            <button className="delete-btn" onClick={() => deleteProduct(product.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductsManagement;
