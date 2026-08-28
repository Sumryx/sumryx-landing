import { Check, Sparkles } from 'lucide-react'
import { Button, Container, PageHeader, Reveal, SectionLabel } from '../components/ui'
import { usePageTitle } from '../hooks/usePageTitle'

type Tier = {
  name: string
  audience: string
  price: string
  priceNote: string
  featured?: boolean
  features: string[]
  cta: { label: string; href: string; variant: 'primary' | 'secondary' }
}

// Brackets reflect who each plan is for and what's included. Prices are
// intentionally left as "TBD" until the commercial model is finalised —
// fill in real figures here once pricing is locked.
const tiers: Tier[] = [
  {
    name: 'Starter',
    audience: 'Single-entity teams moving off spreadsheets',
    price: 'TBD',
    priceNote: 'Pricing to be announced',
    features: [
      'Single entity, one reporting currency',
      'Core AI reporting & management commentary',
      'Standard accounting integrations',
      'Email support',
    ],
    cta: { label: 'Register interest', href: '/#waitlist', variant: 'secondary' },
  },
  {
    name: 'Growth',
    audience: 'Multi-entity groups scaling fast',
    price: 'TBD',
    priceNote: 'Pricing to be announced',
    featured: true,
    features: [
      'Everything in Starter',
      'Multi-entity, multi-currency consolidation',
      'Intercompany reconciliation & eliminations',
      'Driver-based forecasting',
      'Workflow automation for close & approvals',
      'Priority support',
    ],
    cta: { label: 'Register interest', href: '/#waitlist', variant: 'primary' },
  },
  {
    name: 'Firms & Enterprise',
    audience: 'Accounting firms and complex groups',
    price: 'Custom',
    priceNote: 'Talk to us about your portfolio',
    features: [
      'Everything in Growth',
      'Multi-client portfolio command centre',
      'Advanced security, audit trails & controls',
      'Role-based access across clients & entities',
      'Dedicated onboarding & support',
    ],
    cta: { label: 'Register firm interest', href: '/#waitlist', variant: 'secondary' },
  },
]

export function PricingPage() {
  usePageTitle('Pricing — Sumryx')

  return (
    <>
      <PageHeader
        label="Pricing"
        title="Plans built around how finance teams actually grow."
        description="We're finalising exact pricing. Here's how the brackets are shaping up — what's included at each stage, from a single entity to a full accounting-firm portfolio."
        actions={
          <>
            <Button href="/#waitlist">Get pricing updates</Button>
            <Button href="/product" variant="secondary">Explore the product</Button>
          </>
        }
      />

      <section className="pb-24 sm:pb-32">
        <Container>
          <Reveal className="mx-auto mb-10 flex max-w-xl items-center justify-center gap-2 rounded-full border border-teal-400/20 bg-teal-400/[0.06] px-4 py-2 text-center text-[12px] text-teal-200">
            <Sparkles className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            Indicative brackets — final prices land here once the commercial model is confirmed.
          </Reveal>

          <div className="grid gap-5 lg:grid-cols-3">
            {tiers.map((tier, index) => (
              <Reveal key={tier.name} delay={index * 0.08} className="h-full">
                <article
                  className={`flex h-full flex-col rounded-xl border p-7 ${
                    tier.featured
                      ? 'border-teal-400/35 bg-[#0b1a17] shadow-[0_0_0_1px_rgba(20,184,166,.18)_inset,0_25px_70px_rgba(20,184,166,.12)]'
                      : 'border-white/[0.08] bg-white/[0.018]'
                  }`}
                >
                  {tier.featured && (
                    <div className="mb-4">
                      <SectionLabel>Most popular</SectionLabel>
                    </div>
                  )}
                  <h3 className="text-lg font-semibold text-white">{tier.name}</h3>
                  <p className="mt-1.5 text-[13px] leading-5 text-white/45">{tier.audience}</p>

                  <div className="mt-6">
                    <div className="text-3xl font-semibold tracking-tight text-white">{tier.price}</div>
                    <div className="mt-1 text-[11px] text-white/35">{tier.priceNote}</div>
                  </div>

                  <ul className="mt-6 flex-1 space-y-3">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-[13px] leading-5 text-white/60">
                        <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-teal-300" aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button href={tier.cta.href} variant={tier.cta.variant} className="mt-8 w-full">
                    {tier.cta.label}
                  </Button>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} className="mx-auto mt-10 max-w-2xl text-center text-[13px] leading-6 text-white/40">
            Final pricing will depend on entity count, user seats, and optional modules like AI copilot usage
            and accounting-firm portfolio tools. Register interest to be notified when plans and pricing go live.
          </Reveal>
        </Container>
      </section>
    </>
  )
}
