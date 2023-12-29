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

export { apiUrl, fetchJson };
