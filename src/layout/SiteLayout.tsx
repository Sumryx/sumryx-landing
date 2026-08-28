import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Navigation } from '../components/Navigation'
import { ScrollManager } from './ScrollManager'

function getInitialTheme(): 'light' | 'dark' {
  try {
    const savedTheme = localStorage.getItem('sumryx-theme')
    if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme
  } catch {
    // Storage can be unavailable in privacy-restricted browsing contexts.
  }

  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}

export function SiteLayout() {
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
      <ScrollManager />
      <Navigation
        theme={theme}
        onThemeChange={() => setTheme((current) => current === 'dark' ? 'light' : 'dark')}
      />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
