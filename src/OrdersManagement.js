import React, { useState } from 'react';
import './App.css';

// Mock data for orders
const mockOrders = [
  { id: 1, customer: 'Akshay', date: '2024-03-15', status: 'Pending' },
  { id: 2, customer: 'Rahul', date: '2024-03-16', status: 'Shipped' },
  { id: 3, customer: 'Aarati', date: '2024-03-17', status: 'Delivered' },
];

function OrdersManagement() {
  const [orderIdInput, setOrderIdInput] = useState('');
  const [selectedOrder, setSelectedOrder] = useState(null); // State variable to store the selected order
  const [orders, setOrders] = useState(mockOrders);

  // Function to handle input change
  const handleInputChange = (event) => {
    setOrderIdInput(event.target.value);
  };

  // Function to delete an order
  const deleteOrder = () => {
    const updatedOrders = orders.filter((order) => order.id !== parseInt(orderIdInput));
    setOrders(updatedOrders);
    console.log(`Order with ID ${orderIdInput} deleted`);
    setOrderIdInput(''); // Clear input field after deletion
    setSelectedOrder(null); // Clear selected order after deletion
  };

  // Function to display order info
  const displayOrderInfo = () => {
    const selected = orders.find((order) => order.id === parseInt(orderIdInput));
    setSelectedOrder(selected);
  };

  return (
    <div className="orders-container">
      <h1 className="section-title">Orders Management</h1>
      <div className="input-container">
        <input
          type="number"
          placeholder="Enter order ID"
          value={orderIdInput}
          onChange={handleInputChange}
        />
        <button className="delete-btn" onClick={deleteOrder}>Delete</button>
        <button onClick={displayOrderInfo}>Show Order Info</button> {/* Button to display order info */}
      </div>
      {selectedOrder && ( // Display order info if selectedOrder is not null
        <div className="order-info">
          <h2>Order Details</h2>
          <p>Order ID: {selectedOrder.id}</p>
          <p>Customer: {selectedOrder.customer}</p>
          <p>Date: {selectedOrder.date}</p>
          <p>Status: {selectedOrder.status}</p>
        </div>
      )}
      <ul className="orders-list">
        {orders.map((order) => (
          <li key={order.id} className="order-item">
            <span className="order-detail">Order ID: {order.id}</span>
            <span className="order-detail">Customer: {order.customer}</span>
            <span className="order-detail">Date: {order.date}</span>
            <span className="order-detail">Status: {order.status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OrdersManagement;
