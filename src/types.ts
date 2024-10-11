export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export interface Category {
  id: string;
  name: string;
}

export interface User {
  uid: string;
  email: string;
  displayName: string;
  isAdmin: boolean;
}

export interface Order {
  id: string;
  customerName: string;
  total: number;
  status: string;
  items: {
    id: string;
    name: string;
    price: number;
    quantity: number;
  }[];
}