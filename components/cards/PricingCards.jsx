import React from 'react';
import { Zap, Crown, Sparkles, Check } from 'lucide-react';

const PricingCards = ({ isDark = false }) => {
  const plans = [
    {
      name: 'Basic',
      icon: Zap,
      description: 'Perfect for getting started',
      price: '29',
      features: [
        'Access to core features',
        'Email support included',
        'Up to 5 team members'
      ],
      gradient: 'from-emerald-400 to-teal-500',
      iconColor: 'text-emerald-400',
      highlight: false
    },
    {
      name: 'Premium',
      icon: Crown,
      description: 'Most popular for growing teams',
      price: '79',
      features: [
        'Everything in Basic plus',
        'Priority support 24/7',
        'Unlimited team members'
      ],
      gradient: 'from-violet-400 to-fuchsia-500',
      iconColor: 'text-violet-400',
      highlight: true
    },
    {
      name: 'Exclusive',
      icon: Sparkles,
      description: 'Enterprise-grade solution',
      price: '149',
      features: [
        'Everything in Premium plus',
        'Dedicated account manager',
        'Custom integrations & API'
      ],
      gradient: 'from-amber-400 to-orange-500',
      iconColor: 'text-amber-400',
      highlight: false
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      isDark 
        ? 'bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950' 
        : 'bg-gradient-to-br from-gray-50 via-white to-gray-50'
    }`}>
      <div className="max-w-7xl mx-auto py-20 px-4">
        {/* Header */}
        <div className="text-center mb-20 space-y-6">
          <div className="inline-block">
            <span className={`text-sm font-semibold tracking-wider uppercase px-4 py-2 rounded-full ${
              isDark 
                ? 'bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-400 border border-emerald-500/30' 
                : 'bg-gradient-to-r from-emerald-500/10 to-teal-500/10 text-emerald-600 border border-emerald-500/20'
            }`}>
              Pricing Plans
            </span>
          </div>
          <h2 className={`text-6xl md:text-7xl font-extrabold tracking-tight ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Choose Your{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-600">
              Perfect Plan
            </span>
          </h2>
          <p className={`text-xl md:text-2xl max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Start with 30 days free trial. Upgrade, downgrade or cancel anytime.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <div
                key={plan.name}
                className={`relative group ${
                  plan.highlight ? 'lg:-mt-4 lg:mb-4' : ''
                }`}
              >
                {/* Popular Badge */}
                {plan.highlight && (
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-fuchsia-500 blur-xl opacity-60 animate-pulse"></div>
                      <span className="relative px-8 py-3 rounded-full text-sm font-bold shadow-2xl bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white flex items-center gap-2">
                        <Crown className="w-4 h-4" />
                        Most Popular
                      </span>
                    </div>
                  </div>
                )}

                {/* Card */}
                <div
                  className={`relative h-full rounded-3xl p-10 transition-all duration-700 overflow-hidden ${
                    isDark
                      ? 'bg-gradient-to-br from-gray-800/80 via-gray-900/80 to-gray-800/80 border-2 border-gray-700/50'
                      : 'bg-white border-2 border-gray-200'
                  } ${
                    plan.highlight
                      ? 'shadow-2xl shadow-violet-500/20 scale-105 hover:scale-110 border-violet-500/50'
                      : 'shadow-xl hover:shadow-2xl hover:scale-105'
                  } backdrop-blur-xl`}
                >
                  {/* Animated Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-700`}></div>
                  
                  {/* Glow Effect */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${plan.gradient} rounded-3xl blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-700`}></div>

                  {/* Content */}
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Icon */}
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${plan.gradient} p-1 mb-8 transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-lg`}>
                      <div className={`w-full h-full rounded-2xl flex items-center justify-center ${
                        isDark ? 'bg-gray-900' : 'bg-white'
                      }`}>
                        <Icon className={`w-10 h-10 ${plan.iconColor}`} strokeWidth={2} />
                      </div>
                    </div>

                    {/* Plan Name */}
                    <h3 className={`text-4xl font-extrabold mb-3 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      {plan.name}
                    </h3>

                    {/* Description */}
                    <p className={`text-base mb-8 leading-relaxed ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {plan.description}
                    </p>

                    {/* Price */}
                    <div className="mb-10">
                      <div className="flex items-baseline gap-1">
                        <span className={`text-6xl font-black tracking-tight ${plan.iconColor}`}>
                          ${plan.price}
                        </span>
                        <span className={`text-xl font-medium ${
                          isDark ? 'text-gray-500' : 'text-gray-500'
                        }`}>
                          /mo
                        </span>
                      </div>
                      <p className={`text-sm mt-2 font-medium ${
                        isDark ? 'text-gray-500' : 'text-gray-500'
                      }`}>
                        30 days free trial
                      </p>
                    </div>

                    {/* Features */}
                    <div className="flex-grow mb-10 space-y-5">
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-4 group/item">
                          <div className={`mt-1 w-6 h-6 rounded-lg bg-gradient-to-br ${plan.gradient} flex-shrink-0 flex items-center justify-center shadow-md`}>
                            <Check className="w-4 h-4 text-white" strokeWidth={3} />
                          </div>
                          <span className={`text-base leading-relaxed ${
                            isDark ? 'text-gray-300' : 'text-gray-700'
                          }`}>
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <button
                      className={`relative w-full py-5 rounded-2xl font-bold text-lg text-white transition-all duration-500 transform hover:translate-y-[-4px] active:translate-y-0 shadow-xl hover:shadow-2xl overflow-hidden group/btn ${
                        plan.highlight
                          ? 'bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-600 hover:to-fuchsia-600'
                          : `bg-gradient-to-r ${plan.gradient}`
                      }`}
                    >
                      <span className="relative z-10">Get Started</span>
                      <div className="absolute inset-0 bg-white opacity-0 group-hover/btn:opacity-20 transition-opacity duration-500"></div>
                    </button>
                  </div>

                  {/* Corner Decoration */}
                  <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${plan.gradient} opacity-20 blur-3xl rounded-full group-hover:opacity-30 transition-opacity duration-700`}></div>
                  <div className={`absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-br ${plan.gradient} opacity-20 blur-3xl rounded-full group-hover:opacity-30 transition-opacity duration-700`}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-20">
          <div className={`inline-flex items-center gap-2 px-6 py-3 rounded-full ${
            isDark 
              ? 'bg-gray-800/50 border border-gray-700/50' 
              : 'bg-gray-100 border border-gray-200'
          }`}>
            <div className="flex items-center gap-4 text-sm">
              <span className={`flex items-center gap-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                <Check className="w-4 h-4 text-emerald-500" strokeWidth={3} />
                30-day free trial
              </span>
              <span className={`${isDark ? 'text-gray-700' : 'text-gray-300'}`}>•</span>
              <span className={`flex items-center gap-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                <Check className="w-4 h-4 text-emerald-500" strokeWidth={3} />
                No credit card required
              </span>
              <span className={`${isDark ? 'text-gray-700' : 'text-gray-300'}`}>•</span>
              <span className={`flex items-center gap-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                <Check className="w-4 h-4 text-emerald-500" strokeWidth={3} />
                Cancel anytime
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCards;