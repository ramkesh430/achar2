import React from 'react';
import { Star } from 'lucide-react';

const ProductCard = ({ product, onProductClick }) => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  const renderSpiceLevel = (level) => {
    return Array.from({ length: 5 }, (_, i) => (
      <div
        key={i}
        className={`w-2 h-2 rounded-full ${
          i < level ? 'bg-red-500' : 'bg-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 bg-white rounded-full px-2 py-1 text-sm font-bold text-orange-600">
          {product.price}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-800">{product.name}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-1">
            {renderStars(product.rating)}
            <span className="ml-2 text-sm text-gray-600">({product.rating})</span>
          </div>
          <div className="flex items-center space-x-1">
            <span className="text-sm text-gray-600">Spice:</span>
            {renderSpiceLevel(product.spiceLevel)}
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {product.ingredients.slice(0, 3).map((ingredient, index) => (
            <span
              key={index}
              className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-full"
            >
              {ingredient}
            </span>
          ))}
          {product.ingredients.length > 3 && (
            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
              +{product.ingredients.length - 3} more
            </span>
          )}
        </div>

        <button
          onClick={() => onProductClick(product)}
          className="w-full bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 transition-colors font-semibold"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default ProductCard;