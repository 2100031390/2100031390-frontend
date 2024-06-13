import React from 'react';
import './ProductTable.css'; // Import CSS for styling

const ProductTable = ({ products }) => {
  const getRandomName = () => {
    const adjectives = ['Sleek', 'Elegant', 'Modern', 'Stylish', 'Premium', 'Classic', 'Compact'];
    const nouns = ['Phone', 'Laptop', 'Tablet', 'Speaker', 'Headphones', 'Mouse', 'Keyboard'];

    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];

    return `${randomAdjective} ${randomNoun}`;
  };

  return (
    <div className="product-table-container">
      <table className="product-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Company</th>
            <th>Category</th>
            <th>Price</th>
            <th>Rating</th>
            <th>Discount</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{getRandomName()}</td>
              <td>{product.company}</td>
              <td>{product.category}</td>
              <td>${product.price}</td>
              <td>{product.rating}</td>
              <td>{product.discount}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;