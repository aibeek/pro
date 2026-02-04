import { useMemo, useState } from 'react'
import styles from './RatingTable.module.css'
import type { TicketTableRow } from '../../data/ticketTableRows'

type SortKey = keyof Pick<TicketTableRow, 'id' | 'name' | 'amount' | 'percent' | 'ticketsCount'>
type SortDir = 'asc' | 'desc'

type Column = {
  key: SortKey
  label: string
  numeric?: boolean
  getValue: (row: TicketTableRow) => string | number
  format?: (row: TicketTableRow) => string
}

const columns: Column[] = [
  { key: 'id', label: '#', getValue: (r) => r.id },
  { key: 'name', label: 'Имя', getValue: (r) => r.name },
  {
    key: 'amount',
    label: 'Сумма',
    numeric: true,
    getValue: (r) => r.amount,
    format: (r) => r.amount.toLocaleString('ru-RU'),
  },
  {
    key: 'percent',
    label: '%',
    numeric: true,
    getValue: (r) => r.percent,
    format: (r) => `${r.percent}%`,
  },
  {
    key: 'ticketsCount',
    label: 'Кол-во',
    numeric: true,
    getValue: (r) => r.ticketsCount,
    format: (r) => r.ticketsCount.toLocaleString('ru-RU'),
  },
]

function compare(a: string | number, b: string | number) {
  if (typeof a === 'number' && typeof b === 'number') return a - b
  return String(a).localeCompare(String(b), 'ru-RU', { sensitivity: 'base' })
}

function nextDir(currentKey: SortKey, key: SortKey, currentDir: SortDir): SortDir {
  if (currentKey !== key) return 'asc'
  return currentDir === 'asc' ? 'desc' : 'asc'
}

export function RatingTable({ id, title, rows }: { id: string; title: string; rows: TicketTableRow[] }) {
  const [sortKey, setSortKey] = useState<SortKey>('amount')
  const [sortDir, setSortDir] = useState<SortDir>('desc')

  const today = useMemo(
    () => new Intl.DateTimeFormat('ru-RU', { day: '2-digit', month: '2-digit', year: 'numeric' }).format(new Date()),
    [],
  )

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
          {today}
        </div>
      </div>

      <div className={styles.tableWrap} role="region" aria-label="Таблица рейтинга" tabIndex={0}>
        <table className={styles.table}>
          <colgroup>
            <col className={styles.colId} />
            <col className={styles.colName} />
            <col className={styles.colAmount} />
            <col className={styles.colPercent} />
            <col className={styles.colCount} />
          </colgroup>
          <thead className={styles.thead}>
            <tr>
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
            {sorted.map((row) => (
              <tr key={row.id} className={styles.tr}>
                <td className={styles.tdId}>{row.id}</td>
                <td className={styles.tdName}>{row.name}</td>
                <td className={styles.tdNumeric} aria-label={`Сумма ${row.amount.toLocaleString('ru-RU')}`}>
                  {row.amount.toLocaleString('ru-RU')}
                </td>
                <td className={styles.tdNumeric} aria-label={`Процент ${row.percent}`}>
                  {row.percent}%
                </td>
                <td className={styles.tdNumeric} aria-label={`Количество билетов ${row.ticketsCount.toLocaleString('ru-RU')}`}>
                  {row.ticketsCount.toLocaleString('ru-RU')}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
