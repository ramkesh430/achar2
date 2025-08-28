import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-orange-400 mb-4">
              🥒 Ghar Ka Achar
            </h3>
            <p className="text-gray-300 mb-4">
              Bringing authentic Nepalese pickles to your table with traditional recipes and premium quality ingredients.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-6 h-6 text-gray-400 hover:text-orange-400 cursor-pointer" />
              <Instagram className="w-6 h-6 text-gray-400 hover:text-orange-400 cursor-pointer" />
              <Twitter className="w-6 h-6 text-gray-400 hover:text-orange-400 cursor-pointer" />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-orange-400">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400">Products</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-orange-400">Mango Pickle</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400">Mixed Vegetable</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400">Lemon Pickle</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400">Garlic Pickle</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-orange-400" />
                <span className="text-gray-300">Kathmandu, Nepal</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-orange-400" />
                <span className="text-gray-300">+977-1-4567890</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-orange-400" />
                <span className="text-gray-300">info@gharkaachar.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 Ghar Ka Achar. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-2">
            Powered by <span className="text-orange-400 font-semibold">Kontent Kreation LLC</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;