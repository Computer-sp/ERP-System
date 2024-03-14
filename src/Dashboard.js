import React from 'react';
import { Link } from 'react-router-dom';
import { getProductsCount, getOrdersCount } from './api'; // Adjust import according to your API setup

function Dashboard() {
  const productsCount = getProductsCount(); // Mock function to get products count
  const ordersCount = getOrdersCount(); // Mock function to get orders count

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Total Products: {productsCount}</p>
      <p>Total Orders: {ordersCount}</p>
      <Link to="/products">Products Management</Link>
      <br />
      <Link to="/orders">Orders Management</Link>
    </div>
  );
}

export default Dashboard;
