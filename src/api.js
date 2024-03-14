// Mock data for products
export const productsData = [
    { id: 1, name: 'Product 1', category: 'Category A', price: 10.99, stockQuantity: 100 },
    { id: 2, name: 'Product 2', category: 'Category B', price: 20.99, stockQuantity: 50 },
    { id: 3, name: 'Product 3', category: 'Category C', price: 15.99, stockQuantity: 75 },
    // Add more mock product data as needed
  ];
  
  // Mock data for orders
  export const ordersData = [
    { id: 1, orderId: 'ORD001', customerName: 'Customer 1', orderDate: '2024-03-15', status: 'Pending' },
    { id: 2, orderId: 'ORD002', customerName: 'Customer 2', orderDate: '2024-03-16', status: 'Shipped' },
    { id: 3, orderId: 'ORD003', customerName: 'Customer 3', orderDate: '2024-03-17', status: 'Delivered' },
    // Add more mock order data as needed
  ];
  
  // Function to get the count of products
  export const getProductsCount = () => productsData.length;
  
  // Function to get the count of orders
  export const getOrdersCount = () => ordersData.length;
  
  // Function to get the list of orders
  export const getOrders = () => ordersData;
  
  // Function to delete an order
  export const deleteOrder = (orderId) => {
  };
  
  // Function to get the list of products
  export const getProducts = () => productsData;
  
  // Function to delete a product
  export const deleteProduct = (productId) => {
  };
  