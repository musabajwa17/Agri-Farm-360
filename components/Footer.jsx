import React from 'react';
import { Mail, Phone, Facebook, Twitter, Linkedin, Github, MapPin, Heart, Star } from 'lucide-react';

export default function Footer ({ isDark }) {
  const bgClass = isDark 
    ? 'bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950' 
    : 'bg-gradient-to-br from-gray-50 via-white to-gray-50';
  
  const textPrimary = isDark ? 'text-gray-100' : 'text-gray-900';
  const textSecondary = isDark ? 'text-gray-400' : 'text-gray-600';
  const textMuted = isDark ? 'text-gray-500' : 'text-gray-500';
  const borderColor = isDark ? 'border-gray-800' : 'border-gray-200';
  const hoverColor = isDark ? 'hover:text-green-400' : 'hover:text-green-600';
  const accentColor = isDark ? 'text-green-400' : 'text-green-600';
  const inputBg = isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300';
  const buttonBg = isDark 
    ? 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500' 
    : 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700';

  return (
    <footer className={`${bgClass} ${textPrimary} transition-colors duration-300`}>
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-5">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold mb-2">
                <span className={accentColor}>Farm</span>Agri <span className={accentColor}>360</span>
              </h2>
              <p className={`${textSecondary} text-sm leading-relaxed`}>
                Empowering farmers with intelligent digital solutions. Transform your agricultural operations with our comprehensive farm management platform trusted by thousands worldwide.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className={`${accentColor} w-5 h-5 mt-1 flex-shrink-0`} />
                <p className={`${textSecondary} text-sm`}>
                  Earth Scan Systems<br />
                  Agricultural Technology Division
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className={`${accentColor} w-5 h-5 flex-shrink-0`} />
                <a href="mailto:support@farmagri360.com" className={`${textSecondary} text-sm ${hoverColor} transition-colors`}>
                  support@farmagri360.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className={`${accentColor} w-5 h-5 flex-shrink-0`} />
                <a href="tel:+15551234567" className={`${textSecondary} text-sm ${hoverColor} transition-colors`}>
                  +1 (555) 123-4567
                </a>
              </div>
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h3 className={`text-lg font-semibold mb-6 ${textPrimary}`}>PLATFORM</h3>
            <ul className="space-y-3">
              {['Features', 'Pricing', 'Dashboard', 'Integrations', 'Mobile App', 'API Access'].map((item) => (
                <li key={item}>
                  <a href="#" className={`${textSecondary} ${hoverColor} transition-colors text-sm inline-block`}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Links */}
          <div>
            <h3 className={`text-lg font-semibold mb-6 ${textPrimary}`}>SOLUTIONS</h3>
            <ul className="space-y-3">
              {['Livestock Management', 'Crop Monitoring', 'Milk Sales', 'Smart Inventory', 'Analytics & Reports', 'Field Mapping'].map((item) => (
                <li key={item}>
                  <a href="#" className={`${textSecondary} ${hoverColor} transition-colors text-sm inline-block`}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className={`text-lg font-semibold mb-6 ${textPrimary}`}>SUPPORT</h3>
            <ul className="space-y-3">
              {['Contact Us', 'About Us', 'Help Center', 'API Documentation', 'Community Forum', 'Training Resources'].map((item) => (
                <li key={item}>
                  <a href="#" className={`${textSecondary} ${hoverColor} transition-colors text-sm inline-block`}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className={`border-t ${borderColor} py-12`}>
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-full">
              {/* <span className="text-2xl">📧</span> */}
              <Star className={`${accentColor} w-5 h-5 flex-shrink-0`} />
              <span className={`${accentColor} text-sm font-semibold`}>Stay Updated</span>
            </div>
            <h3 className={`text-2xl md:text-3xl font-bold ${textPrimary}`}>
              Get the Latest Farm Tech Insights
            </h3>
            <p className={`${textSecondary} text-sm md:text-base max-w-xl mx-auto`}>
              Subscribe to our newsletter for farming tips, product updates, and industry insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className={`flex-1 px-4 py-3 rounded-lg ${inputBg} border ${textPrimary} placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all text-sm`}
              />
              <button className={`${buttonBg} text-white px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-xl text-sm whitespace-nowrap`}>
                Subscribe →
              </button>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-5">
          {[
            { value: '2,500+', label: 'Active Farmers' },
            { value: '15M+', label: 'Animals Tracked' },
            { value: '50K+', label: 'Hectares Managed' },
            { value: '99.9%', label: 'Uptime' }
          ].map((stat) => (
            <div key={stat.label} className="text-center space-y-2">
              <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent`}>
                {stat.value}
              </div>
              <div className={`${textSecondary} text-xs md:text-sm`}>{stat.label}</div>
            </div>
          ))}
        </div> */}
      </div>

      {/* Bottom Bar */}
      <div className={`border-t ${borderColor}`}>
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className={`${textMuted} text-sm text-center md:text-left`}>
              © 2025 Farm Agri 360. All rights reserved. • 
              <span className="inline-flex items-center ml-1">
                Made with <Heart className="w-3 h-3 mx-1 text-red-500 fill-current" /> for farmers worldwide
              </span>
              <span className="block md:inline md:ml-1 mt-1 md:mt-0">
                • Developed by <span className={`${accentColor} font-semibold`}>Earth Scan Systems</span>
              </span>
            </div>

            {/* Social Links */}
            {/* <div className="flex items-center space-x-4">
              {[
                { Icon: Facebook, label: 'Facebook' },
                { Icon: Twitter, label: 'Twitter' },
                { Icon: Linkedin, label: 'LinkedIn' },
                { Icon: Github, label: 'GitHub' }
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className={`${textSecondary} ${hoverColor} transition-all transform hover:scale-110`}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div> */}

            {/* Legal Links */}
            <div className="flex items-center space-x-4 text-sm">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item, index) => (
                <React.Fragment key={item}>
                  {index > 0 && <span className={textMuted}>•</span>}
                  <a href="#" className={`${textSecondary} ${hoverColor} transition-colors`}>
                    {item}
                  </a>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};