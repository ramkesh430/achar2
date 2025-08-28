import React, { useState } from 'react';
import { products } from '../data/products.js';
import ProductCard from '../components/ProductCard.jsx';
import ProductModal from '../components/ProductModal.jsx';

const ProductsPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Premium Pickle Collection
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Handcrafted with authentic Nepalese recipes and the finest ingredients
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onProductClick={handleProductClick}
            />
          ))}
        </div>

        <ProductModal
          product={selectedProduct}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      </div>
    </div>
  );
};

export default ProductsPage;