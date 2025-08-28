import React from 'react';
import { Users, Award, Target, Heart } from 'lucide-react';

const AboutPage = () => {
  const values = [
    {
      icon: <Heart className="w-8 h-8 text-orange-600" />,
      title: "Passion for Quality",
      description: "Every jar is made with love and attention to detail"
    },
    {
      icon: <Users className="w-8 h-8 text-orange-600" />,
      title: "Family Tradition",
      description: "Recipes passed down through generations of our family"
    },
    {
      icon: <Award className="w-8 h-8 text-orange-600" />,
      title: "Premium Ingredients",
      description: "We source only the finest, freshest ingredients"
    },
    {
      icon: <Target className="w-8 h-8 text-orange-600" />,
      title: "Customer Satisfaction",
      description: "Your happiness is our primary goal"
    }
  ];

  return (
    <div className="py-16 bg-white min-h-screen">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            About Ghar Ka Achar
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            For over a decade, we've been crafting authentic Nepalese pickles using traditional recipes 
            and premium ingredients, bringing the taste of home to families across Nepal.
          </p>
        </div>

        {/* Story Section */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
              Our Story
            </h2>
            <div className="prose prose-lg text-gray-600 max-w-none">
              <p className="mb-6">
                Ghar Ka Achar began as a small family business in Kathmandu, born from our grandmother's 
                legendary pickle recipes that had been delighting our family for generations. What started 
                in our home kitchen with just a few jars for friends and neighbors has grown into Nepal's 
                most trusted pickle brand.
              </p>
              <p className="mb-6">
                Our journey started when we realized that authentic, homemade pickles were becoming rare 
                in the market. Most commercial pickles were filled with preservatives and lacked the 
                authentic taste that defines true Nepalese achar. We decided to change that.
              </p>
              <p>
                Today, we continue to honor our grandmother's legacy by using the same traditional methods 
                and recipes, ensuring that every jar carries the authentic taste of home-made achar that 
                our customers love and trust.
              </p>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-orange-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-orange-600 mb-4">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              To preserve and share the authentic taste of traditional Nepalese pickles while 
              maintaining the highest standards of quality and hygiene. We strive to bring 
              families together through the shared love of authentic flavors.
            </p>
          </div>
          <div className="bg-red-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-red-600 mb-4">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              To become the most trusted name in authentic Nepalese pickles, expanding our reach 
              while never compromising on quality or tradition. We envision a future where every 
              Nepalese household has access to genuine, homemade-style achar.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-800">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-2xl p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Our Achievements
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">5000+</div>
              <div className="opacity-90">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">15+</div>
              <div className="opacity-90">Unique Recipes</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">10</div>
              <div className="opacity-90">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">100%</div>
              <div className="opacity-90">Natural Ingredients</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;