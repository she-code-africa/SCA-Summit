export function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900">
          About SheCode Africa
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          SheCode Africa is a non-profit organization focused on celebrating and
          empowering African women in technology.
        </p>
      </div>

      <div className="bg-purple-900 text-white rounded-3xl p-8 sm:p-12 space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold">Our Mission</h2>
        <p className="text-purple-100 leading-relaxed text-base sm:text-lg">
          We aim to build a community where women across Africa are supported,
          trained, and mentored to thrive in tech roles, break boundaries, and
          lead global innovation.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">
          2026 Summit Engineering Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-6 border border-gray-200 rounded-2xl bg-white shadow-sm">
            <h3 className="text-lg font-bold text-gray-900">Chidalu Anukam</h3>
            <p className="text-sm text-purple-600 font-medium">
              Volunteer Frontend Engineer
            </p>
            <p className="text-xs text-gray-500 mt-2">
              Assigned Pages: Landing Page, Speakers Page, Accessibility Page.
            </p>
          </div>
          <div className="p-6 border border-gray-200 rounded-2xl bg-white shadow-sm">
            <h3 className="text-lg font-bold text-gray-900">Glory Okafor</h3>
            <p className="text-sm text-purple-600 font-medium">
              Volunteer Frontend Engineer
            </p>
            <p className="text-xs text-gray-500 mt-2">
              Assigned Pages: Schedule Page, About Page, Repo & Tooling
              Architecture.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
