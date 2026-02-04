import styles from './StatsRow.module.css'

export type StatsItem = {
  label: string
  value: number
}

export function StatsRow({ items }: { items: StatsItem[] }) {
  return (
    <section className={styles.section} aria-label="Статистика">
      <div className={styles.grid} role="list">
        {items.map((item) => (
          <div key={item.label} className={styles.card} role="listitem">
            <div className={styles.label}>{item.label}</div>
            <div className={styles.value} aria-label={`${item.label}: ${item.value}`}>
              {item.value.toLocaleString('ru-RU')}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
