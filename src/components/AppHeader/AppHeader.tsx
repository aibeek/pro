import styles from './AppHeader.module.css'

export function AppHeader() {
  return (
    <header className={styles.header} aria-label="Шапка приложения">
      <div className={styles.inner}>
        <div className={styles.brand}>
          <span className={styles.title}>Fastfood Rank</span>
          <span className={styles.subtitle}>город · страны · мир</span>
        </div>

        <div className={styles.prize} role="status" aria-label="Prize">
          <span className={styles.prizeIcon} aria-hidden="true">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M7 4h10v2h2a1 1 0 0 1 1 1c0 3.314-2.686 6-6 6h-1.1A5.002 5.002 0 0 1 13 15.9V18h3v2H8v-2h3v-2.1A5.002 5.002 0 0 1 11.1 13H10c-3.314 0-6-2.686-6-6a1 1 0 0 1 1-1h2V4Zm0 4H6.05A4.002 4.002 0 0 0 10 11h1V8H7Zm10 0h-4v3h1a4.002 4.002 0 0 0 3.95-3H17Z" />
            </svg>
          </span>
          <span className={styles.prizeText}>prize</span>
        </div>
      </div>
    </header>
  )
}
