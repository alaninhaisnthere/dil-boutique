import Link from 'next/link';
import React from 'react';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/login">
        Login
      </Link>
    </div>
  );
};

export default Home;