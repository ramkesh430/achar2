import React, { useState } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';

const Header = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', id: 'home' },
    { name: 'Products', id: 'products' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-orange-600">
            🥒 Ghar Ka Achar
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`font-medium transition-colors ${
                  currentPage === item.id
                    ? 'text-orange-600 border-b-2 border-orange-600'
                    : 'text-gray-700 hover:text-orange-600'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="flex items-center space-x-2 bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors">
              <ShoppingCart size={20} />
              <span>Cart</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <div className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`text-left py-2 px-4 rounded ${
                    currentPage === item.id
                      ? 'bg-orange-100 text-orange-600'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <button className="flex items-center space-x-2 bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors mt-2">
                <ShoppingCart size={20} />
                <span>Cart</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;