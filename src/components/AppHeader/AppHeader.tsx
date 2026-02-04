import { useLayoutEffect, useRef } from 'react'
import styles from './AppHeader.module.css'

export type HeaderStat = {
  label: string
  value: number
}

export function AppHeader({ stats }: { stats: HeaderStat[] }) {
  const ref = useRef<HTMLElement | null>(null)

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
            <span className={styles.title}>Fastfood Rank</span>
          </div>

          <div className={styles.prize} role="status" aria-label="Prize">
            <span className={styles.prizeIcon} aria-hidden="true">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M7 4h10v2h2a1 1 0 0 1 1 1c0 3.314-2.686 6-6 6h-1.1A5.002 5.002 0 0 1 13 15.9V18h3v2H8v-2h3v-2.1A5.002 5.002 0 0 1 11.1 13H10c-3.314 0-6-2.686-6-6a1 1 0 0 1 1-1h2V4Zm0 4H6.05A4.002 4.002 0 0 0 10 11h1V8H7Zm10 0h-4v3h1a4.002 4.002 0 0 0 3.95-3H17Z" />
              </svg>
            </span>
            <span className={styles.prizeText}>Февраль</span>
          </div>

          <div className={styles.topSpacer} aria-hidden="true" />
        </div>

        <dl className={styles.stats} aria-label="Статистика">
          {stats.map((s) => (
            <div key={s.label} className={styles.stat}>
              <dt className={styles.statLabel}>{s.label}</dt>
              <dd className={styles.statValue}>{s.value.toLocaleString('ru-RU')}</dd>
            </div>
          ))}
        </dl>
      </div>
    </header>
  )
}
