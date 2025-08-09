import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">TechGadget Hub</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/reviews" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Reviews</Link>
              <a href="#categories" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Categories</a>
              <Link href="/about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">About</Link>
              <Link href="/contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Discover the Latest <span className="text-blue-600 dark:text-blue-400">Tech Gadgets</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Your trusted source for honest reviews, detailed comparisons, and expert recommendations on the hottest tech gadgets. 
            Find the perfect device that fits your needs and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#featured"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors"
            >
              Explore Featured Products
            </a>
            <a
              href="#categories"
              className="bg-white dark:bg-slate-800 hover:bg-gray-50 dark:hover:bg-slate-700 text-gray-900 dark:text-white font-semibold py-4 px-8 rounded-lg text-lg border border-gray-300 dark:border-gray-600 transition-colors"
            >
              Browse Categories
            </a>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="featured" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Featured Tech Reviews</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product Card 1 */}
            <div className="bg-gray-50 dark:bg-slate-700 rounded-xl p-6 hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gray-200 dark:bg-gray-600 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400">Product Image</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Latest Smartphones</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">In-depth reviews of the newest smartphone releases, comparing features, performance, and value.</p>
              <a href="#" className="text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300">Read Reviews →</a>
            </div>

            {/* Product Card 2 */}
            <div className="bg-gray-50 dark:bg-slate-700 rounded-xl p-6 hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gray-200 dark:bg-gray-600 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400">Product Image</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Gaming Accessories</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Comprehensive guides to gaming keyboards, mice, headsets, and other essential gaming gear.</p>
              <a href="#" className="text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300">Explore Gaming →</a>
            </div>

            {/* Product Card 3 */}
            <div className="bg-gray-50 dark:bg-slate-700 rounded-xl p-6 hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gray-200 dark:bg-gray-600 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400">Product Image</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Smart Home Devices</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Smart speakers, security cameras, and automation devices to make your home more intelligent.</p>
              <a href="#" className="text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300">Smart Home Guide →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Product Categories</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Smartphones', 'Laptops', 'Audio', 'Gaming', 'Smart Home', 'Wearables', 'Cameras', 'Accessories'].map((category) => (
              <div key={category} className="bg-white dark:bg-slate-800 p-6 rounded-lg text-center hover:shadow-lg transition-shadow cursor-pointer">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 dark:text-blue-400 text-xl">📱</span>
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white">{category}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">About TechGadget Hub</h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            We are passionate tech enthusiasts dedicated to helping you make informed decisions about your next gadget purchase. 
            Our team tests and reviews the latest technology products to provide you with honest, detailed insights.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">⭐</div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Honest Reviews</h4>
              <p className="text-gray-600 dark:text-gray-300">Unbiased opinions based on thorough testing and real-world usage.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🔍</div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Detailed Analysis</h4>
              <p className="text-gray-600 dark:text-gray-300">In-depth comparisons to help you choose the right product.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💡</div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Expert Insights</h4>
              <p className="text-gray-600 dark:text-gray-300">Professional recommendations from tech industry experts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h5 className="text-xl font-bold mb-4">TechGadget Hub</h5>
              <p className="text-gray-400">Your trusted source for tech reviews and recommendations.</p>
            </div>
            <div>
              <h6 className="font-semibold mb-4">Categories</h6>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Smartphones</a></li>
                <li><a href="#" className="hover:text-white">Laptops</a></li>
                <li><a href="#" className="hover:text-white">Gaming</a></li>
                <li><a href="#" className="hover:text-white">Smart Home</a></li>
              </ul>
            </div>
            <div>
              <h6 className="font-semibold mb-4">Resources</h6>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Buying Guides</a></li>
                <li><a href="#" className="hover:text-white">Comparisons</a></li>
                <li><a href="#" className="hover:text-white">Best Deals</a></li>
                <li><a href="#" className="hover:text-white">Tech News</a></li>
              </ul>
            </div>
            <div>
              <h6 className="font-semibold mb-4">Connect</h6>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
                <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white">Terms of Service</Link></li>
                <li><a href="#" className="hover:text-white">Disclaimer</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 TechGadget Hub. All rights reserved.</p>
            <p className="mt-2 text-sm">
              As an Amazon Associate, we earn from qualifying purchases. Product prices and availability are accurate as of the date/time indicated and are subject to change.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
