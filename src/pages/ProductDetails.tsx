import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { ShoppingCart, Heart } from 'lucide-react';
import { fetchProductById } from '../api/products';
import { useCart } from '../contexts/CartContext';
import Breadcrumbs from '../components/Breadcrumbs';
import ProductCard from '../components/ProductCard';
import { Product } from '../types';

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: product, isLoading } = useQuery<Product>(['product', id], () => fetchProductById(id!));
  const { addToCart } = useCart();

  if (isLoading) {
    return <div className="text-center py-10">Cargando...</div>;
  }

  if (!product) {
    return <div className="text-center py-10">Producto no encontrado</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div className="relative">
          <img src={product.image} alt={product.name} className="w-full h-auto rounded-lg shadow-lg" />
          <button className="absolute top-4 right-4 p-2 bg-white dark:bg-gray-800 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-300">
            <Heart className="text-red-500" size={24} />
          </button>
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">{product.name}</h1>
          <p className="text-xl font-semibold mb-4 text-indigo-600 dark:text-indigo-400">${product.price.toFixed(2)}</p>
          <p className="text-gray-600 dark:text-gray-300 mb-6">{product.description}</p>
          <button
            onClick={() => addToCart(product)}
            className="flex items-center justify-center w-full py-3 px-6 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-300"
          >
            <ShoppingCart size={20} className="mr-2" />
            Agregar al carrito
          </button>
        </div>
      </div>
      
      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Productos relacionados</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* Aquí irían los productos relacionados */}
          {/* Por ahora, usaremos productos de ejemplo */}
          {[...Array(4)].map((_, index) => (
            <ProductCard
              key={index}
              product={{
                id: `related-${index}`,
                name: `Producto relacionado ${index + 1}`,
                description: 'Descripción del producto relacionado',
                price: 99.99,
                image: `https://source.unsplash.com/random/400x300?product=${index}`,
              }}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;