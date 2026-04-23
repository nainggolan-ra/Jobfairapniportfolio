import { TrendingUp, Gavel, DollarSign, Users, TrendingDown, Award, Clock, Zap } from "lucide-react";

export function KeyOutcome() {
  const outcomes = [
    "Structured recruitment process with clear workflows",
    "Faster hiring cycle through automated matching",
    "Reduced human error via standardized data entry",
    "Centralized monitoring dashboard for APNI",
    "Digital monetization ecosystem established",
    "Transparent candidate-company ecosystem"
  ];

  return (
    <section id="outcome" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl mb-16">
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl mb-4"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700 }}
          >
            Impact & Outcome
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-full mb-6"></div>
          <p 
            className="text-lg sm:text-xl leading-relaxed text-gray-700"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            The platform delivers measurable improvements in recruitment efficiency and data quality 
            across Indonesia's mining industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {outcomes.map((outcome, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border-2 border-green-200 hover:border-green-600 hover:shadow-xl transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-green-600 group-hover:bg-green-700 flex items-center justify-center flex-shrink-0 transition-colors">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <p 
                  className="text-base sm:text-lg leading-relaxed text-gray-900 pt-2"
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
                >
                  {outcome}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Job Auction Innovation Section */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-100 to-orange-100 border-2 border-amber-300 rounded-full mb-4">
              <Zap className="w-5 h-5 text-amber-600" />
              <span 
                className="text-sm font-bold text-amber-900"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                UNIQUE INNOVATION
              </span>
            </div>
            <h3 
              className="text-2xl sm:text-3xl lg:text-4xl mb-4"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700 }}
            >
              Job Auction System
            </h3>
            <p 
              className="text-base sm:text-lg leading-relaxed text-gray-700 max-w-3xl mx-auto"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              A revolutionary bidding mechanism that allows companies to compete for top talent by offering 
              competitive compensation packages, creating a transparent and candidate-centric marketplace.
            </p>
          </div>

          {/* Job Auction Flow */}
          <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 p-8 sm:p-12 rounded-3xl border-2 border-amber-200 shadow-2xl">
            {/* How It Works */}
            <div className="mb-10">
              <h4 
                className="text-lg sm:text-xl font-bold text-gray-900 mb-6 flex items-center gap-3"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                <Gavel className="w-6 h-6 text-amber-600" />
                How It Works:
              </h4>
              
              {/* Flow Steps */}
              <div className="space-y-6">
                {/* Step 1 */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-600 text-white font-bold flex items-center justify-center flex-shrink-0 text-lg">
                    1
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">Company Creates Auction Job Post</h5>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Company selects "Job Auction" type, sets initial salary offer, auction duration, and budget ceiling.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-600 text-white font-bold flex items-center justify-center flex-shrink-0 text-lg">
                    2
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">Candidates Browse & Express Interest</h5>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Job Hunters with matching competency scores see auction jobs marked with <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-amber-200 rounded text-xs font-bold"><Gavel className="w-3 h-3" />AUCTION</span> badge.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-600 text-white font-bold flex items-center justify-center flex-shrink-0 text-lg">
                    3
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">Companies Compete with Bids</h5>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Multiple companies can bid on the same candidate by increasing salary offers, adding benefits, or improving terms in real-time.
                    </p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-green-600 text-white font-bold flex items-center justify-center flex-shrink-0 text-lg">
                    4
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">Candidate Chooses Best Offer</h5>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      After auction closes, candidate reviews all bids and accepts the most attractive package, ensuring maximum value for their skills.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits Grid */}
            <div className="mt-10 pt-10 border-t-2 border-amber-200">
              <h4 
                className="text-lg sm:text-xl font-bold text-gray-900 mb-6 flex items-center gap-3"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                <Award className="w-6 h-6 text-amber-600" />
                Key Benefits:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Benefit 1 */}
                <div className="bg-white p-5 rounded-xl border-2 border-amber-200 hover:border-amber-400 hover:shadow-lg transition-all">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mb-4">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <h5 className="font-bold text-gray-900 mb-2 text-sm">Higher Salaries for Talent</h5>
                  <p className="text-xs text-gray-700 leading-relaxed">
                    Candidates can negotiate better compensation through competitive bidding
                  </p>
                </div>

                {/* Benefit 2 */}
                <div className="bg-white p-5 rounded-xl border-2 border-amber-200 hover:border-amber-400 hover:shadow-lg transition-all">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h5 className="font-bold text-gray-900 mb-2 text-sm">Access to Top Talent</h5>
                  <p className="text-xs text-gray-700 leading-relaxed">
                    Companies reach high-scoring candidates faster
                  </p>
                </div>

                {/* Benefit 3 */}
                <div className="bg-white p-5 rounded-xl border-2 border-amber-200 hover:border-amber-400 hover:shadow-lg transition-all">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mb-4">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <h5 className="font-bold text-gray-900 mb-2 text-sm">Faster Hiring Process</h5>
                  <p className="text-xs text-gray-700 leading-relaxed">
                    Reduces time-to-hire significantly through instant bidding
                  </p>
                </div>

                {/* Benefit 4 */}
                <div className="bg-white p-5 rounded-xl border-2 border-amber-200 hover:border-amber-400 hover:shadow-lg transition-all">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center mb-4">
                    <DollarSign className="w-6 h-6 text-white" />
                  </div>
                  <h5 className="font-bold text-gray-900 mb-2 text-sm">Transparent Pricing</h5>
                  <p className="text-xs text-gray-700 leading-relaxed">
                    Market-driven compensation ensures fair value for both sides
                  </p>
                </div>
              </div>
            </div>

            {/* Stats Highlight */}
            <div className="mt-10 pt-10 border-t-2 border-amber-200">
              <p className="text-center text-sm text-gray-600 mb-4 italic">
                * Projected benefits based on industry benchmarks and similar auction-based platforms
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-white rounded-xl border-2 border-amber-200">
                  <div className="text-3xl sm:text-4xl font-bold text-amber-600 mb-2">Higher</div>
                  <p className="text-sm text-gray-700 font-medium">Average Salary Potential</p>
                </div>
                <div className="text-center p-6 bg-white rounded-xl border-2 border-amber-200">
                  <div className="text-3xl sm:text-4xl font-bold text-amber-600 mb-2">Faster</div>
                  <p className="text-sm text-gray-700 font-medium">Time-to-Hire Process</p>
                </div>
                <div className="text-center p-6 bg-white rounded-xl border-2 border-amber-200">
                  <div className="text-3xl sm:text-4xl font-bold text-amber-600 mb-2">Better</div>
                  <p className="text-sm text-gray-700 font-medium">Candidate Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reflections & Learnings Section */}
        <div className="mt-24 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-8 sm:p-12 rounded-3xl border-2 border-indigo-200 shadow-2xl">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-indigo-300 rounded-full mb-4">
              <span className="text-2xl">🎓</span>
              <span 
                className="text-sm font-bold text-indigo-900"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                KEY LEARNINGS
              </span>
            </div>
            <h3 
              className="text-2xl sm:text-3xl lg:text-4xl mb-4"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700 }}
            >
              Reflections & Growth
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            {/* What Worked Well */}
            <div className="bg-white p-8 rounded-2xl border-2 border-green-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-green-600 flex items-center justify-center">
                  <span className="text-xl">✅</span>
                </div>
                <h4 
                  className="text-xl font-bold text-gray-900"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  What Worked Well
                </h4>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-600 mt-2 flex-shrink-0"></div>
                  <p className="text-sm leading-relaxed text-gray-700">
                    <span className="font-bold">Flow-first approach</span> ensured logical user journeys before visual design
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-600 mt-2 flex-shrink-0"></div>
                  <p className="text-sm leading-relaxed text-gray-700">
                    <span className="font-bold">Design system</span> accelerated design speed and ensured consistency
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-600 mt-2 flex-shrink-0"></div>
                  <p className="text-sm leading-relaxed text-gray-700">
                    <span className="font-bold">Competitive benchmarking</span> helped apply proven UX patterns
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-600 mt-2 flex-shrink-0"></div>
                  <p className="text-sm leading-relaxed text-gray-700">
                    <span className="font-bold">Progressive disclosure</span> tamed complex information architecture
                  </p>
                </li>
              </ul>
            </div>

            {/* What I'd Improve */}
            <div className="bg-white p-8 rounded-2xl border-2 border-orange-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-orange-600 flex items-center justify-center">
                  <span className="text-xl">🔄</span>
                </div>
                <h4 
                  className="text-xl font-bold text-gray-900"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  What I'd Improve
                </h4>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-orange-600 mt-2 flex-shrink-0"></div>
                  <p className="text-sm leading-relaxed text-gray-700">
                    <span className="font-bold">Conduct usability testing</span> with real end-users to validate design decisions and identify friction points early
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-orange-600 mt-2 flex-shrink-0"></div>
                  <p className="text-sm leading-relaxed text-gray-700">
                    <span className="font-bold">Create interactive prototypes</span> for stakeholder demos to better communicate complex flows and interactions
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-orange-600 mt-2 flex-shrink-0"></div>
                  <p className="text-sm leading-relaxed text-gray-700">
                    <span className="font-bold">Develop micro-interaction specs</span> to document animation timing, transitions, and feedback states in detail
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-orange-600 mt-2 flex-shrink-0"></div>
                  <p className="text-sm leading-relaxed text-gray-700">
                    <span className="font-bold">Conduct accessibility audits</span> with assistive technology users to ensure WCAG compliance beyond color contrast
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {/* Key Takeaways */}
          <div className="bg-gradient-to-br from-indigo-600 to-purple-600 p-8 rounded-2xl text-white">
            <h4 
              className="text-xl font-bold mb-4 flex items-center gap-3"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              <span className="text-2xl">💡</span>
              Key Takeaways
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-bold mb-2">Designing at Enterprise Scale</h5>
                <p className="text-sm leading-relaxed text-indigo-100">
                  Managing complexity across 3 user roles taught me the importance of modular design systems 
                  and clear information architecture to maintain scalability.
                </p>
              </div>
              <div>
                <h5 className="font-bold mb-2">Balancing Innovation with Familiarity</h5>
                <p className="text-sm leading-relaxed text-indigo-100">
                  Introducing novel features like Job Auction required grounding them in familiar patterns 
                  to reduce learning curve and increase adoption.
                </p>
              </div>
              <div>
                <h5 className="font-bold mb-2">Stakeholder Collaboration</h5>
                <p className="text-sm leading-relaxed text-indigo-100">
                  Regular alignment with APNI and dev team prevented misalignment and ensured designs 
                  met business goals while remaining technically feasible.
                </p>
              </div>
              <div>
                <h5 className="font-bold mb-2">Designing for Real Impact</h5>
                <p className="text-sm leading-relaxed text-indigo-100">
                  This project reinforced that great design isn't just beautiful—it solves real problems 
                  and delivers measurable value to users and businesses.
                </p>
              </div>
            </div>
          </div>

          {/* Future Considerations */}
          <div className="mt-8 p-6 bg-white rounded-xl border-2 border-purple-200">
            <h4 
              className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              <span className="text-xl">🚀</span>
              Future Considerations (v2.0)
            </h4>
            <p 
              className="text-sm leading-relaxed text-gray-700 mb-4"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              With more time and resources, I would explore:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-600"></div>
                AI-powered job matching algorithms
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-600"></div>
                Video interview integration
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-600"></div>
                Advanced analytics dashboard for companies
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-600"></div>
                Mobile-first progressive web app
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-600"></div>
                Candidate skills portfolio showcase
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-600"></div>
                Real-time chat between candidates & companies
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}