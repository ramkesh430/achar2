import React from 'react';
import { X, Star, ShoppingCart } from 'lucide-react';

const ProductModal = ({ product, isOpen, onClose }) => {
  if (!isOpen || !product) return null;

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  const renderSpiceLevel = (level) => {
    return Array.from({ length: 5 }, (_, i) => (
      <div
        key={i}
        className={`w-3 h-3 rounded-full ${
          i < level ? 'bg-red-500' : 'bg-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors"
          >
            <X size={20} />
          </button>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover rounded-t-xl"
          />
        </div>
        
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-800">{product.name}</h2>
            <div className="text-2xl font-bold text-orange-600">{product.price}</div>
          </div>

          <div className="flex items-center space-x-4 mb-4">
            <div className="flex items-center space-x-1">
              {renderStars(product.rating)}
              <span className="ml-2 text-gray-600">({product.rating})</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-gray-600">Spice Level:</span>
              <div className="flex space-x-1">
                {renderSpiceLevel(product.spiceLevel)}
              </div>
            </div>
          </div>

          <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3 text-gray-800">Ingredients:</h3>
            <div className="flex flex-wrap gap-2">
              {product.ingredients.map((ingredient, index) => (
                <span
                  key={index}
                  className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {ingredient}
                </span>
              ))}
            </div>
          </div>

          <div className="flex space-x-4">
            <button className="flex-1 bg-orange-600 text-white py-3 px-6 rounded-lg hover:bg-orange-700 transition-colors font-semibold flex items-center justify-center space-x-2">
              <ShoppingCart size={20} />
              <span>Add to Cart</span>
            </button>
            <button 
              onClick={onClose}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-semibold"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;