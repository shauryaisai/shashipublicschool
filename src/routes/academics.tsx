import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/academics')({
  component: Academics,
})

function Academics() {
  return (
    <div className="py-16 px-4 bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="animate-enter text-4xl font-bold text-school-navy mb-12 text-center border-b-4 border-school-gold pb-4 inline-block mx-auto">Academics</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <section className="card-lift animate-enter bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h2 className="text-2xl font-bold text-school-navy mb-4">CBSE Curriculum</h2>
              <p className="text-slate-700 mb-4 leading-relaxed">
                Shashi Public Sr. Secondary School is proudly affiliated with the Central Board of Secondary Education (CBSE), New Delhi. Our curriculum is designed to provide a comprehensive and balanced education that promotes intellectual, physical, and emotional growth.
              </p>
              <p className="text-slate-700 leading-relaxed">
                We focus on continuous and comprehensive evaluation, ensuring students are prepared not just for examinations, but for the challenges of higher education and life beyond school.
              </p>
            </section>

            <section className="card-lift animate-enter bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h2 className="text-2xl font-bold text-school-navy mb-6">Departments Overview</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border-l-4 border-school-gold pl-4 hover:pl-6 hover:border-school-navy transition-all duration-300">
                  <h3 className="text-xl font-bold text-school-navy mb-2">Science</h3>
                  <p className="text-sm text-slate-600">Equipped with state-of-the-art Physics, Chemistry, and Biology laboratories to foster scientific inquiry and practical skills.</p>
                </div>
                <div className="border-l-4 border-school-gold pl-4 hover:pl-6 hover:border-school-navy transition-all duration-300">
                  <h3 className="text-xl font-bold text-school-navy mb-2">Commerce</h3>
                  <p className="text-sm text-slate-600">Comprehensive programs focusing on Accountancy, Business Studies, and Economics to build future entrepreneurs.</p>
                </div>
                <div className="border-l-4 border-school-gold pl-4 hover:pl-6 hover:border-school-navy transition-all duration-300">
                  <h3 className="text-xl font-bold text-school-navy mb-2">Humanities</h3>
                  <p className="text-sm text-slate-600">Encouraging critical thought through subjects like History, Political Science, and Sociology.</p>
                </div>
                <div className="border-l-4 border-school-gold pl-4 hover:pl-6 hover:border-school-navy transition-all duration-300">
                  <h3 className="text-xl font-bold text-school-navy mb-2">Information Technology</h3>
                  <p className="text-sm text-slate-600">Modern computer labs dedicated to developing essential digital literacy and coding proficiency.</p>
                </div>
              </div>
            </section>
          </div>

          <div className="space-y-8">
            <section className="bg-school-navy text-school-white p-8 rounded-2xl shadow-md">
              <h2 className="text-2xl font-bold text-school-gold mb-6">Our Faculty</h2>
              <p className="text-sm mb-6 leading-relaxed opacity-90">
                Our greatest asset is our team of highly qualified, dedicated, and experienced educators. They are more than just teachers; they are mentors who guide students towards discovering their passions.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-school-white/20 flex items-center justify-center font-bold">📚</div>
                  <div>
                    <div className="font-bold">Continuous Training</div>
                    <div className="text-xs opacity-75">Regular workshops on modern pedagogy</div>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-school-white/20 flex items-center justify-center font-bold">🤝</div>
                  <div>
                    <div className="font-bold">Student-Centric</div>
                    <div className="text-xs opacity-75">Personalized attention for every child</div>
                  </div>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

