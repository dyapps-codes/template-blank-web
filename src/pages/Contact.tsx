import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export function Contact() {
  return (
    <main className="min-h-screen bg-background">
      <section className="mx-auto max-w-3xl px-6 py-24">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">Contact</h1>
        <p className="mt-6 text-lg text-muted-foreground">
          Replace this placeholder with a contact form (name, email, message). If you want the
          messages to persist, ask the agent to create a `contact_messages` table and an
          endpoint to receive submissions.
        </p>
        <Button asChild className="mt-10">
          <Link to="/">Back to home</Link>
        </Button>
      </section>
    </main>
  )
}
