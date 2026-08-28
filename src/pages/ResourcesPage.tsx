import { Container, PageHeader, Reveal } from '../components/ui'
import { LeadForm } from '../components/LeadForm'
import { usePageTitle } from '../hooks/usePageTitle'

export function ResourcesPage() {
  usePageTitle('Resources — Sumryx')

  return (
    <>
      <PageHeader
        label="Resources"
        title="Guides, product updates, and finance thinking."
        description="The blog, help centre, and API docs will live here. Subscribe to hear when the first pieces go live."
      />

      <section className="pb-24 sm:pb-32">
        <Container>
          <Reveal className="mx-auto max-w-xl rounded-xl border border-white/[0.08] bg-white/[0.018] p-8 text-center">
            <h2 className="text-sm font-semibold text-white">The modern finance briefing</h2>
            <p className="mt-1.5 text-[13px] leading-5 text-white/45">
              Product news and practical thinking for finance leaders. Sent occasionally.
            </p>
            <div className="mt-5">
              <LeadForm intent="newsletter" source="resources-page" />
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  )
}
