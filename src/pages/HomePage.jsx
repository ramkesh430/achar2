import React from 'react';
import { ArrowRight, Users, Award, Truck, Shield } from 'lucide-react';

const HomePage = ({ setCurrentPage }) => {
  const features = [
    {
      icon: <Shield className="w-8 h-8 text-green-600" />,
      title: "100% Natural",
      description: "No artificial preservatives or colors, just pure natural ingredients"
    },
    {
      icon: <Award className="w-8 h-8 text-green-600" />,
      title: "Traditional Recipe",
      description: "Authentic family recipes passed down through generations"
    },
    {
      icon: <Truck className="w-8 h-8 text-green-600" />,
      title: "Fresh Delivery",
      description: "Direct delivery from our kitchen to your doorstep"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-500 to-green-600 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Authentic Nepalese Pickles
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              From our kitchen to your table - Experience the true taste of Nepal
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setCurrentPage('products')}
                className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
              >
                <span>Shop Now</span>
                <ArrowRight size={20} />
              </button>
              <button 
                onClick={() => setCurrentPage('about')}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-600 transition-colors"
              >
                Our Story
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">5000+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
              <div className="text-gray-600">Pickle Varieties</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">10</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">4.8</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why Choose Ghar Ka Achar?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We bring you the finest quality pickles made with love and traditional methods
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Taste Tradition?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Order now and get authentic Nepalese pickles delivered to your home
          </p>
          <button 
            onClick={() => setCurrentPage('products')}
            className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
          >
            <span>View Products</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;