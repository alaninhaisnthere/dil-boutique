import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const ImagePage: React.FC = () => {
  const [imageURLs, setImageURLs] = useState<string[]>([]);

  useEffect(() => {
    const fetchImageURLs = async () => {
      try {
        const response = await fetch('/api/products');
        const data = await response.json();
        const urls = data.map((product) => product.imageUrl);
        setImageURLs(urls);
      } catch (error) {
        console.error('Erro ao obter URLs das imagens:', error);
      }
    };

    fetchImageURLs();
  }, []);

  return (
    <div>
      <h1>Teste de Imagens</h1>
      {imageURLs.map((url, index) => (
        <div key={index}>
          <Image
            src={url}
            alt={`Descrição da Imagem ${index}`}
            width={500}
            height={300}
          />
        </div>
      ))}
    </div>
  );
};

export default ImagePage;
