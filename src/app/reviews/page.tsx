import Link from "next/link";

export default function Reviews() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Link href="/" className="text-3xl font-bold text-gray-900 dark:text-white">TechGadget Hub</Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
              <Link href="/reviews" className="text-blue-600 dark:text-blue-400 font-semibold">Reviews</Link>
              <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Categories</a>
              <Link href="/about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">About</Link>
              <Link href="/contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Tech Reviews & Recommendations
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Honest, in-depth reviews of the latest tech gadgets to help you make informed purchasing decisions.
          </p>
        </div>

        {/* Category Filters */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-3 justify-center">
            {['All', 'Smartphones', 'Laptops', 'Audio', 'Gaming', 'Smart Home', 'Wearables'].map((category) => (
              <button
                key={category}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  category === 'All' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-slate-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Review */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 md:p-12 mb-16 shadow-lg">
          <div className="flex items-center mb-6">
            <span className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-3 py-1 rounded-full text-sm font-semibold">
              Featured Review
            </span>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="aspect-video bg-gray-200 dark:bg-gray-600 rounded-xl mb-6 flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400 text-lg">Product Image</span>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Latest Smartphone Flagship Review
              </h2>
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400 mr-2">
                  {'★★★★☆'.split('').map((star, index) => (
                    <span key={index} className="text-xl">{star}</span>
                  ))}
                </div>
                <span className="text-gray-600 dark:text-gray-300">4.2/5 Rating</span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed">
                Our comprehensive review of the latest flagship smartphone covers performance, camera quality, 
                battery life, and overall value. We tested it for two weeks in real-world conditions to bring 
                you an honest assessment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors text-center"
                >
                  Read Full Review
                </a>
                <a
                  href="#"
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors text-center"
                >
                  View on Amazon
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Reviews Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Recent Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Gaming Mechanical Keyboard Review",
                category: "Gaming",
                rating: "4.5/5",
                excerpt: "A detailed look at the latest mechanical gaming keyboard with RGB lighting and custom switches.",
                image: "Keyboard Image"
              },
              {
                title: "Wireless Noise-Canceling Headphones",
                category: "Audio",
                rating: "4.7/5",
                excerpt: "Premium headphones that deliver exceptional sound quality and industry-leading noise cancellation.",
                image: "Headphones Image"
              },
              {
                title: "Smart Home Security Camera",
                category: "Smart Home",
                rating: "4.0/5",
                excerpt: "Indoor security camera with AI detection, two-way audio, and cloud storage capabilities.",
                image: "Camera Image"
              },
              {
                title: "Ultra-portable Laptop Review",
                category: "Laptops",
                rating: "4.3/5",
                excerpt: "Lightweight laptop that doesn't compromise on performance or battery life for professionals.",
                image: "Laptop Image"
              },
              {
                title: "Fitness Smartwatch Comparison",
                category: "Wearables",
                rating: "4.4/5",
                excerpt: "Comparing the top fitness smartwatches for health tracking, GPS, and battery performance.",
                image: "Smartwatch Image"
              },
              {
                title: "Wireless Charging Stand",
                category: "Accessories",
                rating: "4.1/5",
                excerpt: "Multi-device wireless charging stand that keeps your desk organized and devices powered.",
                image: "Charger Image"
              }
            ].map((review, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="aspect-video bg-gray-200 dark:bg-gray-600 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-gray-500 dark:text-gray-400">{review.image}</span>
                </div>
                
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-blue-600 dark:text-blue-400">{review.category}</span>
                  <div className="flex items-center">
                    <span className="text-yellow-400 mr-1">★</span>
                    <span className="text-sm text-gray-600 dark:text-gray-300">{review.rating}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{review.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">{review.excerpt}</p>
                
                <div className="flex justify-between items-center">
                  <a href="#" className="text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-800 dark:hover:text-blue-300 text-sm">
                    Read Review →
                  </a>
                  <a href="#" className="text-green-600 dark:text-green-400 font-semibold hover:text-green-800 dark:hover:text-green-300 text-sm">
                    Buy Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-blue-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Get notified when we publish new reviews and buying guides. No spam, just valuable tech insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button className="bg-blue-800 hover:bg-blue-900 px-6 py-3 rounded-lg font-semibold transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
