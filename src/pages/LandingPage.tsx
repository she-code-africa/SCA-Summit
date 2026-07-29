import { Link } from "react-router-dom";

export function LandingPage() {
  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-purple-50 via-white to-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-100 text-purple-700 font-semibold text-xs uppercase tracking-wider mb-6">
            October 2026 &bull; Hybrid Event
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-900 tracking-tight max-w-4xl mx-auto leading-tight">
            Innovate, Elevate, & Impact Africa's Tech Future
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Connecting thousands of African women leaders, software engineers,
            innovators, and creators for inspiring keynotes, technical
            workshops, and career advancement.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/schedule"
              className="px-8 py-4 bg-purple-600 text-white rounded-full font-bold shadow-lg hover:bg-purple-700 transition-all hover:shadow-purple-200"
            >
              Explore Schedule
            </Link>
            <Link
              to="/speakers"
              className="px-8 py-4 bg-white text-gray-800 border border-gray-200 rounded-full font-bold shadow-sm hover:border-purple-300 hover:text-purple-600 transition-all"
            >
              Meet 2026 Speakers
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Stats Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 bg-purple-900 text-white rounded-3xl p-8 lg:p-12 shadow-xl">
          <div className="text-center space-y-1">
            <p className="text-3xl sm:text-5xl font-extrabold text-purple-300">
              3,000+
            </p>
            <p className="text-xs sm:text-sm text-purple-100">
              Attendees Expected
            </p>
          </div>
          <div className="text-center space-y-1">
            <p className="text-3xl sm:text-5xl font-extrabold text-purple-300">
              40+
            </p>
            <p className="text-xs sm:text-sm text-purple-100">
              Expert Speakers
            </p>
          </div>
          <div className="text-center space-y-1">
            <p className="text-3xl sm:text-5xl font-extrabold text-purple-300">
              15+
            </p>
            <p className="text-xs sm:text-sm text-purple-100">
              Technical Tracks
            </p>
          </div>
          <div className="text-center space-y-1">
            <p className="text-3xl sm:text-5xl font-extrabold text-purple-300">
              20+
            </p>
            <p className="text-xs sm:text-sm text-purple-100">
              African Countries
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
