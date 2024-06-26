// src/api.js
import axios from 'axios';

const API_BASE_URL = 'http://20.244.56.144/test';

export const getProducts = async (company, category, top, minPrice, maxPrice) => {
    const url = `${API_BASE_URL}/companies/${company}/categories/${category}/products?top=${top}&minPrice=${minPrice}&maxPrice=${maxPrice}`;
    try {
        const response = await axios.get(url);
        return response.data.products; // Assuming products is an array in the response
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
};
