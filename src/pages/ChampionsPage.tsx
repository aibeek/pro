import { useMemo } from 'react'
import { ChampionsTable, type ChampionsRow } from '@/components/ChampionsTable/ChampionsTable'
import { ticketTableRows } from '@/data/ticketTableRows'
import styles from './Page.module.css'

export function ChampionsPage() {
  const rows = useMemo<ChampionsRow[]>(() => {
    const months = [
      'Январь',
      'Февраль',
      'Март',
      'Апрель',
      'Май',
      'Июнь',
      'Июль',
      'Август',
      'Сентябрь',
      'Октябрь',
      'Ноябрь',
      'Декабрь',
    ]

    const names = ticketTableRows.map((r) => r.name)
    return months.map((month, idx) => ({
      month,
      cityName: names[idx % names.length] ?? '—',
      countryName: names[(idx + 3) % names.length] ?? '—',
      worldName: names[(idx + 6) % names.length] ?? '—',
    }))
  }, [])

  return (
    <section className={styles.section} aria-labelledby="champions-title">
      <h2 id="champions-title" className={styles.h2}>
        Чемпионы
      </h2>
      <p className={styles.p} aria-label="Описание">
        Победители по итогам месяца.
      </p>

      <ChampionsTable rows={rows} />
    </section>
  )
}
