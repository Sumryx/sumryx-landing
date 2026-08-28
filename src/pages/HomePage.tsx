import { AccountingFirms } from '../components/AccountingFirms'
import { AICopilot } from '../components/AICopilot'
import { Consolidation } from '../components/Consolidation'
import { CTA } from '../components/CTA'
import { Features } from '../components/Features'
import { Hero } from '../components/Hero'
import { Security } from '../components/Security'
import { TrustedBy } from '../components/TrustedBy'
import { usePageTitle } from '../hooks/usePageTitle'

export function HomePage() {
  usePageTitle('Sumryx — The AI Finance Operating System')

  return (
    <>
      <Hero />
      <TrustedBy />
      <Features />
      <AICopilot />
      <Consolidation />
      <AccountingFirms />
      <Security />
      <CTA />
    </>
  )
}
