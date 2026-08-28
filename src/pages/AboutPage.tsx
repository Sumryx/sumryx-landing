import { Button, Container, PageHeader, Reveal } from '../components/ui'
import { usePageTitle } from '../hooks/usePageTitle'

export function AboutPage() {
  usePageTitle('About — Sumryx')

  return (
    <>
      <PageHeader
        label="About"
        title="Building the finance operating system we wished we had."
        description="Company story, team, and mission go here — this page is scaffolded and ready to build on."
        actions={<Button href="/#waitlist">Join early access</Button>}
      />

      <section className="pb-24 sm:pb-32">
        <Container>
          <Reveal className="mx-auto max-w-2xl rounded-xl border border-white/[0.08] bg-white/[0.018] p-8 text-center">
            <p className="text-sm leading-6 text-white/50">
              Add the company narrative, team, values, and any press or investor details here as they're ready.
            </p>
          </Reveal>
        </Container>
      </section>
    </>
  )
}
