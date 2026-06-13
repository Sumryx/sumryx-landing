import {
  ArrowDownUp,
  Bot,
  Boxes,
  Cable,
  ChartNoAxesCombined,
  GitBranch,
  type LucideIcon,
} from 'lucide-react'
import { Container, Reveal, SectionHeading } from './ui'

type Feature = {
  icon: LucideIcon
  title: string
  description: string
  visual: 'reporting' | 'entities' | 'reconciliation' | 'forecast' | 'workflow' | 'integrations'
}

const features: Feature[] = [
  {
    icon: Bot,
    title: 'AI reporting',
    description: 'Turn live financial data into board-ready narratives, variance analysis, and answers in seconds.',
    visual: 'reporting',
  },
  {
    icon: Boxes,
    title: 'Multi-entity consolidation',
    description: 'Consolidate every entity, currency, and ownership structure without spreadsheet fragility.',
    visual: 'entities',
  },
  {
    icon: ArrowDownUp,
    title: 'Intercompany reconciliation',
    description: 'Match, investigate, and eliminate intercompany balances with a complete audit trail.',
    visual: 'reconciliation',
  },
  {
    icon: ChartNoAxesCombined,
    title: 'Forecasting',
    description: 'Build connected forecasts with driver-based models and continuously updated actuals.',
    visual: 'forecast',
  },
  {
    icon: GitBranch,
    title: 'Workflow automation',
    description: 'Coordinate close, approvals, controls, and recurring finance processes from one system.',
    visual: 'workflow',
  },
  {
    icon: Cable,
    title: 'Accounting integrations',
    description: 'Connect the tools you already use. Sumryx becomes the intelligent layer across your stack.',
    visual: 'integrations',
  },
]

function FeatureVisual({ type }: { type: Feature['visual'] }) {
  if (type === 'reporting') {
    return (
      <div className="mt-7 space-y-2">
        {[
          ['Revenue variance explained', 'Complete'],
          ['Board pack commentary', 'Drafted'],
          ['May management report', 'Ready'],
        ].map(([label, state], index) => (
          <div key={label} className="flex items-center justify-between rounded-md border border-white/[0.06] bg-black/10 px-3 py-2.5">
            <span className="text-[10px] text-white/48">{label}</span>
            <span className={`text-[8px] ${index === 0 ? 'text-teal-300' : 'text-white/28'}`}>{state}</span>
          </div>
        ))}
      </div>
    )
  }

  if (type === 'entities') {
    return (
      <div className="relative mt-8 flex h-[91px] items-center justify-center">
        <div className="absolute h-px w-[70%] bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        {['UK', 'US', 'EU'].map((entity, index) => (
          <div key={entity} className={`absolute grid h-10 w-10 place-items-center rounded-lg border text-[9px] font-medium ${
            index === 1 ? 'z-10 border-teal-400/35 bg-[#11312d] text-teal-200' : 'border-white/10 bg-[#101a23] text-white/45'
          } ${index === 0 ? 'left-[12%]' : index === 2 ? 'right-[12%]' : ''}`}>
            {entity}
          </div>
        ))}
        <div className="absolute bottom-0 rounded-md border border-white/[0.08] bg-[#0c171f] px-3 py-1 text-[8px] text-white/40">
          Group consolidation
        </div>
      </div>
    )
  }

  if (type === 'reconciliation') {
    return (
      <div className="mt-7 grid grid-cols-[1fr_auto_1fr] items-center gap-2">
        <div className="rounded-lg border border-white/[0.07] bg-black/10 p-3">
          <div className="text-[8px] text-white/28">UK → US</div>
          <div className="mt-1 text-sm font-medium text-white/75">£84,200</div>
        </div>
        <div className="grid h-7 w-7 place-items-center rounded-full border border-teal-400/25 bg-teal-400/10">
          <ArrowDownUp className="h-3 w-3 text-teal-300" />
        </div>
        <div className="rounded-lg border border-white/[0.07] bg-black/10 p-3">
          <div className="text-[8px] text-white/28">US ← UK</div>
          <div className="mt-1 text-sm font-medium text-white/75">$106,784</div>
        </div>
        <div className="col-span-3 flex items-center gap-2 pt-2 text-[9px] text-teal-300">
          <span className="h-1.5 w-1.5 rounded-full bg-teal-400" /> Matched · £0 difference
        </div>
      </div>
    )
  }

  if (type === 'forecast') {
    return (
      <div className="relative mt-7 h-[100px]">
        <div className="absolute inset-0 flex flex-col justify-between">
          {[1, 2, 3].map((line) => <span key={line} className="h-px bg-white/[0.05]" />)}
        </div>
        <svg viewBox="0 0 300 100" className="absolute inset-0 h-full w-full" preserveAspectRatio="none" aria-label="Forecast graph">
          <path d="M0 82 C45 78, 54 53, 102 60 S165 25, 210 37 S256 14,300 18" fill="none" stroke="#14B8A6" strokeWidth="2" />
          <path d="M0 86 C45 80, 54 64, 102 66 S165 38, 210 43 S256 23,300 31" fill="none" stroke="rgba(255,255,255,.18)" strokeWidth="1.5" strokeDasharray="4 4" />
          <path d="M210 37 C244 18,265 15,300 18 L300 31 C267 25,242 24,210 43 Z" fill="rgba(20,184,166,.10)" />
        </svg>
        <span className="absolute right-0 top-0 text-[8px] text-teal-300">Base case</span>
      </div>
    )
  }

  if (type === 'workflow') {
    return (
      <div className="mt-7 flex items-center">
        {['Close', 'Review', 'Report'].map((step, index) => (
          <div key={step} className="flex flex-1 items-center last:flex-none">
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-teal-400/25 bg-teal-400/10 text-[8px] font-medium text-teal-200">
              {step}
            </div>
            {index < 2 && <div className="h-px flex-1 bg-gradient-to-r from-teal-400/40 to-white/10" />}
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="mt-8 flex items-center justify-between">
      {['X', 'Q', 'N', 'S', '+8'].map((logo, index) => (
        <div key={logo} className={`grid h-10 w-10 place-items-center rounded-lg border text-[10px] font-semibold ${
          index === 4 ? 'border-teal-400/20 bg-teal-400/[0.07] text-teal-300' : 'border-white/[0.08] bg-black/10 text-white/40'
        }`}>
          {logo}
        </div>
      ))}
    </div>
  )
}

export function Features() {
  return (
    <section id="product" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          label="One finance system"
          title="Every critical finance workflow. Finally connected."
          description="Replace fragmented point solutions and spreadsheet workarounds with one operating layer built around your financial data."
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.08] md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Reveal key={feature.title} delay={(index % 3) * 0.06} className="h-full">
                <article className="group h-full min-h-[300px] bg-[#09131b] p-6 transition-colors duration-300 hover:bg-[#0b1720] sm:p-7">
                  <div className="grid h-9 w-9 place-items-center rounded-lg border border-white/[0.08] bg-white/[0.035] text-teal-300 transition-colors group-hover:border-teal-400/25 group-hover:bg-teal-400/[0.07]">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h3 className="mt-5 text-[15px] font-semibold text-white">{feature.title}</h3>
                  <p className="mt-2 text-[13px] leading-6 text-white/48">{feature.description}</p>
                  <FeatureVisual type={feature.visual} />
                </article>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
