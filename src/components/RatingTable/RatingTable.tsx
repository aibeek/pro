import { useMemo, useState } from 'react'
import styles from './RatingTable.module.css'
import type { FastFoodPlace } from '../../data/fastFoodPlaces'

type SortKey = 'name' | 'city' | 'country' | 'rating' | 'reviews' | 'avgWaitMin' | 'cashbackPercent'
type SortDir = 'asc' | 'desc'

type Column = {
  key: SortKey
  label: string
  numeric?: boolean
  getValue: (row: FastFoodPlace) => string | number
}

const columns: Column[] = [
  { key: 'name', label: 'Объект', getValue: (r) => r.name },
  { key: 'city', label: 'Город', getValue: (r) => r.city },
  { key: 'country', label: 'Страна', getValue: (r) => r.country },
  { key: 'rating', label: 'Рейтинг', numeric: true, getValue: (r) => r.rating },
  { key: 'reviews', label: 'Отзывы', numeric: true, getValue: (r) => r.reviews },
  { key: 'avgWaitMin', label: 'Ожидание, мин', numeric: true, getValue: (r) => r.avgWaitMin },
  { key: 'cashbackPercent', label: 'Кешбэк, %', numeric: true, getValue: (r) => r.cashbackPercent },
]

function compare(a: string | number, b: string | number) {
  if (typeof a === 'number' && typeof b === 'number') return a - b
  return String(a).localeCompare(String(b), 'ru-RU', { sensitivity: 'base' })
}

function nextDir(currentKey: SortKey, key: SortKey, currentDir: SortDir): SortDir {
  if (currentKey !== key) return 'asc'
  return currentDir === 'asc' ? 'desc' : 'asc'
}

export function RatingTable({ id, title, rows }: { id: string; title: string; rows: FastFoodPlace[] }) {
  const [sortKey, setSortKey] = useState<SortKey>('rating')
  const [sortDir, setSortDir] = useState<SortDir>('desc')

  const sorted = useMemo(() => {
    const dirMul = sortDir === 'asc' ? 1 : -1
    const col = columns.find((c) => c.key === sortKey)!
    return [...rows].sort((ra, rb) => dirMul * compare(col.getValue(ra), col.getValue(rb)))
  }, [rows, sortDir, sortKey])

  const onSort = (key: SortKey) => {
    setSortDir((d) => nextDir(sortKey, key, d))
    setSortKey(key)
  }

  return (
    <section id={id} className={styles.section} aria-labelledby={`${id}-title`}>
      <div className={styles.headerRow}>
        <h2 id={`${id}-title`} className={styles.title}>
          {title}
        </h2>
        <div className={styles.hint} aria-label="Подсказка">
          Нажмите на заголовок столбца для сортировки
        </div>
      </div>

      <div className={styles.tableWrap} role="region" aria-label="Таблица рейтинга" tabIndex={0}>
        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr>
              <th className={styles.rankHead} scope="col">
                #
              </th>
              {columns.map((col) => {
                const isActive = sortKey === col.key
                const ariaSort = isActive ? (sortDir === 'asc' ? 'ascending' : 'descending') : 'none'
                return (
                  <th
                    key={col.key}
                    scope="col"
                    className={col.numeric ? styles.thNumeric : styles.th}
                    aria-sort={ariaSort}
                  >
                    <button
                      type="button"
                      className={styles.sortBtn}
                      onClick={() => onSort(col.key)}
                      aria-label={`Сортировать по: ${col.label}`}
                    >
                      <span className={styles.thLabel}>{col.label}</span>
                      <span className={styles.sortIcon} aria-hidden="true">
                        {isActive ? (sortDir === 'asc' ? '▲' : '▼') : '↕'}
                      </span>
                    </button>
                  </th>
                )
              })}
            </tr>
          </thead>
          <tbody>
            {sorted.map((row, idx) => (
              <tr key={row.id} className={styles.tr}>
                <td className={styles.rankCell}>{idx + 1}</td>
                <td className={styles.td}>{row.name}</td>
                <td className={styles.td}>{row.city}</td>
                <td className={styles.td}>{row.country}</td>
                <td className={styles.tdNumeric} aria-label={`Рейтинг ${row.rating}`}>
                  {row.rating.toFixed(1)}
                </td>
                <td className={styles.tdNumeric}>{row.reviews.toLocaleString('ru-RU')}</td>
                <td className={styles.tdNumeric}>{row.avgWaitMin}</td>
                <td className={styles.tdNumeric}>{row.cashbackPercent}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
