import { Check, ChevronDown, CircleDot, GitMerge, RefreshCw } from 'lucide-react'
import { Container, Reveal, SectionHeading, StatusPill } from './ui'

const capabilities = [
  'Multi-currency',
  'Minority interest',
  'Joint ventures',
  'Equity accounting',
  'Cash flow consolidation',
]

export function Consolidation() {
  return (
    <section id="solutions" className="py-24 sm:py-32">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_.9fr] lg:gap-20">
          <Reveal className="order-2 lg:order-1">
            <div className="overflow-hidden rounded-xl border border-white/[0.1] bg-[#0a151e] shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-4">
                <div>
                  <div className="text-[11px] font-medium text-white/80">Group consolidation</div>
                  <div className="mt-0.5 text-[8px] text-white/30">May 2026 · GBP reporting currency</div>
                </div>
                <StatusPill>Ready to close</StatusPill>
              </div>
              <div className="p-4 sm:p-5">
                <div className="grid grid-cols-[1fr_auto] gap-3">
                  <div className="space-y-2">
                    {[
                      ['Sumryx UK Ltd', 'GBP', '100%', 'Complete'],
                      ['Sumryx Inc.', 'USD', '100%', 'Complete'],
                      ['Sumryx APAC Pte.', 'SGD', '80%', 'Complete'],
                      ['Helix Ventures JV', 'EUR', '40%', 'Review'],
                    ].map(([entity, currency, ownership, state], index) => (
                      <div key={entity} className="grid grid-cols-[1fr_36px_38px] items-center gap-2 rounded-lg border border-white/[0.07] bg-white/[0.02] px-3 py-3">
                        <div className="min-w-0">
                          <div className="truncate text-[10px] font-medium text-white/62">{entity}</div>
                          <div className="mt-1 flex items-center gap-1.5 text-[8px] text-white/28">
                            <CircleDot className={`h-2.5 w-2.5 ${index === 3 ? 'text-amber-300' : 'text-teal-300'}`} />
                            {state}
                          </div>
                        </div>
                        <span className="text-[9px] text-white/35">{currency}</span>
                        <span className="text-right text-[9px] text-white/55">{ownership}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <div className="h-10 w-px bg-white/10" />
                    <span className="grid h-9 w-9 place-items-center rounded-full border border-teal-400/25 bg-teal-400/10">
                      <GitMerge className="h-4 w-4 text-teal-300" />
                    </span>
                    <div className="h-10 w-px bg-white/10" />
                  </div>
                </div>

                <div className="mt-3 rounded-lg border border-teal-400/20 bg-teal-400/[0.055] p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-[10px] font-medium text-white/75">Sumryx Group</div>
                      <div className="mt-1 text-[8px] text-white/32">4 entities · 3 currencies</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-white">£18.4m</div>
                      <div className="text-[8px] text-teal-300">Consolidated assets</div>
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-2 border-t border-white/[0.07] pt-3">
                    {[['FX adjustments', '£42k'], ['Eliminations', '£1.2m'], ['NCI', '£286k']].map(([label, value]) => (
                      <div key={label}>
                        <div className="text-[7px] uppercase tracking-wide text-white/25">{label}</div>
                        <div className="mt-1 text-[10px] font-medium text-white/60">{value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between border-t border-white/[0.07] px-5 py-3">
                <span className="flex items-center gap-1.5 text-[8px] text-white/28">
                  <RefreshCw className="h-3 w-3" /> Synced 3 minutes ago
                </span>
                <button className="flex items-center gap-1 text-[9px] font-medium text-white/50">
                  May 2026 <ChevronDown className="h-3 w-3" />
                </button>
              </div>
            </div>
          </Reveal>

          <div className="order-1 lg:order-2">
            <SectionHeading
              label="Consolidation engine"
              title="Close the group without losing the month."
              description="Sumryx handles complex ownership, currency translation, eliminations, and cash flow consolidation in one controlled workflow."
            />
            <Reveal delay={0.1} className="mt-8 grid gap-3 sm:grid-cols-2">
              {capabilities.map((capability) => (
                <div key={capability} className="flex items-center gap-2.5 rounded-lg border border-white/[0.07] bg-white/[0.02] px-3.5 py-3 text-[12px] text-white/55">
                  <Check className="h-3.5 w-3.5 text-teal-300" />
                  {capability}
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  )
}
