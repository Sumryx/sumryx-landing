import { ArrowUp, Check, ChevronRight, FileSpreadsheet, Sparkles } from 'lucide-react'
import { Container, Reveal, SectionHeading } from './ui'

export function AICopilot() {
  return (
    <section className="border-y border-white/[0.07] bg-[#08131b] py-24 sm:py-32">
      <Container className="grid items-center gap-14 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
        <div>
          <SectionHeading
            label="Sumryx intelligence"
            title="A finance copilot that understands the numbers."
            description="Ask questions in plain English and get traceable answers grounded in your ledgers, reports, forecasts, and operating context."
          />
          <Reveal delay={0.1} className="mt-8 space-y-4">
            {[
              'Explains variances down to transaction level',
              'Drafts management commentary in your tone',
              'Surfaces risks before they reach the board',
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 text-sm text-white/55">
                <span className="grid h-5 w-5 place-items-center rounded-full border border-teal-400/20 bg-teal-400/[0.08]">
                  <Check className="h-3 w-3 text-teal-300" />
                </span>
                {item}
              </div>
            ))}
          </Reveal>
        </div>

        <Reveal delay={0.12} className="relative">
          <div className="absolute -inset-12 -z-10 bg-[radial-gradient(circle,rgba(20,184,166,.13),transparent_62%)] blur-2xl" />
          <div className="overflow-hidden rounded-xl border border-white/[0.11] bg-[#0a151e] shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-4">
              <div className="flex items-center gap-2.5">
                <span className="grid h-7 w-7 place-items-center rounded-lg bg-teal-400/10">
                  <Sparkles className="h-3.5 w-3.5 text-teal-300" />
                </span>
                <div>
                  <div className="text-[11px] font-medium text-white/80">Ask Sumryx</div>
                  <div className="text-[8px] text-white/30">Analysing consolidated actuals</div>
                </div>
              </div>
              <span className="flex items-center gap-1.5 text-[8px] text-teal-300">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-400" /> Live data
              </span>
            </div>

            <div className="p-5 sm:p-7">
              <div className="ml-auto max-w-[78%] rounded-xl rounded-br-sm bg-white/[0.075] px-4 py-3 text-[12px] leading-5 text-white/75">
                Why did EBITDA decline this month?
              </div>

              <div className="mt-5 flex gap-3">
                <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-teal-400 text-[#061b18]">
                  <Sparkles className="h-3.5 w-3.5" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[12px] leading-5 text-white/65">
                    EBITDA declined by <strong className="font-semibold text-white">£96k (-3.2%)</strong> in May, primarily driven by three factors:
                  </p>
                  <div className="mt-4 space-y-2.5">
                    {[
                      ['North America payroll', '-£118k', 'New engineering hires started one month ahead of plan.'],
                      ['Cloud infrastructure', '-£42k', 'Usage increased 16% following enterprise onboarding.'],
                      ['UK gross margin', '+£64k', 'Higher services utilisation partially offset the decline.'],
                    ].map(([title, amount, detail], index) => (
                      <div key={title} className="rounded-lg border border-white/[0.07] bg-black/10 p-3">
                        <div className="flex items-center justify-between gap-3">
                          <span className="text-[10px] font-medium text-white/65">{title}</span>
                          <span className={`text-[10px] font-semibold ${index === 2 ? 'text-teal-300' : 'text-rose-300'}`}>{amount}</span>
                        </div>
                        <p className="mt-1 text-[9px] leading-4 text-white/32">{detail}</p>
                      </div>
                    ))}
                  </div>
                  <button type="button" className="mt-4 flex items-center gap-2 text-[10px] font-medium text-teal-300 hover:text-teal-200">
                    <FileSpreadsheet className="h-3 w-3" /> Open source analysis <ChevronRight className="h-3 w-3" />
                  </button>
                </div>
              </div>
            </div>

            <div className="border-t border-white/[0.07] p-4">
              <div className="flex items-center justify-between rounded-lg border border-white/[0.08] bg-black/10 px-4 py-3 text-[10px] text-white/28">
                Ask a follow-up about your financials...
                <span className="grid h-6 w-6 place-items-center rounded-md bg-teal-400 text-[#06201c]">
                  <ArrowUp className="h-3.5 w-3.5" />
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
