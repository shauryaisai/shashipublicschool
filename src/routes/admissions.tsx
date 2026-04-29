import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admissions')({
  component: Admissions,
})

function Admissions() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-school-navy mb-4 border-b-4 border-school-gold pb-4 inline-block mx-auto">Admissions</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">Join the Shashi Public School family. We welcome students who are eager to learn, grow, and contribute positively to our community.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 pt-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 text-center relative pt-12 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 overflow-visible">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-school-gold text-school-navy rounded-full flex items-center justify-center text-xl font-bold shadow-md z-10">1</div>
            <h3 className="text-xl font-bold text-school-navy mb-3">Submit Registration</h3>
            <p className="text-slate-600 text-sm">Fill out the online inquiry form or collect the registration kit from the school reception.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 text-center relative pt-12 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 overflow-visible">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-school-gold text-school-navy rounded-full flex items-center justify-center text-xl font-bold shadow-md z-10">2</div>
            <h3 className="text-xl font-bold text-school-navy mb-3">Entrance Assessment</h3>
            <p className="text-slate-600 text-sm">Candidates for Grade 1 and above will undergo a brief assessment to understand their academic level.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 text-center relative pt-12 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 overflow-visible">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-school-gold text-school-navy rounded-full flex items-center justify-center text-xl font-bold shadow-md z-10">3</div>
            <h3 className="text-xl font-bold text-school-navy mb-3">Interaction & Enrollment</h3>
            <p className="text-slate-600 text-sm">A short interaction with parents followed by documentation and fee submission to confirm the seat.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <section className="bg-school-navy text-school-white p-10 rounded-3xl shadow-lg">
            <h2 className="text-2xl font-bold text-school-gold mb-6">Key Dates & Requirements</h2>
            <div className="mb-6">
              <h3 className="font-bold text-lg mb-2 border-b border-school-white/20 pb-2">Important Dates</h3>
              <ul className="space-y-2 text-sm opacity-90">
                <li className="flex justify-between"><span>Registration Opens:</span> <span className="font-semibold">March 1, 2026</span></li>
                <li className="flex justify-between"><span>First List Announcement:</span> <span className="font-semibold">March 20, 2026</span></li>
                <li className="flex justify-between"><span>New Session Begins:</span> <span className="font-semibold">April 4, 2026</span></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2 border-b border-school-white/20 pb-2">Required Documents</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm opacity-90">
                <li>Birth Certificate (Municipal Corporation)</li>
                <li>Transfer Certificate (TC) from previous school</li>
                <li>Previous year's report card</li>
                <li>Address Proof (Aadhar/Voter ID/Utility Bill)</li>
                <li>4 Passport size photographs of the child</li>
                <li>Medical Fitness Certificate</li>
              </ul>
            </div>
          </section>

          <section className="flex flex-col justify-center items-center bg-slate-50 p-10 rounded-3xl border-2 border-dashed border-slate-300 text-center">
            <div className="text-6xl mb-6">📄</div>
            <h2 className="text-2xl font-bold text-school-navy mb-4">Ready to Apply?</h2>
            <p className="text-slate-600 mb-8 max-w-md">
              Download our comprehensive school prospectus for detailed information about our fees, policies, and detailed curriculum structure.
            </p>
            <button className="bg-school-navy text-school-white px-8 py-4 rounded-full font-bold hover:bg-school-gold hover:text-school-navy transition-colors shadow-md flex items-center gap-2">
              <span>⬇️</span> Download Prospectus (PDF)
            </button>
          </section>
        </div>

        {/* Downloads Block */}
        <div className="mt-12 bg-school-navy text-school-white p-10 rounded-3xl shadow-lg flex flex-col md:flex-row items-center justify-between gap-8 border-4 border-school-gold/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-school-gold/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="relative z-10 text-center md:text-left">
            <h2 className="text-3xl font-extrabold text-school-gold mb-3">Downloads</h2>
            <p className="text-school-white/90 text-lg font-medium max-w-xl">Get the official admission form for the upcoming academic session. Please print, fill out, and submit at the school reception.</p>
          </div>
          <div className="relative z-10 shrink-0">
            <a href="/New-admission-form.pdf" download className="inline-flex bg-school-gold text-school-navy px-8 py-5 rounded-full font-black text-lg hover:bg-yellow-400 transition-all shadow-xl shadow-school-gold/30 items-center gap-3 animate-[pulse_2s_ease-in-out_infinite] hover:animate-none hover:scale-105 hover:-translate-y-1 whitespace-nowrap">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
              Download Admission PDF
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}