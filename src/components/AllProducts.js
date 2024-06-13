import React, { useState } from 'react';
import FilterBar from './FilterBar';
import ProductList from './ProductList';

const AllProducts = () => {
  const [filters, setFilters] = useState({ category: '', company: '', minPrice: 0, maxPrice: 0, sort: '' });

  return (
    <div className="all-products-page">
      <FilterBar filters={filters} setFilters={setFilters} />
      <ProductList filters={filters} />
    </div>
  );
};

export default AllProducts;