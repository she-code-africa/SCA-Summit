import { AboutHero } from "../components/about/AboutHero";
import { AboutSummit } from "../components/about/AboutSubmit";
import { ThemeSection } from "../components/about/ThemeSection";
import { WhyAttendSection } from '../components/about/WhyAttendSection';


export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <AboutHero />
      <AboutSummit />
      <ThemeSection />
      <WhyAttendSection />

      {/* ...next section... */}
      {/* Decadal Impact & Story Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs font-bold tracking-widest uppercase text-[#be0e69] bg-pink-50 px-3 py-1 rounded-full border border-pink-100">
              Our Journey (2016 - 2026)
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight">
              A Decade of Building & Elevating Tech Talent Across Africa
            </h2>
            <p className="text-slate-600 leading-relaxed text-base">
              Founded with the vision to bridge the gender gap in the tech
              ecosystem across the continent, SheCode Africa has grown into a
              vibrant community of over 30,000+ members spanning 20+ countries.
            </p>
            <p className="text-slate-600 leading-relaxed text-base">
              The 2026 Summit marks 10 milestone years of continuous training,
              bootcamps, mentorship programs, and career growth initiatives
              designed specifically for African women in code, design, product,
              and tech leadership.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
              <div className="text-3xl sm:text-4xl font-black text-[#be0e69]">
                30,000+
              </div>
              <div className="text-sm font-semibold text-slate-800">
                Community Members
              </div>
              <div className="text-xs text-slate-500">
                Across Africa & Diaspora
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
              <div className="text-3xl sm:text-4xl font-black text-[#be0e69]">
                20+
              </div>
              <div className="text-sm font-semibold text-slate-800">
                African Countries
              </div>
              <div className="text-xs text-slate-500">
                Active localized chapters
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
              <div className="text-3xl sm:text-4xl font-black text-[#be0e69]">
                5,000+
              </div>
              <div className="text-sm font-semibold text-slate-800">
                Mentorship Grads
              </div>
              <div className="text-xs text-slate-500">
                Trained in core tech tracks
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
              <div className="text-3xl sm:text-4xl font-black text-[#be0e69]">
                10 Years
              </div>
              <div className="text-sm font-semibold text-slate-800">
                Unbroken Impact
              </div>
              <div className="text-xs text-slate-500">2016 to 2026 Summit</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
