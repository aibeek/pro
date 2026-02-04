import { useLayoutEffect, useRef } from 'react'
import styles from './AppHeader.module.css'

export type HeaderStat = {
  label: string
  value: number
  icon: 'city' | 'countries' | 'world'
}

export function AppHeader({ stats }: { stats: HeaderStat[] }) {
  const ref = useRef<HTMLElement | null>(null)

  const renderStatIcon = (icon: HeaderStat['icon']) => {
    if (icon === 'city') {
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
          <path d="M4 21V3h10v4h6v14h-2v-2h-4v2H4Zm2-2h6v-2h6v2V9h-4V5H6v14Zm1-10h2v2H7V9Zm0 4h2v2H7v-2Zm0-8h2v2H7V5Zm4 4h2v2h-2V9Zm0 4h2v2h-2v-2Z" />
        </svg>
      )
    }
    if (icon === 'countries') {
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
          <path d="M6 3h11l-1.2 3L18 9l-1.2 3L18 15l-1.2 3L18 21H6V3Zm2 2v14h7.4l-.6-1.5L16 15l-1.2-3L16 9l-1.2-3L15.4 5H8Z" />
        </svg>
      )
    }
    return (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M12 2a10 10 0 1 0 .001 20.001A10 10 0 0 0 12 2Zm7.94 9H17.9a15.7 15.7 0 0 0-1.64-6.03A8.03 8.03 0 0 1 19.94 11ZM12 4c.86 0 2.56 2.07 3.39 7H8.61C9.44 6.07 11.14 4 12 4ZM4.06 13H6.1a15.7 15.7 0 0 0 1.64 6.03A8.03 8.03 0 0 1 4.06 13Zm0-2A8.03 8.03 0 0 1 7.74 4.97 15.7 15.7 0 0 0 6.1 11H4.06ZM12 20c-.86 0-2.56-2.07-3.39-7h6.78C14.56 17.93 12.86 20 12 20Zm4.26-.97A15.7 15.7 0 0 0 17.9 13h2.04a8.03 8.03 0 0 1-3.68 6.03Z" />
      </svg>
    )
  }

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return

    const set = () => {
      document.documentElement.style.setProperty('--app-header-h', `${el.offsetHeight}px`)
    }

    set()
    const ro = new ResizeObserver(() => set())
    ro.observe(el)

    return () => ro.disconnect()
  }, [])

  return (
    <header ref={ref} className={styles.header} aria-label="Шапка приложения">
      <div className={styles.inner}>
        <div className={styles.topRow}>
          <div className={styles.brand}>
            <span className={styles.title}>Lucky Pay</span>
          </div>

          <div className={styles.prize} role="status" aria-label="Prize">
            <span className={styles.prizeText}>Февраль</span>
          </div>

          <div className={styles.topSpacer} aria-hidden="true" />
        </div>

        <dl className={styles.stats} aria-label="Статистика">
          {stats.map((s) => (
            <div key={s.label} className={styles.stat}>
              <span className={styles.statIcon} aria-hidden="true">
                {renderStatIcon(s.icon)}
              </span>
              <div className={styles.statText}>
                <dt className={styles.statLabel}>{s.label}</dt>
                <dd className={styles.statValue}>{s.value.toLocaleString('ru-RU')}</dd>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </header>
  )
}
