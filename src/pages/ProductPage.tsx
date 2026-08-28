import { ArrowDownUp, Bot, Boxes, Cable, ChartNoAxesCombined, GitBranch } from 'lucide-react'
import { Button, Container, PageHeader, Reveal, SectionHeading } from '../components/ui'
import { usePageTitle } from '../hooks/usePageTitle'

const pillars = [
  { icon: Boxes, title: 'Consolidation', description: 'Multi-entity, multi-currency consolidation without spreadsheet fragility.' },
  { icon: Bot, title: 'AI reporting', description: 'Board-ready narratives and variance analysis, generated from live data.' },
  { icon: ArrowDownUp, title: 'Reconciliation', description: 'Intercompany matching and eliminations with a full audit trail.' },
  { icon: ChartNoAxesCombined, title: 'Forecasting', description: 'Driver-based forecasts that update as actuals land.' },
  { icon: GitBranch, title: 'Workflows', description: 'Close, review, and approval processes coordinated in one system.' },
  { icon: Cable, title: 'Integrations', description: 'Connects to the accounting stack you already run.' },
]

export function ProductPage() {
  usePageTitle('Product — Sumryx')

  return (
    <>
      <PageHeader
        label="Product"
        title="One system for consolidation, reporting, and finance operations."
        description="This page is the home for the full product deep-dive as each area is built out — start from the pillars below and expand each into its own section."
        actions={
          <>
            <Button href="/pricing">See pricing brackets</Button>
            <Button href="/#waitlist" variant="secondary">Join early access</Button>
          </>
        }
      />

      <section className="pb-24 sm:pb-32">
        <Container>
          <SectionHeading
            label="Built to expand"
            title="Six pillars, each ready for its own detailed section."
            description="Use these as the starting scaffold — turn any card into a full section with product screenshots, workflows, and customer proof as the product comes together."
          />

          <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.08] md:grid-cols-2 lg:grid-cols-3">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon
              return (
                <Reveal key={pillar.title} delay={(index % 3) * 0.06} className="h-full">
                  <article className="h-full bg-[#09131b] p-6 sm:p-7">
                    <div className="grid h-9 w-9 place-items-center rounded-lg border border-white/[0.08] bg-white/[0.035] text-teal-300">
                      <Icon className="h-4 w-4" />
                    </div>
                    <h3 className="mt-5 text-[15px] font-semibold text-white">{pillar.title}</h3>
                    <p className="mt-2 text-[13px] leading-6 text-white/48">{pillar.description}</p>
                  </article>
                </Reveal>
              )
            })}
          </div>
        </Container>
      </section>
    </>
  )
}
