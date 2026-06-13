import { LeadForm } from './LeadForm'
import { Container, Reveal } from './ui'

export function CTA() {
  return (
    <section id="interest" className="px-3 pb-3 sm:px-5 sm:pb-5">
      <div className="grid-surface relative overflow-hidden rounded-2xl border border-teal-400/15 bg-[#0a171d] py-20 sm:py-28">
        <div className="absolute left-1/2 top-0 h-[380px] w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-400/15 blur-[110px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-300/60 to-transparent" />
        <Container>
          <Reveal className="relative mx-auto max-w-3xl text-center">
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-teal-300">Run finance differently</p>
            <h2 className="display-text text-balance text-4xl font-semibold leading-[1.02] text-white sm:text-5xl md:text-[4rem]">
              Spend less time closing books. More time driving decisions.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-white/52">
              Register your interest for early access, product updates, and an invitation when Sumryx launches.
            </p>
            <div id="waitlist" className="mt-8 scroll-mt-28">
              <LeadForm intent="launch-interest" source="primary-cta" />
            </div>
            <p className="mt-3 text-[10px] leading-4 text-white/28">
              No spam. Only meaningful Sumryx product and launch updates.
            </p>
          </Reveal>
        </Container>
      </div>
    </section>
  )
}
