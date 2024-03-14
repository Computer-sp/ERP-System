import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Import Link component
import Dashboard from './Dashboard';
import ProductsManagement from './ProductsManagement';
import OrdersManagement from './OrdersManagement';
import './App.css'; 

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/products">Products Management</Link>
          </li>
          <li>
            <Link to="/orders">Orders Management</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/products" element={<ProductsManagement />} />
        <Route path="/orders" element={<OrdersManagement />} />
      </Routes>
    </div>
  );
}

export default App;
