import React from 'react';
import LoginComponent from '../components/LoginComponent';
import { fetchJson } from '../utils/api';
import { useRouter } from 'next/router';

const LoginPage: React.FC = () => {
  const router = useRouter();

  const handleLogin = async (identifier: string, password: string) => {
    try {
      const data = await fetchJson('/user/login', {
        method: 'POST',
        data: { identifier, password },
      });

      console.log(data);

      router.push('/');
    } catch (error) {
      console.error('Error during login:', error.message);
    }
  };

  return <LoginComponent onLogin={handleLogin} />;
};

export default LoginPage;
