import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="animate-enter text-4xl font-bold text-school-navy mb-8 text-center border-b-4 border-school-gold pb-4 inline-block mx-auto">About Us</h1>
        
        <div className="prose prose-lg max-w-none text-slate-700">
          <section className="card-lift animate-enter mb-12 bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <h2 className="text-2xl font-bold text-school-navy mb-4 flex items-center gap-3">
              <span className="text-school-gold">🎯</span> Our Mission
            </h2>
            <p className="leading-relaxed">
              To provide a nurturing, innovative, and inclusive learning environment that empowers students to discover their full potential, cultivate a lifelong love for learning, and develop the ethical foundation necessary to become responsible global citizens.
            </p>
          </section>

          <section className="card-lift animate-enter mb-12 bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <h2 className="text-2xl font-bold text-school-navy mb-4 flex items-center gap-3">
              <span className="text-school-gold">👁️</span> Our Vision
            </h2>
            <p className="leading-relaxed">
              To be a premier educational institution recognized for excellence in academics, character development, and holistic growth, shaping resilient leaders who will positively impact society.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-school-navy mb-4">Commitment to Academic Excellence</h2>
            <p className="mb-4 leading-relaxed">
              At Shashi Public Sr. Secondary School, academic rigor is balanced with creative exploration. We strictly adhere to the CBSE curriculum while employing innovative pedagogical practices. Our dedicated faculty members are committed to providing personalized attention, ensuring that every student's unique learning needs are met.
            </p>
            <p className="leading-relaxed">
              We believe that true excellence extends beyond textbooks. We encourage critical thinking, problem-solving, and practical application of knowledge through well-equipped laboratories, interactive smart classrooms, and diverse co-curricular programs.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-school-navy mb-4">Brief History & Values</h2>
            <p className="mb-4 leading-relaxed">
              Established with a clear vision to democratize quality education, Shashi Public School has grown from a humble beginning into a respected institution in Shahdara, Delhi. Over the decades, we have maintained a steadfast commitment to our core values:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 list-none pl-0">
              <li className="card-lift animate-enter bg-school-navy text-white p-4 rounded-xl shadow-sm">
                <strong>Integrity:</strong> Upholding honesty and strong moral principles in all actions.
              </li>
              <li className="card-lift animate-enter bg-school-navy text-white p-4 rounded-xl shadow-sm">
                <strong>Respect:</strong> Valuing the diversity and individuality of every school community member.
              </li>
              <li className="card-lift animate-enter bg-school-navy text-white p-4 rounded-xl shadow-sm">
                <strong>Excellence:</strong> Striving for the highest standards in academics and behavior.
              </li>
              <li className="card-lift animate-enter bg-school-navy text-white p-4 rounded-xl shadow-sm">
                <strong>Empathy:</strong> Fostering compassion and understanding towards others.
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-school-navy mb-6 text-center">Our Facilities</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:-translate-y-1 hover:shadow-md transition-all">
                <div className="text-3xl mb-3">🚌</div>
                <h3 className="text-xl font-bold text-school-navy mb-2">Transport</h3>
                <p className="text-sm text-slate-600 leading-relaxed">Safe and secure school transport facility covering major routes in and around Shahdara, equipped with GPS and trained staff.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:-translate-y-1 hover:shadow-md transition-all">
                <div className="text-3xl mb-3">📚</div>
                <h3 className="text-xl font-bold text-school-navy mb-2">Well-Stocked Library</h3>
                <p className="text-sm text-slate-600 leading-relaxed">A quiet space featuring a vast collection of academic books, journals, encyclopedias, and fictional literature to encourage reading habits.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:-translate-y-1 hover:shadow-md transition-all">
                <div className="text-3xl mb-3">💻</div>
                <h3 className="text-xl font-bold text-school-navy mb-2">Smart Classrooms</h3>
                <p className="text-sm text-slate-600 leading-relaxed">Technology-enabled classrooms that make learning interactive, visual, and highly engaging for students of all ages.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:-translate-y-1 hover:shadow-md transition-all">
                <div className="text-3xl mb-3">🔬</div>
                <h3 className="text-xl font-bold text-school-navy mb-2">Advanced Laboratories</h3>
                <p className="text-sm text-slate-600 leading-relaxed">Fully equipped Science (Physics, Chemistry, Biology) and Computer labs to provide hands-on practical experience.</p>
              </div>
            </div>
          </section>

          <section className="card-lift animate-enter mb-12 bg-school-navy text-school-white p-8 rounded-2xl shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-school-gold/10 rounded-full blur-2xl pointer-events-none -mr-10 -mt-10"></div>
            <h2 className="text-2xl font-bold text-school-gold mb-4">Principal's Message</h2>
            <p className="mb-4 leading-relaxed opacity-95 text-sm italic">
              "Education is not just about academic brilliance, but also about character building and nurturing responsible global citizens. At Shashi Public School, we strive to create a safe, stimulating, and inclusive environment where every child can discover their true potential. We partner with parents to ensure our students grow into confident, compassionate, and capable individuals."
            </p>
            <div className="font-bold mt-4 text-school-gold">— Principal, Shashi Public Sr. Sec. School</div>
          </section>
        </div>
      </div>
    </div>
  )
}
