import React from 'react';

const Portfolio = () => {
  const portfolioItems = [
    { category: 'App Development', title: 'Smart Bank App', image: 'https://via.placeholder.com/400x200' },
    { category: 'Blog', title: 'NEXT.js', image: 'https://via.placeholder.com/400x200' },
    { category: 'UI/UX', title: 'Rental', image: 'https://via.placeholder.com/400x200' },
    { category: 'Mentorship', title: 'Tech Mentor', image: 'https://via.placeholder.com/400x200' },
    { category: 'Web Development', title: 'IdeaFlow', image: 'https://via.placeholder.com/400x200' },
  ];

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-8">
      <div className="max-w-5xl w-full bg-white shadow-md rounded-2xl p-8">
        {/* Header */}
        <h1 className="text-5xl font-bold mb-6">Portfolio</h1>
        <hr className="border-t-2 border-orange-400 w-24 mb-6" />

        {/* Filters */}
        <div className="flex gap-6 text-gray-500 mb-8">
          <button className="text-orange-500 font-bold">All</button>
          <button>App Development</button>
          <button>Web Development</button>
          <button>Design</button>
          <button>Mentorship</button>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioItems.map((item) => (
            <div key={item.title} className="bg-orange-100 rounded-lg overflow-hidden shadow-sm">
              <img src={item.image} alt={item.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <p className="text-sm text-gray-500">{item.category}</p>
                <h3 className="font-bold">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
