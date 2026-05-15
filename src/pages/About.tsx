import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export function About() {
  return (
    <main className="min-h-screen bg-background">
      <section className="mx-auto max-w-3xl px-6 py-24">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">About</h1>
        <p className="mt-6 text-lg text-muted-foreground">
          Replace this placeholder with the story of the project, the team, or the brand.
          Keep it short, visual, and personal.
        </p>
        <Button asChild className="mt-10">
          <Link to="/">Back to home</Link>
        </Button>
      </section>
    </main>
  )
}
