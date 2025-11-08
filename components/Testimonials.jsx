// const testimonials = [
//   {
//     text: "This ERP revolutionized our operations, streamlining finance and inventory. The cloud-based platform keeps us productive, even remotely.",
//     image: "https://randomuser.me/api/portraits/women/1.jpg",
//     name: "Briana Patton",
//     role: "Operations Manager",
//   },
//   {
//     text: "Implementing this ERP was smooth and quick. The customizable, user-friendly interface made team training effortless.",
//     image: "https://randomuser.me/api/portraits/men/2.jpg",
//     name: "Bilal Ahmed",
//     role: "IT Manager",
//   },
//   {
//     text: "The support team is exceptional, guiding us through setup and providing ongoing assistance, ensuring our satisfaction.",
//     image: "https://randomuser.me/api/portraits/women/3.jpg",
//     name: "Saman Malik",
//     role: "Customer Support Lead",
//   },
//   {
//     text: "This ERP's seamless integration enhanced our business operations and efficiency. Highly recommend for its intuitive interface.",
//     image: "https://randomuser.me/api/portraits/men/4.jpg",
//     name: "Omar Raza",
//     role: "CEO",
//   },
//   {
//     text: "Its robust features and quick support have transformed our workflow, making us significantly more efficient.",
//     image: "https://randomuser.me/api/portraits/women/5.jpg",
//     name: "Zainab Hussain",
//     role: "Project Manager",
//   },
//   {
//     text: "The smooth implementation exceeded expectations. It streamlined processes, improving overall business performance.",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//     name: "Aliza Khan",
//     role: "Business Analyst",
//   },
//   {
//     text: "Our business functions improved with a user-friendly design and positive customer feedback.",
//     image: "https://randomuser.me/api/portraits/men/7.jpg",
//     name: "Farhan Siddiqui",
//     role: "Marketing Director",
//   },
//   {
//     text: "They delivered a solution that exceeded expectations, understanding our needs and enhancing our operations.",
//     image: "https://randomuser.me/api/portraits/women/8.jpg",
//     name: "Sana Sheikh",
//     role: "Sales Manager",
//   },
//   {
//     text: "Using this ERP, our online presence and conversions significantly improved, boosting business performance.",
//     image: "https://randomuser.me/api/portraits/men/9.jpg",
//     name: "Hassan Ali",
//     role: "E-commerce Manager",
//   },
// ];

// const TestimonialCard = ({ text, image, name, role, isDark }) => (
//   <div
//     className={`p-6 rounded-xl shadow-lg border mb-6 transition-colors duration-500 ${
//       isDark
//         ? 'bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 border-gray-700'
//         : 'bg-gradient-to-br from-gray-50 via-white to-gray-50 border-gray-200'
//     }`}
//   >
//     <p
//       className={`text-sm leading-relaxed mb-4 transition-colors duration-500 ${
//         isDark ? 'text-gray-300' : 'text-gray-700'
//       }`}
//     >
//       "{text}"
//     </p>

//     <div className="flex items-center gap-3">
//       <img
//         src={image}
//         alt={name}
//         className={`w-12 h-12 rounded-full object-cover border transition-colors duration-500 ${
//           isDark ? 'border-gray-700' : 'border-gray-200'
//         }`}
//       />
//       <div>
//         <h4
//           className={`font-semibold text-sm transition-colors duration-500 ${
//             isDark ? 'text-white' : 'text-gray-900'
//           }`}
//         >
//           {name}
//         </h4>
//         <p
//           className={`text-xs transition-colors duration-500 ${
//             isDark ? 'text-gray-400' : 'text-gray-500'
//           }`}
//         >
//           {role}
//         </p>
//       </div>
//     </div>
//   </div>
// );


// const TestimonialsColumn = ({ testimonials, duration = 15, reverse = false, isDark }) => {
//   return (
//     <div className="flex-1 max-w-xs overflow-hidden">
//       <style jsx>{`
//         @keyframes scrollUp {
//           0% {
//             transform: translateY(0);
//           }
//           100% {
//             transform: translateY(-50%);
//           }
//         }
//         @keyframes scrollDown {
//           0% {
//             transform: translateY(-50%);
//           }
//           100% {
//             transform: translateY(0);
//           }
//         }
//         .animate-scroll-up {
//           animation: scrollUp ${duration}s linear infinite;
//         }
//         .animate-scroll-down {
//           animation: scrollDown ${duration}s linear infinite;
//         }
//         .column-container:hover .animate-scroll-up,
//         .column-container:hover .animate-scroll-down {
//           animation-play-state: paused;
//         }
//       `}</style>
//       <div className="column-container">
//         <div className={reverse ? 'animate-scroll-down' : 'animate-scroll-up'}>
//           {[...testimonials, ...testimonials].map((testimonial, index) => (
//             <TestimonialCard key={index} {...testimonial}  isDark={  isDark          }/>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default function Testimonials({isDark}) {
//   const firstColumn = testimonials.slice(0, 3);
//   const secondColumn = testimonials.slice(3, 6);
//   const thirdColumn = testimonials.slice(6, 9);

//   return (
//     <section className={`py-20 transition-colors duration-300 ${
//       isDark 
//         ? 'bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950' 
//         : 'bg-gradient-to-br from-gray-50 via-white to-gray-50'
//       }`}>
//       <div className="container mx-auto px-4 max-w-7xl">
//         {/* Header */}
//         <div className="flex flex-col items-center justify-center max-w-2xl mx-auto mb-16">
//   <span
//     className={`inline-block rounded-lg px-3 py-1.5 text-xs font-semibold tracking-wide mb-4 transition-colors duration-500 ${
//       isDark
//         ? 'bg-emerald-900/30 text-emerald-400'
//         : 'bg-emerald-100 text-emerald-600'
//     }`}
//   >
//     Testimonials
//   </span>

//   <h2
//     className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-center mb-4 transition-colors duration-500 ${
//       isDark ? 'text-white' : 'text-gray-900'
//     }`}
//   >
//     What our users say
//   </h2>

//   <p
//     className={`text-center text-lg transition-colors duration-500 ${
//       isDark ? 'text-gray-400' : 'text-gray-600'
//     }`}
//   >
//     See what our customers have to say about us.
//   </p>
// </div>


//         {/* Testimonials Columns */}
//         <div 
//           className="flex justify-center gap-6 max-h-[740px] overflow-hidden"
//           style={{
//             maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
//             WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)'
//           }}
//         >
//           <TestimonialsColumn testimonials={firstColumn} duration={15}  isDark={isDark}/>
//           <TestimonialsColumn 
//           isDark={isDark}
//             testimonials={secondColumn} 
//             duration={19} 
//             reverse={true}
//           />
//           <TestimonialsColumn 
//           isDark={isDark}
//             testimonials={thirdColumn} 
//             duration={17}
//           />
//         </div>

//         {/* Mobile Note */}
//         {/* <div className="mt-8 text-center">
//           <p className="text-sm text-gray-500 dark:text-gray-400">
//             Hover over columns to pause • {testimonials.length} happy customers
//           </p>
//         </div> */}
//       </div>
//     </section>
//   );
// }


// "use client";
// const testimonials = [
//   {
//     text: "This ERP revolutionized our operations, streamlining finance and inventory. The cloud-based platform keeps us productive, even remotely.",
//     image: "https://randomuser.me/api/portraits/women/1.jpg",
//     name: "Briana Patton",
//     role: "Operations Manager",
//   },
//   {
//     text: "Implementing this ERP was smooth and quick. The customizable, user-friendly interface made team training effortless.",
//     image: "https://randomuser.me/api/portraits/men/2.jpg",
//     name: "Bilal Ahmed",
//     role: "IT Manager",
//   },
//   {
//     text: "The support team is exceptional, guiding us through setup and providing ongoing assistance, ensuring our satisfaction.",
//     image: "https://randomuser.me/api/portraits/women/3.jpg",
//     name: "Saman Malik",
//     role: "Customer Support Lead",
//   },
//   {
//     text: "This ERP's seamless integration enhanced our business operations and efficiency. Highly recommend for its intuitive interface.",
//     image: "https://randomuser.me/api/portraits/men/4.jpg",
//     name: "Omar Raza",
//     role: "CEO",
//   },
//   {
//     text: "Its robust features and quick support have transformed our workflow, making us significantly more efficient.",
//     image: "https://randomuser.me/api/portraits/women/5.jpg",
//     name: "Zainab Hussain",
//     role: "Project Manager",
//   },
//   {
//     text: "The smooth implementation exceeded expectations. It streamlined processes, improving overall business performance.",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//     name: "Aliza Khan",
//     role: "Business Analyst",
//   },
//   {
//     text: "Our business functions improved with a user-friendly design and positive customer feedback.",
//     image: "https://randomuser.me/api/portraits/men/7.jpg",
//     name: "Farhan Siddiqui",
//     role: "Marketing Director",
//   },
//   {
//     text: "They delivered a solution that exceeded expectations, understanding our needs and enhancing our operations.",
//     image: "https://randomuser.me/api/portraits/women/8.jpg",
//     name: "Sana Sheikh",
//     role: "Sales Manager",
//   },
//   {
//     text: "Using this ERP, our online presence and conversions significantly improved, boosting business performance.",
//     image: "https://randomuser.me/api/portraits/men/9.jpg",
//     name: "Hassan Ali",
//     role: "E-commerce Manager",
//   },
// ];

// const TestimonialCard = ({ text, image, name, role, isDark }) => (
//   <div
//     className={`p-6 rounded-xl shadow-lg border mb-6 transition-colors duration-500 ${
//       isDark
//         ? "bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 border-gray-700"
//         : "bg-gradient-to-br from-gray-50 via-white to-gray-50 border-gray-200"
//     }`}
//   >
//     <p
//       className={`text-sm leading-relaxed mb-4 transition-colors duration-500 ${
//         isDark ? "text-gray-300" : "text-gray-700"
//       }`}
//     >
//       "{text}"
//     </p>
//     <div className="flex items-center gap-3">
//       <img
//         src={image}
//         alt={name}
//         className={`w-12 h-12 rounded-full object-cover border transition-colors duration-500 ${
//           isDark ? "border-gray-700" : "border-gray-200"
//         }`}
//       />
//       <div>
//         <h4
//           className={`font-semibold text-sm transition-colors duration-500 ${
//             isDark ? "text-white" : "text-gray-900"
//           }`}
//         >
//           {name}
//         </h4>
//         <p
//           className={`text-xs transition-colors duration-500 ${
//             isDark ? "text-gray-400" : "text-gray-500"
//           }`}
//         >
//           {role}
//         </p>
//       </div>
//     </div>
//   </div>
// );

// const TestimonialsColumn = ({ testimonials, duration = 15, reverse = false, isDark }) => {
//   return (
//     <div className="flex-1 max-w-xs h-[740px] overflow-hidden relative">
//       <div
//         className={`flex flex-col ${
//           reverse ? "animate-scroll-down" : "animate-scroll-up"
//         }`}
//       >
//         {[...testimonials, ...testimonials].map((testimonial, index) => (
//           <TestimonialCard key={index} {...testimonial} isDark={isDark} />
//         ))}
//       </div>
//       <style jsx global>{`
//         @keyframes scrollUp {
//           0% {
//             transform: translateY(0);
//           }
//           100% {
//             transform: translateY(-50%);
//           }
//         }
//         @keyframes scrollDown {
//           0% {
//             transform: translateY(-50%);
//           }
//           100% {
//             transform: translateY(0);
//           }
//         }
//         .animate-scroll-up {
//           animation: scrollUp ${duration}s linear infinite;
//         }
//         .animate-scroll-down {
//           animation: scrollDown ${duration}s linear infinite;
//         }
//         /* Pause on hover */
//         .flex-1:hover .animate-scroll-up,
//         .flex-1:hover .animate-scroll-down {
//           animation-play-state: paused;
//         }
//         /* Pause on touch devices */
//         .flex-1:active .animate-scroll-up,
//         .flex-1:active .animate-scroll-down {
//           animation-play-state: paused;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default function Testimonials({ isDark }) {
//   const firstColumn = testimonials.slice(0, 3);
//   const secondColumn = testimonials.slice(3, 6);
//   const thirdColumn = testimonials.slice(6, 9);

//   return (
//     <section
//       className={`py-20 transition-colors duration-300 ${
//         isDark
//           ? "bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950"
//           : "bg-gradient-to-br from-gray-50 via-white to-gray-50"
//       }`}
//     >
//       <div className="container mx-auto px-4 max-w-7xl">
//         {/* Header */}
//         <div className="flex flex-col items-center justify-center max-w-2xl mx-auto mb-16">
//           <span
//             className={`inline-block rounded-lg px-3 py-1.5 text-xs font-semibold tracking-wide mb-4 transition-colors duration-500 ${
//               isDark ? "bg-emerald-900/30 text-emerald-400" : "bg-emerald-100 text-emerald-600"
//             }`}
//           >
//             Testimonials
//           </span>

//           <h2
//             className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-center mb-4 transition-colors duration-500 ${
//               isDark ? "text-white" : "text-gray-900"
//             }`}
//           >
//             What our users say
//           </h2>

//           <p
//             className={`text-center text-lg transition-colors duration-500 ${
//               isDark ? "text-gray-400" : "text-gray-600"
//             }`}
//           >
//             See what our customers have to say about us.
//           </p>
//         </div>

//         {/* Testimonials Columns */}
//         <div
//           className="flex flex-col md:flex-row justify-center gap-6 max-h-[740px] overflow-hidden"
//           style={{
//             maskImage:
//               "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
//             WebkitMaskImage:
//               "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
//           }}
//         >
//           <TestimonialsColumn testimonials={firstColumn} duration={15} isDark={isDark} />
//           <TestimonialsColumn testimonials={secondColumn} duration={19} reverse isDark={isDark} />
//           <TestimonialsColumn testimonials={thirdColumn} duration={17} isDark={isDark} />
//         </div>
//       </div>
//     </section>
//   );
// }



import React from 'react';

const testimonials = [
  {
    text: "This ERP revolutionized our operations, streamlining finance and inventory. The cloud-based platform keeps us productive, even remotely.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Briana Patton",
    role: "Operations Manager",
  },
  {
    text: "Implementing this ERP was smooth and quick. The customizable, user-friendly interface made team training effortless.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Bilal Ahmed",
    role: "IT Manager",
  },
  {
    text: "The support team is exceptional, guiding us through setup and providing ongoing assistance, ensuring our satisfaction.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Saman Malik",
    role: "Customer Support Lead",
  },
  {
    text: "This ERP's seamless integration enhanced our business operations and efficiency. Highly recommend for its intuitive interface.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "Omar Raza",
    role: "CEO",
  },
  {
    text: "Its robust features and quick support have transformed our workflow, making us significantly more efficient.",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    name: "Zainab Hussain",
    role: "Project Manager",
  },
  {
    text: "The smooth implementation exceeded expectations. It streamlined processes, improving overall business performance.",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Aliza Khan",
    role: "Business Analyst",
  },
  {
    text: "Our business functions improved with a user-friendly design and positive customer feedback.",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "Farhan Siddiqui",
    role: "Marketing Director",
  },
  {
    text: "They delivered a solution that exceeded expectations, understanding our needs and enhancing our operations.",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Sana Sheikh",
    role: "Sales Manager",
  },
  {
    text: "Using this ERP, our online presence and conversions significantly improved, boosting business performance.",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    name: "Hassan Ali",
    role: "E-commerce Manager",
  },
];

const TestimonialCard = ({ text, image, name, role, isDark }) => (
  <div
    className={`p-6 rounded-xl shadow-lg border mb-6 transition-colors duration-500 ${
      isDark
        ? 'bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 border-gray-700'
        : 'bg-gradient-to-br from-gray-50 via-white to-gray-50 border-gray-200'
    }`}
  >
    <p
      className={`text-sm leading-relaxed mb-4 transition-colors duration-500 ${
        isDark ? 'text-gray-300' : 'text-gray-700'
      }`}
    >
      "{text}"
    </p>

    <div className="flex items-center gap-3">
      <img
        src={image}
        alt={name}
        className={`w-12 h-12 rounded-full object-cover border transition-colors duration-500 ${
          isDark ? 'border-gray-700' : 'border-gray-200'
        }`}
      />
      <div>
        <h4
          className={`font-semibold text-sm transition-colors duration-500 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}
        >
          {name}
        </h4>
        <p
          className={`text-xs transition-colors duration-500 ${
            isDark ? 'text-gray-400' : 'text-gray-500'
          }`}
        >
          {role}
        </p>
      </div>
    </div>
  </div>
);

const TestimonialsColumn = ({ testimonials, duration = 15, reverse = false, isDark=isDark }) => {
  const [isPaused, setIsPaused] = React.useState(false);
  
  const animationStyle = {
    animation: `${reverse ? 'scrollDown' : 'scrollUp'} ${duration}s linear infinite`,
    animationPlayState: isPaused ? 'paused' : 'running'
  };

  return (
    <div className="flex-1 max-w-xs overflow-hidden">
      <div 
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div style={animationStyle}>
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} isDark={isDark} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default function Testimonials({isDark}) {
  const firstColumn = testimonials.slice(0, 3);
  const secondColumn = testimonials.slice(3, 6);
  const thirdColumn = testimonials.slice(6, 9);

  return (
    <>
      <style jsx global>{`
        @keyframes scrollUp {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }
        @keyframes scrollDown {
          0% {
            transform: translateY(-50%);
          }
          100% {
            transform: translateY(0);
          }
        }
      `}</style>
      
      <section className={`py-20 transition-colors duration-300 ${
      isDark 
        ? 'bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950' 
        : 'bg-gradient-to-br from-gray-50 via-white to-gray-50'
      }`}>
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="flex flex-col items-center justify-center max-w-2xl mx-auto mb-16">
  <span
    className={`inline-block rounded-lg px-3 py-1.5 text-xs font-semibold tracking-wide mb-4 transition-colors duration-500 ${
      isDark
        ? 'bg-emerald-900/30 text-emerald-400'
        : 'bg-emerald-100 text-emerald-600'
    }`}
  >
    Testimonials
  </span>

  <h2
    className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-center mb-4 transition-colors duration-500 ${
      isDark ? 'text-white' : 'text-gray-900'
    }`}
  >
    What our users say
  </h2>

  <p
    className={`text-center text-lg transition-colors duration-500 ${
      isDark ? 'text-gray-400' : 'text-gray-600'
    }`}
  >
    See what our customers have to say about us.
  </p>
</div>

          {/* Testimonials Columns */}
          <div 
            className="flex justify-center gap-6 max-h-[740px] overflow-hidden"
            style={{
              maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
              WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)'
            }}
          >
            <TestimonialsColumn testimonials={firstColumn} duration={15} isDark={isDark} />
            <TestimonialsColumn 
              testimonials={secondColumn} 
              duration={19} 
              isDark={isDark}
              reverse={true}
            />
            <TestimonialsColumn 
              testimonials={thirdColumn} 
              duration={17}
              isDark={isDark}
            />
          </div>

          {/* Mobile Note */}
          {/* <div className="mt-8 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Hover over columns to pause • {testimonials.length} happy customers
            </p>
          </div> */}
        </div>
      </section>
    </>
  );
}