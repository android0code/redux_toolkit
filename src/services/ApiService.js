// write by "Amrik"
import axios from 'axios';

class ApiService {
  constructor(baseURL) {
    this.client = axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  // Set custom headers dynamically
  setHeaders(headers) {
    this.client.defaults.headers = {
      ...this.client.defaults.headers,
      ...headers,
    };
  }

  // GET Request
  async get(url, params = {}, config = {}) {
    try {
      const response = await this.client.get(url, {params, ...config});
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  // POST Request
  async post(url, data = {}, config = {}) {
    try {
      const response = await this.client.post(url, data, {...config});
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  // PUT Request
  async put(url, data = {}, config = {}) {
    try {
      const response = await this.client.put(url, data, {...config});
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  // DELETE Request
  async delete(url, config = {}) {
    try {
      const response = await this.client.delete(url, {...config});
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  // Error handler
  handleError(error) {
    if (error.response) {
      // Server responded with a status outside the 2xx range
      console.error('API Error Response:', error.response);
      throw new Error(error.response.data.message || 'An error occurred');
    } else if (error.request) {
      // No response received
      console.error('API No Response:', error.request);
      throw new Error('No response received from the server');
    } else {
      // Request setup error
      console.error('API Request Setup Error:', error.message);
      throw new Error(error.message);
    }
  }
}

// Export a singleton instance with a base URL
const api = new ApiService('https://jsonplaceholder.typicode.com');

export default api;
