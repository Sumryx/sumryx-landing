import type { ComponentProps, ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export function Container({
  className = '',
  children,
}: {
  className?: string
  children: ReactNode
}) {
  return <div className={`mx-auto w-full max-w-[1180px] px-5 sm:px-7 ${className}`}>{children}</div>
}

export function Reveal({
  children,
  className = '',
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  const reducedMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={reducedMotion ? false : { opacity: 0, y: 24 }}
      whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="mb-5 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-teal-300">
      <span className="h-px w-6 bg-teal-400/70" />
      {children}
    </div>
  )
}

export function SectionHeading({
  label,
  title,
  description,
  align = 'left',
}: {
  label: string
  title: string
  description: string
  align?: 'left' | 'center'
}) {
  return (
    <Reveal className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl'}>
      <div className={align === 'center' ? 'flex justify-center' : ''}>
        <SectionLabel>{label}</SectionLabel>
      </div>
      <h2 className="display-text text-balance text-3xl font-semibold leading-[1.08] text-white sm:text-4xl md:text-[3.15rem]">
        {title}
      </h2>
      <p className="mt-5 max-w-xl text-base leading-7 text-white/60 sm:text-lg">
        {description}
      </p>
    </Reveal>
  )
}

type ButtonProps = Omit<ComponentProps<'a'>, 'href'> & {
  href: string
  variant?: 'primary' | 'secondary' | 'ghost'
}

export function Button({
  children,
  href,
  variant = 'primary',
  className = '',
  ...props
}: ButtonProps) {
  const styles = {
    primary:
      'bg-[#14B8A6] text-[#031412] shadow-[0_0_0_1px_rgba(255,255,255,.12)_inset,0_8px_35px_rgba(20,184,166,.18)] hover:bg-[#2dd4bf]',
    secondary:
      'border border-white/12 bg-white/[0.04] text-white hover:border-white/25 hover:bg-white/[0.07]',
    ghost: 'text-white/65 hover:text-white',
  }

  const classes = `group inline-flex h-11 items-center justify-center gap-2 rounded-lg px-5 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#071018] ${styles[variant]} ${className}`
  const content = (
    <>
      {children}
      {variant !== 'ghost' && (
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
      )}
    </>
  )

  if (href.startsWith('/')) {
    return (
      <Link to={href} className={classes} {...props}>
        {content}
      </Link>
    )
  }

  return (
    <a href={href} className={classes} {...props}>
      {content}
    </a>
  )
}

export function SumryxMark({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      to="/"
      className={`sumryx-logo relative block overflow-hidden ${compact ? 'h-7 w-8' : 'h-[26px] w-[148px]'}`}
      aria-label="Sumryx home"
    >
      <img
        src="/logo-dark-mode.png"
        alt=""
        className="logo-for-dark absolute left-0 top-0 h-full max-w-none object-contain object-left"
      />
      <img
        src="/logo-light-mode.png"
        alt=""
        className="logo-for-light absolute left-0 top-0 hidden h-full max-w-none object-contain object-left"
      />
    </Link>
  )
}

export function PageHeader({
  label,
  title,
  description,
  actions,
}: {
  label: string
  title: string
  description: string
  actions?: ReactNode
}) {
  return (
    <section className="grid-surface relative overflow-hidden pb-16 pt-32 sm:pt-40 md:pb-20">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-400/30 to-transparent" />
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <div className="flex justify-center">
            <SectionLabel>{label}</SectionLabel>
          </div>
          <h1 className="display-text text-balance text-4xl font-semibold leading-[1.05] text-white sm:text-6xl">
            {title}
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-balance text-base leading-7 text-white/60 sm:text-lg">
            {description}
          </p>
          {actions && <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">{actions}</div>}
        </Reveal>
      </Container>
    </section>
  )
}

export function StatusPill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-teal-400/20 bg-teal-400/[0.08] px-2 py-1 text-[10px] font-semibold text-teal-300">
      <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
      {children}
    </span>
  )
}
