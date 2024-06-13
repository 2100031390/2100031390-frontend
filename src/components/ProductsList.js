// src/components/ProductList.js
import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../utils/api'; // Adjust path as per your project structure
import ProductCard from './ProductCard';
import './ProductList.css'; // Importing CSS for styling

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortCriteria, setSortCriteria] = useState('rating'); // Default sorting by rating
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCompany, setSelectedCompany] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  // Define dropdown options
  const companies = ["AMZ", "FLP", "SNP", "MYN", "AZO"];
  const categories = ["Phone", "Computer", "TV", "EarPhone", "Tablet", "Charger", "Mouse", "KeyPad", "Bluetooth", "PenDrive", "Remote", "Speaker", "Laptop", "PC", "HeadSet"];

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        const data = await fetchProducts(selectedCategory, selectedCompany); // Pass selected category and company to API call
        console.log('Fetched products:', data);
        setProducts(data); // Set original products
        setFilteredProducts(data); // Initialize filtered products with all products
      } catch (error) {
        setError('Failed to fetch products. Please try again later.');
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, [selectedCategory, selectedCompany]);

  const handleSortChange = (event) => {
    const selectedCriteria = event.target.value;
    setSortCriteria(selectedCriteria);
    const sorted = sortProducts(filteredProducts, selectedCriteria);
    setFilteredProducts(sorted);
  };

  const handleCompanyChange = (event) => {
    const selectedCompany = event.target.value;
    setSelectedCompany(selectedCompany);
  };

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    setSelectedCategory(selectedCategory);
  };

  const sortProducts = (products, criteria) => {
    return products.slice().sort((a, b) => {
      switch (criteria) {
        case 'price':
          return a.price - b.price;
        case 'rating':
          return b.rating - a.rating;
        case 'discount':
          return b.discount - a.discount;
        default:
          return 0;
      }
    });
  };

  if (loading) {
    return <div>Loading products...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="product-list-container">
      <div className="filters">
        <label htmlFor="company">Select Company:</label>
        <select id="company" value={selectedCompany} onChange={handleCompanyChange}>
          <option value="">All</option>
          {companies.map(company => (
            <option key={company} value={company}>{company}</option>
          ))}
        </select>

        <label htmlFor="category">Select Category:</label>
        <select id="category" value={selectedCategory} onChange={handleCategoryChange}>
          <option value="">All</option>
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>

      <div className="sort-options">
        <label htmlFor="sort">Sort by:</label>
        <select id="sort" value={sortCriteria} onChange={handleSortChange}>
          <option value="rating">Rating</option>
          <option value="price">Price</option>
          <option value="discount">Discount</option>
        </select>
      </div>

      <div className="product-list">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
