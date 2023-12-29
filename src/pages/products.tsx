import React from 'react';
import { GetServerSideProps } from 'next';
import ProductsComponent from '../components/ProductComponent';
import { fetchJson } from '../utils/api';

interface Product {
  id: number;
  name: string;
  category: string;
}

interface ProductsPageProps {
  products: Product[];
}

const ProductsPage: React.FC<ProductsPageProps> = ({ products }) => {
  return (
    <div>
      <ProductsComponent products={products} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<ProductsPageProps> = async () => {
  try {
    const products = await fetchJson<Product[]>('/products');
    return {
      props: { products },
    };
  } catch (error) {
    console.error('Error fetching products:', error);
    return {
      props: { products: [] },
    };
  }
};

export default ProductsPage;
