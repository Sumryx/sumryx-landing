import { LeadForm } from './LeadForm'
import { Container, SumryxMark } from './ui'

const columns = [
  { title: 'Product', links: ['Consolidation', 'AI reporting', 'Forecasting', 'Workflows', 'Integrations'] },
  { title: 'Solutions', links: ['Multi-entity groups', 'Accounting firms', 'CFOs', 'Finance teams'] },
  { title: 'Company', links: ['About', 'Careers', 'Security', 'Contact'] },
  { title: 'Resources', links: ['Finance OS guide', 'Blog', 'Help centre', 'API docs'] },
]

export function Footer() {
  return (
    <footer className="pt-16 sm:pt-20">
      <Container>
        <div className="grid gap-12 border-b border-white/[0.07] pb-14 lg:grid-cols-[1fr_2fr]">
          <div>
            <SumryxMark />
            <p className="mt-5 max-w-xs text-[13px] leading-6 text-white/42">One platform to run modern finance.</p>
          </div>
          <div className="grid grid-cols-2 gap-x-7 gap-y-10 sm:grid-cols-4">
            {columns.map((column) => (
              <div key={column.title}>
                <h3 className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/35">{column.title}</h3>
                <ul className="mt-5 space-y-3.5">
                  {column.links.map((link) => (
                    <li key={link}><a href="#" className="text-[12px] text-white/42 transition-colors hover:text-white">{link}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-6 border-b border-white/[0.07] py-8 md:grid-cols-[1fr_1.2fr] md:items-center">
          <div>
            <h3 className="text-sm font-semibold text-white">The modern finance briefing</h3>
            <p className="mt-1.5 max-w-md text-[12px] leading-5 text-white/42">
              Product news and practical thinking for finance leaders. Sent occasionally.
            </p>
          </div>
          <LeadForm intent="newsletter" source="footer-newsletter" compact />
        </div>
        <div className="flex flex-col gap-4 py-6 text-[10px] text-white/25 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Sumryx Ltd. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white/50">Privacy</a>
            <a href="#" className="hover:text-white/50">Terms</a>
            <a href="#" className="hover:text-white/50">Cookies</a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
