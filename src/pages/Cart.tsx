import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import Breadcrumbs from '../components/Breadcrumbs';

const Cart: React.FC = () => {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs />
        <div className="text-center py-10">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Tu carrito está vacío</h2>
          <Link to="/" className="text-indigo-600 dark:text-indigo-400 hover:underline">
            Continuar comprando
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs />
      <h1 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">Tu carrito</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center border-b border-gray-200 dark:border-gray-700 py-4">
              <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-md" />
              <div className="ml-4 flex-grow">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{item.name}</h3>
                <p className="text-gray-600 dark:text-gray-300">${item.price.toFixed(2)}</p>
                <div className="flex items-center mt-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="p-1 bg-gray-200 dark:bg-gray-700 rounded-full"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="mx-2 text-gray-800 dark:text-white">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="p-1 bg-gray-200 dark:bg-gray-700 rounded-full"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="p-2 text-red-500 hover:text-red-700"
              >
                <Trash2 size={20} />
              </button>
            </div>
          ))}
        </div>
        <div className="md:col-span-1">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Resumen del pedido</h2>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600 dark:text-gray-300">Subtotal</span>
              <span className="text-gray-800 dark:text-white">${getTotalPrice().toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600 dark:text-gray-300">Envío</span>
              <span className="text-gray-800 dark:text-white">Gratis</span>
            </div>
            <div className="border-t border-gray-200 dark:border-gray-700 my-4"></div>
            <div className="flex justify-between mb-4">
              <span className="text-lg font-semibold text-gray-800 dark:text-white">Total</span>
              <span className="text-lg font-semibold text-gray-800 dark:text-white">
                ${getTotalPrice().toFixed(2)}
              </span>
            </div>
            <Link
              to="/checkout"
              className="block w-full py-3 px-4 bg-indigo-600 text-white text-center rounded-md hover:bg-indigo-700 transition duration-300"
            >
              Proceder al pago
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;