import { AlertCircle, ArrowUpRight, CheckCircle2, Clock3, Users } from 'lucide-react'
import { Button, Container, Reveal, SectionHeading } from './ui'

const clients = [
  { name: 'Northstar Labs', close: 'May close', status: 'On track', progress: 88, color: 'bg-teal-400' },
  { name: 'Arcadia Group', close: 'May close', status: '2 reviews', progress: 64, color: 'bg-blue-400' },
  { name: 'Monument AI', close: 'April close', status: 'Complete', progress: 100, color: 'bg-violet-400' },
  { name: 'Verdant Systems', close: 'May close', status: '1 blocker', progress: 42, color: 'bg-amber-400' },
]

export function AccountingFirms() {
  return (
    <section className="border-y border-white/[0.07] bg-[#08131b] py-24 sm:py-32">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[.78fr_1.22fr] lg:gap-20">
          <div>
            <SectionHeading
              label="For accounting firms"
              title="A command centre for every client."
              description="Standardise delivery, automate reporting, and give your team a live view across every client close."
            />
            <Reveal delay={0.1} className="mt-8">
              <Button href="#waitlist" variant="secondary">Register firm interest</Button>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-xl border border-white/[0.1] bg-[#0a151e] shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-4">
                <div>
                  <div className="text-[11px] font-medium text-white/80">Client portfolio</div>
                  <div className="mt-0.5 text-[8px] text-white/30">June delivery overview</div>
                </div>
                <div className="flex items-center gap-2 text-[9px] text-white/35">
                  <Users className="h-3.5 w-3.5" /> 24 active clients
                </div>
              </div>
              <div className="grid grid-cols-3 border-b border-white/[0.07]">
                <div className="border-r border-white/[0.07] p-4">
                  <CheckCircle2 className="h-3.5 w-3.5 text-teal-300" />
                  <div className="mt-2 text-lg font-semibold text-white">17</div>
                  <div className="text-[8px] text-white/30">On track</div>
                </div>
                <div className="border-r border-white/[0.07] p-4">
                  <Clock3 className="h-3.5 w-3.5 text-blue-300" />
                  <div className="mt-2 text-lg font-semibold text-white">5</div>
                  <div className="text-[8px] text-white/30">In review</div>
                </div>
                <div className="p-4">
                  <AlertCircle className="h-3.5 w-3.5 text-amber-300" />
                  <div className="mt-2 text-lg font-semibold text-white">2</div>
                  <div className="text-[8px] text-white/30">Need attention</div>
                </div>
              </div>
              <div className="p-3 sm:p-4">
                <div className="mb-2 hidden grid-cols-[1.4fr_.8fr_.7fr_24px] px-3 text-[7px] font-semibold uppercase tracking-wider text-white/20 sm:grid">
                  <span>Client</span><span>Close status</span><span>Progress</span><span />
                </div>
                <div className="space-y-1.5">
                  {clients.map((client) => (
                    <div key={client.name} className="grid grid-cols-[1fr_auto] items-center gap-3 rounded-lg border border-white/[0.06] bg-white/[0.018] px-3 py-3 sm:grid-cols-[1.4fr_.8fr_.7fr_24px]">
                      <div className="flex items-center gap-2.5">
                        <span className={`grid h-7 w-7 place-items-center rounded-md ${client.color}/15 text-[8px] font-semibold text-white/60`}>
                          {client.name.split(' ').map((part) => part[0]).join('')}
                        </span>
                        <div>
                          <div className="text-[10px] font-medium text-white/62">{client.name}</div>
                          <div className="mt-0.5 text-[8px] text-white/25">{client.close}</div>
                        </div>
                      </div>
                      <span className={`hidden text-[9px] sm:block ${client.status === '1 blocker' ? 'text-amber-300' : 'text-white/38'}`}>
                        {client.status}
                      </span>
                      <div className="hidden items-center gap-2 sm:flex">
                        <div className="h-1 flex-1 overflow-hidden rounded-full bg-white/[0.07]">
                          <div className={`h-full rounded-full ${client.color}`} style={{ width: `${client.progress}%` }} />
                        </div>
                        <span className="w-6 text-right text-[8px] text-white/28">{client.progress}%</span>
                      </div>
                      <ArrowUpRight className="h-3.5 w-3.5 text-white/25" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
