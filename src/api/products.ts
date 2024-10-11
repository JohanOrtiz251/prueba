import { Product, Category } from '../types';

// Simulated product data
const products: Product[] = [
  {
    id: '1',
    name: 'Smartphone X',
    description: 'Un smartphone de última generación con cámara de alta resolución.',
    price: 699.99,
    image: 'https://source.unsplash.com/random/400x300?smartphone',
    category: 'electronics',
  },
  {
    id: '2',
    name: 'Laptop Pro',
    description: 'Potente laptop para profesionales y gamers.',
    price: 1299.99,
    image: 'https://source.unsplash.com/random/400x300?laptop',
    category: 'electronics',
  },
  {
    id: '3',
    name: 'Auriculares Inalámbricos',
    description: 'Auriculares con cancelación de ruido y gran calidad de sonido.',
    price: 199.99,
    image: 'https://source.unsplash.com/random/400x300?headphones',
    category: 'electronics',
  },
  {
    id: '4',
    name: 'Camiseta Casual',
    description: 'Camiseta cómoda para el día a día.',
    price: 24.99,
    image: 'https://source.unsplash.com/random/400x300?tshirt',
    category: 'clothing',
  },
  {
    id: '5',
    name: 'Zapatillas Deportivas',
    description: 'Zapatillas ideales para correr y hacer ejercicio.',
    price: 89.99,
    image: 'https://source.unsplash.com/random/400x300?sneakers',
    category: 'clothing',
  },
  {
    id: '6',
    name: 'Reloj Inteligente',
    description: 'Reloj con múltiples funciones y monitoreo de salud.',
    price: 249.99,
    image: 'https://source.unsplash.com/random/400x300?smartwatch',
    category: 'electronics',
  },
];

const categories: Category[] = [
  { id: 'electronics', name: 'Electrónica' },
  { id: 'clothing', name: 'Ropa' },
  { id: 'books', name: 'Libros' },
  { id: 'home', name: 'Hogar' },
];

export const fetchProducts = (): Promise<Product[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(products), 500);
  });
};

export const fetchCategories = (): Promise<Category[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(categories), 500);
  });
};

export const fetchProductById = (id: string): Promise<Product | undefined> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(products.find(product => product.id === id)), 500);
  });
};