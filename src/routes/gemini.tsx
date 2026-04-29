import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/gemini')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/gemini"!</div>
}
