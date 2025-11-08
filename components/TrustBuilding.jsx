import React from 'react';
import { Users, TrendingUp, Shield, Headphones } from 'lucide-react';

export default function TrustBuilding({ isDark }) {
  const trustCards = [
    {
      icon: Users,
      title: "Active Farmers",
      stat: "50,000+",
      description: "Farmers actively using our platform to transform their agricultural practices",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: TrendingUp,
      title: "Productivity Increase",
      stat: "45%",
      description: "Average productivity boost reported by farmers using our solutions",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Shield,
      title: "Data Secure",
      stat: "100%",
      description: "Bank-level encryption protecting your farm data and sensitive information",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Headphones,
      title: "Customer Support",
      stat: "24/7",
      description: "Round-the-clock assistance in your language whenever you need help",
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        isDark
          ? 'bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950'
          : 'bg-gradient-to-br from-gray-50 via-white to-gray-50'
      } py-20 px-4`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span
              className={`px-6 py-2 rounded-full text-sm font-semibold ${
                isDark
                  ? 'bg-emerald-900/30 text-emerald-400'
                  : 'bg-green-100 text-green-800'
              }`}
            >
              Trusted Worldwide
            </span>
          </div>
          <h2
            className={`text-5xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            Empowering Agriculture
            <span className={`${isDark ? 'text-emerald-400' : 'text-green-600'} block mt-2`}>
              Across the Globe
            </span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto leading-relaxed ${
            isDark ? 'text-gray-300' : 'text-slate-600'
          }`}>
            Join thousands of farmers who are experiencing the next level of agricultural transformation. 
            Our platform combines cutting-edge technology with unwavering support to help you grow smarter, 
            safer, and more profitably.
          </p>
        </div>

        {/* Stats Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {trustCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={index}
                className={`group rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border ${
                  isDark ? 'bg-gray-900 border-gray-700' : 'bg-white border-slate-100'
                }`}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${card.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className={`text-4xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {card.stat}
                </div>
                <h3 className={`text-lg font-semibold mb-3 ${isDark ? 'text-gray-300' : 'text-slate-800'}`}>
                  {card.title}
                </h3>
                <p className={`${isDark ? 'text-gray-400' : 'text-slate-600'} leading-relaxed`}>
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Transformation Banner */}
        <div
          className={`relative overflow-hidden rounded-3xl p-12 shadow-2xl ${
            isDark
              ? 'bg-gradient-to-r from-gray-800 via-gray-900 to-gray-950'
              : 'bg-gradient-to-r from-green-600 via-emerald-600 to-green-700'
          }`}
        >
          <div className="absolute inset-0 bg-black opacity-5"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full -ml-24 -mb-24"></div>
          
          <div className="relative z-10 text-center">
            <h3 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-white'}`}>
              Ready for Next Level Transformation?
            </h3>
            <p className={`text-xl mb-8 max-w-2xl mx-auto ${
              isDark ? 'text-gray-300' : 'text-green-50'
            }`}>
              Experience the future of farming with technology that understands your needs 
              and grows with your ambitions
            </p>
            <button
              className={`px-10 py-4 rounded-full font-bold text-lg shadow-lg transition-all duration-300 transform hover:scale-105 ${
                isDark
                  ? 'bg-gray-900 text-emerald-400 hover:bg-gray-800'
                  : 'bg-white text-green-600 hover:bg-green-50'
              }`}
            >
              Get Started Today
            </button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {[
            { stat: '150+', label: 'Countries' },
            { stat: '99.9%', label: 'Uptime' },
            { stat: '4.9/5', label: 'User Rating' },
            { stat: '5M+', label: 'Hectares Managed' },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{item.stat}</div>
              <div className={`text-sm mt-1 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
