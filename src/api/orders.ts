import { Order } from '../types';

// Simulated order data
const orders: Order[] = [
  {
    id: '1',
    customerName: 'Juan Pérez',
    total: 799.98,
    status: 'pendiente',
    items: [
      { id: '1', name: 'Smartphone X', price: 699.99, quantity: 1 },
      { id: '3', name: 'Auriculares Inalámbricos', price: 199.99, quantity: 1 },
    ],
  },
  {
    id: '2',
    customerName: 'María García',
    total: 1299.99,
    status: 'en proceso',
    items: [
      { id: '2', name: 'Laptop Pro', price: 1299.99, quantity: 1 },
    ],
  },
  {
    id: '3',
    customerName: 'Carlos Rodríguez',
    total: 339.97,
    status: 'enviado',
    items: [
      { id: '4', name: 'Camiseta Casual', price: 24.99, quantity: 2 },
      { id: '5', name: 'Zapatillas Deportivas', price: 89.99, quantity: 1 },
    ],
  },
];

export const fetchOrders = (): Promise<Order[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(orders), 500);
  });
};

export const updateOrderStatus = (orderId: string, newStatus: string): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const orderIndex = orders.findIndex(order => order.id === orderId);
      if (orderIndex !== -1) {
        orders[orderIndex].status = newStatus;
      }
      resolve();
    }, 500);
  });
};