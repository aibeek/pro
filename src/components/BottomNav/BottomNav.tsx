import { useMemo, useRef, type KeyboardEvent } from 'react'
import styles from './BottomNav.module.css'

export type NavKey = 'table' | 'champions' | 'promos' | 'menu' | 'profile'

const items: Array<{ key: NavKey; label: string }> = [
  { key: 'table', label: 'Таблица' },
  { key: 'menu', label: 'Меню' },
  { key: 'promos', label: 'Акции и бонусы' },
  { key: 'champions', label: 'Чемпионы' },
  { key: 'profile', label: 'Профиль' },
]

export function BottomNav({
  activeKey,
  onNavigate,
}: {
  activeKey: NavKey
  onNavigate: (key: NavKey) => void
}) {
  const refs = useRef<Array<HTMLButtonElement | null>>([])

  const byKey = useMemo(() => new Map(items.map((i) => [i.key, i])), [])

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    const currentIndex = items.findIndex((i) => i.key === activeKey)
    if (currentIndex === -1) return

    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault()
      const next = (currentIndex - 1 + items.length) % items.length
      refs.current[next]?.focus()
    }
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault()
      const next = (currentIndex + 1) % items.length
      refs.current[next]?.focus()
    }
    if (e.key === 'Home') {
      e.preventDefault()
      refs.current[0]?.focus()
    }
    if (e.key === 'End') {
      e.preventDefault()
      refs.current[items.length - 1]?.focus()
    }
  }

  return (
    <nav className={styles.nav} aria-label="Навигация по разделам">
      <div className={styles.inner} role="list">
        {items.map((item, idx) => (
          <button
            key={item.key}
            ref={(el) => {
              refs.current[idx] = el
            }}
            type="button"
            className={activeKey === item.key ? styles.btnActive : styles.btn}
            onClick={() => {
              onNavigate(item.key)
            }}
            onKeyDown={onKeyDown}
            aria-current={activeKey === item.key ? 'page' : undefined}
            aria-label={byKey.get(item.key)?.label ?? item.label}
          >
            <span className={styles.label}>{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  )
}
