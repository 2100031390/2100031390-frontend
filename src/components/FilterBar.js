import React from 'react';

const FilterBar = ({ filters, setFilters }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  return (
    <div className="filter-bar">
      <select name="category" value={filters.category} onChange={handleChange}>
        <option value="">All Categories</option>
        <option value="Phone">Phone</option>
        <option value="Computer">Computer</option>
        <option value="TV">TV</option>
        <option value="EarPhone">EarPhone</option>
        <option value="Tablet">Tablet</option>
        <option value="Charger">Charger</option>
        <option value="Mouse">Mouse</option>
        <option value="KeyPad">KeyPad</option>
        <option value="Bluetooth">Bluetooth</option>
        <option value="PenDrive">PenDrive</option>
        <option value="Remote">Remote</option>
        <option value="Speaker">Speaker</option>
        <option value="Laptop">Laptop</option>
        <option value="PC">PC</option>
        <option value="HeadSet">HeadSet</option>
      </select>

      <select name="company" value={filters.company} onChange={handleChange}>
        <option value="">All Companies</option>
        <option value="AMZ">AMZ</option>
        <option value="FLP">FLP</option>
        <option value="SNP">SNP</option>
        <option value="MYN">MYN</option>
        <option value="AZO">AZO</option>
      </select>

      <input
        type="number"
        name="minPrice"
        placeholder="Min Price"
        value={filters.minPrice}
        onChange={handleChange}
      />

      <input
        type="number"
        name="maxPrice"
        placeholder="Max Price"
        value={filters.maxPrice}
        onChange={handleChange}
      />

      <select name="sort" value={filters.sort} onChange={handleChange}>
        <option value="price">Sort by Price</option>
        <option value="rating">Sort by Rating</option>
        <option value="discount">Sort by Discount</option>
        
      </select>
    </div>
  );
};

export default FilterBar;