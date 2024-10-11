import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';
import Breadcrumbs from '../components/Breadcrumbs';

const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const { cartItems, getTotalPrice, clearCart } = useCart();
  const { user } = useAuth();
  const [shippingAddress, setShippingAddress] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para procesar el pedido
    alert('Pedido realizado con éxito');
    clearCart();
    navigate('/');
  };

  if (cartItems.length === 0) {
    navigate('/cart');
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs />
      <h1 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">Finalizar compra</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Información de envío</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Nombre completo
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
                defaultValue={user?.displayName || ''}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Correo electrónico
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
                defaultValue={user?.email || ''}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="address" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Dirección de envío
              </label>
              <textarea
                id="address"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                rows={3}
                required
                value={shippingAddress}
                onChange={(e) => setShippingAddress(e.target.value)}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-300"
            >
              Realizar pedido
            </button>
          </form>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Resumen del pedido</h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between mb-4">
                <div>
                  <h3 className="text-gray-800 dark:text-white">{item.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300">Cantidad: {item.quantity}</p>
                </div>
                <span className="text-gray-800 dark:text-white">${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <div className="border-t border-gray-200 dark:border-gray-700 my-4"></div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600 dark:text-gray-300">Subtotal</span>
              <span className="text-gray-800 dark:text-white">${getTotalPrice().toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600 dark:text-gray-300">Envío</span>
              <span className="text-gray-800 dark:text-white">Gratis</span>
            </div>
            <div className="border-t border-gray-200 dark:border-gray-700 my-4"></div>
            <div className="flex justify-between">
              <span className="text-lg font-semibold text-gray-800 dark:text-white">Total</span>
              <span className="text-lg font-semibold text-gray-800 dark:text-white">${getTotalPrice().toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;