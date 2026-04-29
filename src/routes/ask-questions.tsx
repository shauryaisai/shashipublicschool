import { createFileRoute, Link } from '@tanstack/react-router'
import React, { useState } from 'react'

export const Route = createFileRoute('/ask-questions')({
  component: AskQuestions,
})

function AskQuestions() {
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')
  const [loading, setLoading] = useState(false)
  const [chatHistory, setChatHistory] = useState<any[]>([])

  const handleAskAI = async (e?: React.SyntheticEvent) => {
    e?.preventDefault()
    if (!question.trim()) return

    setLoading(true)
    setAnswer('')

    try {
      const response = await fetch('/api/ask-gemini', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question, chatHistory }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.answer || 'Request failed')
      }

      setChatHistory((previous) => [
        ...previous,
        {
          role: 'user',
          parts: [{ text: question }],
        },
        {
          role: 'model',
          parts: [{ text: data.answer }],
        },
      ])
      setAnswer(data.answer)
      setQuestion('')
    } catch (error) {
      console.error('AI Error:', error)
      setAnswer(
        `Error connecting to AI: ${error instanceof Error ? error.message : String(error)}`,
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="py-16 px-4 min-h-[70vh] flex flex-col items-center justify-center">
      <div className="max-w-3xl w-full bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
        <div className="text-center mb-8">
          <div className="text-5xl mb-4">Ask</div>
          <h1 className="text-3xl font-bold text-school-navy mb-2">Ask our AI Assistant</h1>
          <p className="text-slate-600">Have questions about admissions, fees, or academics? Ask away!</p>
        </div>

        <form onSubmit={handleAskAI} className="space-y-4 mb-8">
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault()
                if (question.trim() && !loading) {
                  handleAskAI()
                }
              }
            }}
            rows={3}
            className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-school-gold focus:border-transparent resize-none"
            placeholder="e.g. What is the admission process for Grade 1?"
          ></textarea>
          <button
            disabled={loading || !question.trim()}
            type="submit"
            className="w-full bg-school-navy text-school-white py-4 rounded-xl font-bold text-lg hover:bg-school-gold hover:text-school-navy transition-colors shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Thinking...' : 'Ask Question'}
          </button>
        </form>

        {answer && (
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 animate-enter">
            <h3 className="font-bold text-school-navy mb-2 flex items-center gap-2">
              <span>Answer</span>
            </h3>
            <div className="text-slate-700 leading-relaxed whitespace-pre-wrap">
              {answer.split(/(\[LINK_[A-Z]+\])/g).map((part, index) => {
                if (part === '[LINK_ADMISSIONS]') return <div key={index} className="mt-4 mb-2"><Link to="/admissions" className="inline-flex items-center gap-2 bg-school-navy text-school-white px-6 py-3 rounded-xl font-bold hover:bg-school-gold hover:text-school-navy transition-colors shadow-md">Go to Admissions & Downloads</Link></div>
                if (part === '[LINK_CONTACT]') return <div key={index} className="mt-4 mb-2"><Link to="/contact" className="inline-flex items-center gap-2 bg-school-navy text-school-white px-6 py-3 rounded-xl font-bold hover:bg-school-gold hover:text-school-navy transition-colors shadow-md">Go to Contact Us</Link></div>
                if (part === '[LINK_ABOUT]') return <div key={index} className="mt-4 mb-2"><Link to="/about" className="inline-flex items-center gap-2 bg-school-navy text-school-white px-6 py-3 rounded-xl font-bold hover:bg-school-gold hover:text-school-navy transition-colors shadow-md">Go to About Us</Link></div>
                if (part === '[LINK_ACADEMICS]') return <div key={index} className="mt-4 mb-2"><Link to="/academics" className="inline-flex items-center gap-2 bg-school-navy text-school-white px-6 py-3 rounded-xl font-bold hover:bg-school-gold hover:text-school-navy transition-colors shadow-md">Go to Academics</Link></div>
                if (part === '[LINK_GALLERY]') return <div key={index} className="mt-4 mb-2"><Link to="/gallery" className="inline-flex items-center gap-2 bg-school-navy text-school-white px-6 py-3 rounded-xl font-bold hover:bg-school-gold hover:text-school-navy transition-colors shadow-md">Go to Gallery</Link></div>
                return <span key={index}>{part}</span>
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
