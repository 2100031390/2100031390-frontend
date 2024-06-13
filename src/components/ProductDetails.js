import React from 'react';
import { useParams } from 'react-router-dom';
import ProductDetail from '../components/ProductDetails';

const ProductDetailPage = () => {
  const { id } = useParams();

  return (
    <div className="product-detail-page">
      <ProductDetail productId={id} />
    </div>
  );
};

export default ProductDetailPage;