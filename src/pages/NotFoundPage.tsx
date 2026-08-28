import { Button, Container, Reveal, SectionLabel } from '../components/ui'
import { usePageTitle } from '../hooks/usePageTitle'

export function NotFoundPage() {
  usePageTitle('Page not found — Sumryx')

  return (
    <section className="grid-surface flex min-h-[70vh] items-center pb-24 pt-32 sm:pt-40">
      <Container>
        <Reveal className="mx-auto max-w-lg text-center">
          <div className="flex justify-center">
            <SectionLabel>404</SectionLabel>
          </div>
          <h1 className="display-text text-balance text-3xl font-semibold text-white sm:text-4xl">
            We couldn't find that page.
          </h1>
          <p className="mt-4 text-base leading-7 text-white/60">
            The page you're looking for doesn't exist or has moved.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="/">Back to home</Button>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
