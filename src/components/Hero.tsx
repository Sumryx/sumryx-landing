import { motion, useReducedMotion } from 'framer-motion'
import {
  Bell,
  ChevronDown,
  CircleHelp,
  LayoutDashboard,
  MoreHorizontal,
  Search,
  Sparkles,
  TrendingUp,
} from 'lucide-react'
import { Button, Container, Reveal, StatusPill, SumryxMark } from './ui'

const chartPoints = '0,103 34,92 68,96 102,70 136,76 170,48 204,55 238,34 272,42 306,17 340,25'

function DashboardPreview() {
  const reducedMotion = useReducedMotion()

  return (
    <Reveal delay={0.18} className="relative mx-auto mt-16 max-w-[1080px] sm:mt-20">
      <div className="absolute -inset-8 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(20,184,166,.17),transparent_65%)] blur-2xl" />
      <motion.div
        animate={reducedMotion ? undefined : { y: [0, -5, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="overflow-hidden rounded-xl border border-white/[0.13] bg-[#0a131c] shadow-[0_35px_100px_rgba(0,0,0,.45),0_0_0_1px_rgba(255,255,255,.03)_inset]"
      >
        <div className="flex h-10 items-center border-b border-white/[0.07] bg-white/[0.018] px-4">
          <div className="flex gap-1.5">
            <span className="h-2 w-2 rounded-full bg-white/15" />
            <span className="h-2 w-2 rounded-full bg-white/15" />
            <span className="h-2 w-2 rounded-full bg-white/15" />
          </div>
          <div className="mx-auto hidden rounded-md border border-white/[0.06] bg-black/10 px-12 py-1 text-[9px] text-white/25 sm:block">
            app.sumryx.com
          </div>
        </div>

        <div className="grid min-h-[480px] grid-cols-[58px_1fr] sm:grid-cols-[180px_1fr]">
          <aside className="border-r border-white/[0.07] p-3 sm:p-4">
            <div className="mb-7 flex justify-center sm:justify-start">
              <SumryxMark compact />
            </div>
            <div className="space-y-1">
              {['Overview', 'Consolidation', 'Reports', 'Forecasts', 'Workflows'].map((item, index) => (
                <div
                  key={item}
                  className={`flex items-center justify-center gap-2 rounded-md px-2 py-2 text-[10px] sm:justify-start ${
                    index === 0 ? 'bg-white/[0.07] text-white' : 'text-white/35'
                  }`}
                >
                  <LayoutDashboard className="h-3.5 w-3.5" />
                  <span className="hidden sm:block">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 hidden border-t border-white/[0.07] pt-4 sm:block">
              <div className="mb-2 text-[8px] font-semibold uppercase tracking-wider text-white/20">Entities</div>
              {[
                ['Sumryx Group', 'bg-teal-400'],
                ['UK Holdings', 'bg-blue-400'],
                ['North America', 'bg-violet-400'],
                ['APAC', 'bg-amber-400'],
              ].map(([name, color]) => (
                <div key={name} className="flex items-center gap-2 py-1.5 text-[9px] text-white/40">
                  <span className={`h-1.5 w-1.5 rounded-full ${color}`} />
                  {name}
                </div>
              ))}
            </div>
          </aside>

          <div className="min-w-0">
            <div className="flex h-14 items-center justify-between border-b border-white/[0.07] px-4 sm:px-5">
              <div>
                <div className="text-[10px] text-white/35">Workspace</div>
                <div className="flex items-center gap-1 text-[11px] font-medium text-white/80">
                  Sumryx Group <ChevronDown className="h-3 w-3" />
                </div>
              </div>
              <div className="flex items-center gap-2 text-white/30">
                <Search className="h-3.5 w-3.5" />
                <Bell className="h-3.5 w-3.5" />
                <CircleHelp className="hidden h-3.5 w-3.5 sm:block" />
                <span className="grid h-6 w-6 place-items-center rounded-full bg-teal-400/15 text-[8px] font-semibold text-teal-300">AM</span>
              </div>
            </div>

            <div className="p-4 sm:p-5">
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-sm font-semibold text-white sm:text-base">Finance overview</h3>
                  <p className="mt-1 text-[9px] text-white/35">Consolidated · May 2026</p>
                </div>
                <StatusPill>All systems synced</StatusPill>
              </div>

              <div className="grid grid-cols-2 gap-2.5 lg:grid-cols-4">
                {[
                  ['Revenue', '£12.84m', '+12.4%'],
                  ['EBITDA', '£2.91m', '-3.2%'],
                  ['Cash', '£6.72m', '+8.1%'],
                  ['Runway', '24.6 mo', '+2.4 mo'],
                ].map(([label, value, trend], index) => (
                  <div key={label} className="rounded-lg border border-white/[0.07] bg-white/[0.025] p-3">
                    <div className="text-[8px] uppercase tracking-wider text-white/30">{label}</div>
                    <div className="mt-2 text-[15px] font-semibold tracking-tight text-white sm:text-lg">{value}</div>
                    <div className={`mt-1 text-[8px] ${index === 1 ? 'text-rose-300' : 'text-teal-300'}`}>{trend} vs plan</div>
                  </div>
                ))}
              </div>

              <div className="mt-2.5 grid gap-2.5 lg:grid-cols-[1.65fr_1fr]">
                <div className="rounded-lg border border-white/[0.07] bg-white/[0.02] p-3.5">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[10px] font-medium text-white/80">Revenue & EBITDA</div>
                      <div className="mt-0.5 text-[8px] text-white/30">Trailing 12 months</div>
                    </div>
                    <MoreHorizontal className="h-4 w-4 text-white/25" />
                  </div>
                  <div className="relative mt-4 h-[120px]">
                    <div className="absolute inset-0 flex flex-col justify-between">
                      {[0, 1, 2, 3].map((line) => <span key={line} className="h-px bg-white/[0.05]" />)}
                    </div>
                    <svg viewBox="0 0 340 120" className="absolute inset-0 h-full w-full overflow-visible" preserveAspectRatio="none" aria-label="Revenue chart">
                      <defs>
                        <linearGradient id="chart-fill" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#14B8A6" stopOpacity=".3" />
                          <stop offset="100%" stopColor="#14B8A6" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <polygon points={`0,120 ${chartPoints} 340,120`} fill="url(#chart-fill)" />
                      <polyline points={chartPoints} fill="none" stroke="#2dd4bf" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                    </svg>
                    <div className="absolute left-[68%] top-[10%] rounded-md border border-teal-400/25 bg-[#102721] px-2 py-1 text-[8px] text-teal-200 shadow-xl">
                      £12.84m
                    </div>
                  </div>
                </div>

                <div className="hidden rounded-lg border border-white/[0.07] bg-white/[0.02] p-3.5 lg:block">
                  <div className="flex items-center gap-2 text-[10px] font-medium text-white/80">
                    <Sparkles className="h-3.5 w-3.5 text-teal-300" />
                    AI insight
                  </div>
                  <p className="mt-3 text-[9px] leading-[1.6] text-white/45">
                    Gross margin improved 2.1pts, offset by a £184k increase in North America operating costs.
                  </p>
                  <div className="mt-4 rounded-md border border-white/[0.06] bg-black/15 p-2.5">
                    <div className="flex items-center justify-between text-[8px] text-white/30">
                      Forecast confidence <TrendingUp className="h-3 w-3 text-teal-300" />
                    </div>
                    <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/[0.07]">
                      <div className="h-full w-[86%] rounded-full bg-teal-400" />
                    </div>
                    <div className="mt-1.5 text-right text-[8px] font-medium text-teal-300">86%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Reveal>
  )
}

export function Hero() {
  return (
    <section className="grid-surface relative overflow-hidden pb-20 pt-32 sm:pt-40 md:pb-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-400/30 to-transparent" />
      <Container>
        <Reveal className="mx-auto max-w-[930px] text-center">
          <a
            href="#product"
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-[11px] font-medium text-white/60 transition-colors hover:border-teal-400/30 hover:text-white"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-teal-400 shadow-[0_0_10px_#14B8A6]" />
            The AI finance operating system
          </a>
          <h1 className="display-text text-balance text-[2.8rem] font-semibold leading-[0.98] text-white sm:text-6xl md:text-[5.25rem]">
            Finance infrastructure for the next generation of businesses.
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-balance text-base leading-7 text-white/60 sm:text-lg">
            Consolidation, reporting, AI insights and financial operations in one intelligent platform.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="/#waitlist" className="w-full sm:w-auto">Join early access</Button>
            <Button href="#product" variant="secondary" className="w-full sm:w-auto">Explore platform</Button>
          </div>
          <p className="mt-4 text-[11px] text-white/30">Built for complex finance teams. Designed for clarity.</p>
        </Reveal>
        <DashboardPreview />
      </Container>
    </section>
  )
}
