import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

interface FetchJsonOptions extends AxiosRequestConfig {
  data?: Record<string, any>;
}

async function fetchJson<T = any>(endpoint: string, options: FetchJsonOptions = {}): Promise<T> {
  try {
    const response: AxiosResponse<T> = await axios({
      ...options,
      url: `${apiUrl}${endpoint}`,
      method: options.method || 'GET',
      data: options.data,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    return response.data;
  } catch (error) {
    throw new Error(`Error: ${error.response?.data || error.message}`);
  }
}

async function fetchImage(category: string): Promise<string> {
  try {
    const response = await axios.get(`${apiUrl}/products/category/${category}`, {
      responseType: 'arraybuffer',
    });

    const base64Image = Buffer.from(response.data, 'binary').toString('base64');
    const imageUrl = `data:image/png;base64,${base64Image}`;

    return imageUrl;
  } catch (error) {
    console.error('Error fetching image:', error);
    throw new Error('Error fetching image');
  }
}

export { apiUrl, fetchJson, fetchImage };
