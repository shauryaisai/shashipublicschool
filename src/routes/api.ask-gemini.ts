import { createFileRoute } from '@tanstack/react-router'
import { GoogleGenerativeAI } from '@google/generative-ai'

export const Route = createFileRoute('/api/ask-gemini')({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const body = await request.json()
          const question = body.question
          const chatHistory = Array.isArray(body.chatHistory)
            ? body.chatHistory
            : []

          // Check both process.env and a direct fallback
          const apiKey = process.env.GEMINI_API_KEY || process.env['GEMINI_API_KEY']
          
          if (!apiKey) {
            console.error('API Key Missing. Available Env Vars:', Object.keys(process.env).filter(k => !k.includes('SECRET') && !k.includes('KEY')))
            return new Response(
              JSON.stringify({
                answer:
                  'The AI assistant is still not seeing the GEMINI_API_KEY. Please check your Vercel Project Settings.',
              }),
              {
                status: 500,
                headers: { 'Content-Type': 'application/json' },
              },
            )
          }

          const genAI = new GoogleGenerativeAI(apiKey)

          const systemInstruction = `You are the official AI assistant for Shashi Public Sr. Secondary School in Delhi.

CRITICAL INSTRUCTIONS:
1. ONLY answer questions related to the school, admissions, academics, facilities, and contact info.
2. If the user asks about ANYTHING else (e.g., coding, weather, recipes, politics, general trivia), you MUST politely decline and state that you are an educational assistant and can only answer questions related to Shashi Public School.
3. Keep your answers concise, professional, friendly, and helpful.
4. If the user asks for the prospectus, admission form, or PDF, tell them they can download it from the Admissions page and you MUST include the exact text "[LINK_ADMISSIONS]" in your response so the system can show them a button.
5. If the user asks about the school's location, address, phone number, or how to contact, include the exact text "[LINK_CONTACT]".
6. If the user asks about the curriculum, subjects, or departments, include the exact text "[LINK_ACADEMICS]".
7. If the user asks for the school's history, mission, or vision, include the exact text "[LINK_ABOUT]".
8. If the user asks for photos or pictures of the school, include the exact text "[LINK_GALLERY]".

SCHOOL DETAILS (Use this to answer questions):
- Address: A-35, DDA Flats Road Near M. S. Park, Mandoli Road, Shahdara, Delhi - 110032
- Phone: 011-2258 1138, +91 98100 77384
- Email: info@shashipublicschool.co.in
- Affiliation: CBSE (Central Board of Secondary Education)
- Departments: Science, Commerce, Humanities, Information Technology`

          const model = genAI.getGenerativeModel({
            model: 'gemini-2.5-flash',
            systemInstruction: systemInstruction
          })

          const chat = model.startChat({
            history: chatHistory.map(msg => ({
              role: msg.role === 'assistant' ? 'model' : msg.role,
              parts: msg.parts
            })),
          })

          const result = await chat.sendMessage(question)
          const answer = result.response.text()

          return new Response(JSON.stringify({ answer }), {
            headers: { 'Content-Type': 'application/json' },
          })
        } catch (error) {
          const message =
            error instanceof Error ? error.message : 'Unknown server error.'

          console.error('Gemini API Error:', error)
          return new Response(JSON.stringify({ answer: message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
          })
        }
      },
    },
  },
})
