import React from 'react';
import { useQuery } from 'react-query';
import { fetchImage } from '../utils/api';

interface ProductsComponentProps {
  products: Product[];
}

interface Product {
  id: number;
  name: string;
  category: string;
}

const ProductItem: React.FC<{ product: Product }> = ({ product }) => {
  const { data: imageUrl } = useQuery<string>(['image', product.category], () => fetchImage(product.category));

  return (
    <li key={product.id}>
      <img src={imageUrl} alt={product.name} style={{ maxWidth: '100px', maxHeight: '100px' }} />
      <p>{product.name}</p>
    </li>
  );
};

const ProductsComponent: React.FC<ProductsComponentProps> = ({ products }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <ul>
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
};

export default ProductsComponent;
