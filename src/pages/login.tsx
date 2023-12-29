import React, { useState } from 'react';
import LoginComponent from '../components/LoginComponent';
import ProductsComponent from '../components/ProductComponent';
import { fetchJson } from '../utils/api';
import { useRouter } from 'next/router';

const LoginPage: React.FC = () => {
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>([]);

  const handleLogin = async (identifier: string, password: string) => {
    try {
      const data = await fetchJson('/user/login', {
        method: 'POST',
        data: { identifier, password },
      });

      console.log(data);

      const productsData = await fetchJson('/products');
      setProducts(productsData);

      router.push('/');
    } catch (error) {
      console.error('Error during login:', error.message);
    }
  };

  return (
    <div>
      <LoginComponent onLogin={handleLogin} />
      {products.length > 0 && <ProductsComponent products={products} />}
    </div>
  );
};

export default LoginPage;