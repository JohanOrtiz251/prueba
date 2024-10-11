import React from 'react';
import { useQuery } from 'react-query';
import Carousel from '../components/Carousel';
import ProductCard from '../components/ProductCard';
import { fetchProducts, fetchCategories } from '../api/products';
import { Product, Category } from '../types';

const Home: React.FC = () => {
  const { data: products, isLoading: isLoadingProducts } = useQuery<Product[]>('products', fetchProducts);
  const { data: categories, isLoading: isLoadingCategories } = useQuery<Category[]>('categories', fetchCategories);

  const carouselImages = [
    'https://images.unsplash.com/photo-1441986300917-64674bd600d8',
    'https://images.unsplash.com/photo-1472851294608-062f824d29cc',
    'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04',
  ];

  if (isLoadingProducts || isLoadingCategories) {
    return <div className="text-center py-10">Cargando...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Carousel images={carouselImages} />
      
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Categorías</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories?.map((category) => (
            <div key={category.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{category.name}</h3>
            </div>
          ))}
        </div>
      </section>
      
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Productos destacados</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products?.slice(0, 8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;