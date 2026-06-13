import { useEffect, useState } from 'react'
import { AccountingFirms } from './components/AccountingFirms'
import { AICopilot } from './components/AICopilot'
import { Consolidation } from './components/Consolidation'
import { CTA } from './components/CTA'
import { Features } from './components/Features'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navigation } from './components/Navigation'
import { Security } from './components/Security'
import { TrustedBy } from './components/TrustedBy'

function getInitialTheme(): 'light' | 'dark' {
  try {
    const savedTheme = localStorage.getItem('sumryx-theme')
    if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme
  } catch {
    // Storage can be unavailable in privacy-restricted browsing contexts.
  }

  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}

export default function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>(getInitialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.documentElement.style.colorScheme = theme
    try {
      localStorage.setItem('sumryx-theme', theme)
    } catch {
      // The selected theme still applies for the current session.
    }
    document.querySelector('meta[name="theme-color"]')?.setAttribute(
      'content',
      theme === 'dark' ? '#071018' : '#f5f8f8',
    )
  }, [theme])

  return (
    <div className="site-shell min-h-screen overflow-hidden bg-[#071018] text-white">
      <div className="noise" aria-hidden="true" />
      <Navigation
        theme={theme}
        onThemeChange={() => setTheme((current) => current === 'dark' ? 'light' : 'dark')}
      />
      <main>
        <Hero />
        <TrustedBy />
        <Features />
        <AICopilot />
        <Consolidation />
        <AccountingFirms />
        <Security />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
