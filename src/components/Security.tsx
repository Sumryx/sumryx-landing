import { Fingerprint, KeyRound, LockKeyhole, ScrollText } from 'lucide-react'
import { Container, Reveal, SectionHeading } from './ui'

const controls = [
  { icon: LockKeyhole, title: 'SOC 2', description: 'Controls designed around leading security and availability standards.' },
  { icon: ScrollText, title: 'Audit trails', description: 'Every change, approval, and data movement captured automatically.' },
  { icon: KeyRound, title: 'Role-based access', description: 'Granular permissions across groups, entities, teams, and workflows.' },
  { icon: Fingerprint, title: 'Two-factor authentication', description: 'Strong account protection with secure authentication policies.' },
]

export function Security() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          label="Enterprise security"
          title="Financial data deserves more than good intentions."
          description="Sumryx is built with the security, controls, and traceability modern finance teams expect."
          align="center"
        />
        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {controls.map((control, index) => {
            const Icon = control.icon
            return (
              <Reveal key={control.title} delay={index * 0.05}>
                <article className="h-full rounded-xl border border-white/[0.08] bg-white/[0.018] p-6">
                  <div className="grid h-10 w-10 place-items-center rounded-lg border border-teal-400/20 bg-teal-400/[0.06]">
                    <Icon className="h-4 w-4 text-teal-300" />
                  </div>
                  <h3 className="mt-5 text-sm font-semibold text-white">{control.title}</h3>
                  <p className="mt-2 text-[12px] leading-5 text-white/42">{control.description}</p>
                </article>
              </Reveal>
            )
          })}
        </div>
        <Reveal delay={0.2} className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[10px] font-medium uppercase tracking-[0.14em] text-white/25">
          <span>Encryption at rest</span>
          <span className="hidden h-1 w-1 rounded-full bg-white/15 sm:block" />
          <span>Encryption in transit</span>
          <span className="hidden h-1 w-1 rounded-full bg-white/15 sm:block" />
          <span>Continuous monitoring</span>
          <span className="hidden h-1 w-1 rounded-full bg-white/15 sm:block" />
          <span>Secure by design</span>
        </Reveal>
      </Container>
    </section>
  )
}
