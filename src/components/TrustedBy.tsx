import { Container, Reveal } from './ui'

const logos = ['NORTHSTAR', 'ARCADIA', 'KINETIC', 'MONUMENT', 'LUMEN', 'VERDANT']

export function TrustedBy() {
  return (
    <section className="border-y border-white/[0.07] bg-white/[0.012] py-10">
      <Container>
        <Reveal>
          <p className="mb-8 text-center text-[10px] font-semibold uppercase tracking-[0.19em] text-white/25">
            Built for ambitious finance teams
          </p>
          <div className="grid grid-cols-2 items-center gap-x-8 gap-y-7 sm:grid-cols-3 lg:grid-cols-6">
            {logos.map((logo, index) => (
              <div key={logo} className="flex items-center justify-center gap-2 text-white/30">
                <span className={`h-3.5 w-3.5 ${index % 2 ? 'rotate-45 rounded-[3px]' : 'rounded-full'} border border-current`} />
                <span className="text-[10px] font-semibold tracking-[0.14em]">{logo}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
