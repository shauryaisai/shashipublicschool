import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/cbse-mandatory-disclosure')({
  component: CBSEDisclosure,
})

function CBSEDisclosure() {
  return (
    <div className="py-16 px-4 bg-slate-50 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <h1 className="animate-enter text-3xl md:text-4xl font-bold text-school-navy mb-10 text-center border-b-4 border-school-gold pb-4 inline-block mx-auto">
          CBSE Mandatory Public Disclosure
        </h1>

        <div className="space-y-10">
          {/* A. General Information */}
          <section className="card-lift animate-enter bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden" style={{ animationDelay: '100ms' }}>
            <h2 className="bg-school-navy text-school-white text-xl font-bold px-6 py-4">A. General Information</h2>
            <div className="p-0 overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <tbody>
                  <tr className="border-b border-slate-100"><td className="py-3 px-6 font-semibold w-1/3 text-slate-700">Name of the School</td><td className="py-3 px-6 text-slate-600">Shashi Public Sr. Secondary School</td></tr>
                  <tr className="border-b border-slate-100"><td className="py-3 px-6 font-semibold w-1/3 text-slate-700">Affiliation No.</td><td className="py-3 px-6 text-slate-600">2730302</td></tr>
                  <tr className="border-b border-slate-100"><td className="py-3 px-6 font-semibold w-1/3 text-slate-700">School Code</td><td className="py-3 px-6 text-slate-600">85303</td></tr>
                  <tr className="border-b border-slate-100"><td className="py-3 px-6 font-semibold w-1/3 text-slate-700">Complete Address with Pin Code</td><td className="py-3 px-6 text-slate-600">A-35, DDA Flats Road Near M. S. Park, Mandoli Road, Shahdara, Delhi – 110032</td></tr>
                  <tr className="border-b border-slate-100"><td className="py-3 px-6 font-semibold w-1/3 text-slate-700">Principal Name & Qualification</td><td className="py-3 px-6 text-slate-600">Available on Request</td></tr>
                  <tr className="border-b border-slate-100"><td className="py-3 px-6 font-semibold w-1/3 text-slate-700">School Email ID</td><td className="py-3 px-6 text-slate-600">info@shashipublicschool.co.in</td></tr>
                  <tr><td className="py-3 px-6 font-semibold w-1/3 text-slate-700">Contact Details</td><td className="py-3 px-6 text-slate-600">011-2258 1138, +91 98100 77384</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* B. Documents and Information */}
          <section className="card-lift animate-enter bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden" style={{ animationDelay: '200ms' }}>
            <h2 className="bg-school-navy text-school-white text-xl font-bold px-6 py-4">B. Documents and Information</h2>
            <div className="p-6">
              <ul className="space-y-4">
                <li className="flex flex-col sm:flex-row gap-4 sm:justify-between sm:items-center border-b border-slate-100 pb-3">
                  <span className="text-slate-700 font-medium">1. Copies of Affiliation/Upgradation Letter and Recent Extension of Affiliation</span>
                  <a href="/documents/affiliation-letter.pdf" target="_blank" rel="noopener noreferrer" className="text-school-gold font-bold hover:underline px-4 py-1 rounded bg-slate-50 border border-slate-200 hover:bg-school-gold hover:text-school-navy transition-colors text-center whitespace-nowrap">View Document</a>
                </li>
                <li className="flex flex-col sm:flex-row gap-4 sm:justify-between sm:items-center border-b border-slate-100 pb-3">
                  <span className="text-slate-700 font-medium">2. Copies of Societies/Trust/Company Registration/Renewal Certificate</span>
                  <a href="/documents/society-registration.pdf" target="_blank" rel="noopener noreferrer" className="text-school-gold font-bold hover:underline px-4 py-1 rounded bg-slate-50 border border-slate-200 hover:bg-school-gold hover:text-school-navy transition-colors text-center whitespace-nowrap">View Document</a>
                </li>
                <li className="flex flex-col sm:flex-row gap-4 sm:justify-between sm:items-center border-b border-slate-100 pb-3">
                  <span className="text-slate-700 font-medium">3. Copy of No Objection Certificate (NOC) Issued by State Govt./UT</span>
                  <a href="/documents/noc.pdf" target="_blank" rel="noopener noreferrer" className="text-school-gold font-bold hover:underline px-4 py-1 rounded bg-slate-50 border border-slate-200 hover:bg-school-gold hover:text-school-navy transition-colors text-center whitespace-nowrap">View Document</a>
                </li>
                <li className="flex flex-col sm:flex-row gap-4 sm:justify-between sm:items-center border-b border-slate-100 pb-3">
                  <span className="text-slate-700 font-medium">4. Copies of Recognition Certificate Under RTE Act, 2009</span>
                  <a href="/documents/recognition-certificate.pdf" target="_blank" rel="noopener noreferrer" className="text-school-gold font-bold hover:underline px-4 py-1 rounded bg-slate-50 border border-slate-200 hover:bg-school-gold hover:text-school-navy transition-colors text-center whitespace-nowrap">View Document</a>
                </li>
                <li className="flex flex-col sm:flex-row gap-4 sm:justify-between sm:items-center">
                  <span className="text-slate-700 font-medium">5. Copy of Valid Building Safety Certificate as per the National Building Code</span>
                  <a href="/documents/building-safety.pdf" target="_blank" rel="noopener noreferrer" className="text-school-gold font-bold hover:underline px-4 py-1 rounded bg-slate-50 border border-slate-200 hover:bg-school-gold hover:text-school-navy transition-colors text-center whitespace-nowrap">View Document</a>
                </li>
              </ul>
            </div>
          </section>

          {/* C. Result and Academics */}
          <section className="card-lift animate-enter bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden" style={{ animationDelay: '300ms' }}>
            <h2 className="bg-school-navy text-school-white text-xl font-bold px-6 py-4">C. Result and Academics</h2>
            <div className="p-6">
              <ul className="space-y-4">
                <li className="flex flex-col sm:flex-row gap-4 sm:justify-between sm:items-center border-b border-slate-100 pb-3">
                  <span className="text-slate-700 font-medium">1. Fee Structure of the School</span>
                  <a href="/documents/fee-structure.pdf" target="_blank" rel="noopener noreferrer" className="text-school-gold font-bold hover:underline px-4 py-1 rounded bg-slate-50 border border-slate-200 hover:bg-school-gold hover:text-school-navy transition-colors text-center whitespace-nowrap">View Document</a>
                </li>
                <li className="flex flex-col sm:flex-row gap-4 sm:justify-between sm:items-center border-b border-slate-100 pb-3">
                  <span className="text-slate-700 font-medium">2. Annual Academic Calendar</span>
                  <a href="/documents/academic-calendar.pdf" target="_blank" rel="noopener noreferrer" className="text-school-gold font-bold hover:underline px-4 py-1 rounded bg-slate-50 border border-slate-200 hover:bg-school-gold hover:text-school-navy transition-colors text-center whitespace-nowrap">View Document</a>
                </li>
                <li className="flex flex-col sm:flex-row gap-4 sm:justify-between sm:items-center border-b border-slate-100 pb-3">
                  <span className="text-slate-700 font-medium">3. List of School Management Committee (SMC)</span>
                  <a href="/documents/smc.pdf" target="_blank" rel="noopener noreferrer" className="text-school-gold font-bold hover:underline px-4 py-1 rounded bg-slate-50 border border-slate-200 hover:bg-school-gold hover:text-school-navy transition-colors text-center whitespace-nowrap">View Document</a>
                </li>
                <li className="flex flex-col sm:flex-row gap-4 sm:justify-between sm:items-center">
                  <span className="text-slate-700 font-medium">4. List of Parents Teachers Association (PTA) Members</span>
                  <a href="/documents/pta.pdf" target="_blank" rel="noopener noreferrer" className="text-school-gold font-bold hover:underline px-4 py-1 rounded bg-slate-50 border border-slate-200 hover:bg-school-gold hover:text-school-navy transition-colors text-center whitespace-nowrap">View Document</a>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}