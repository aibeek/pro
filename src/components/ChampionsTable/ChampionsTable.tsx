import styles from './ChampionsTable.module.css'

export type ChampionsRow = {
  month: string
  cityName: string
  countryName: string
  worldName: string
}

export function ChampionsTable({ rows }: { rows: ChampionsRow[] }) {
  return (
    <div className={styles.tableWrap} role="region" aria-label="Таблица чемпионов" tabIndex={0}>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <th scope="col" className={styles.th}>
              2026 год
            </th>
            <th scope="col" className={styles.th}>
              Город
            </th>
            <th scope="col" className={styles.th}>
              Страна
            </th>
            <th scope="col" className={styles.th}>
              Мир
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.month} className={styles.tr}>
              <td className={styles.tdMonth}>{row.month}</td>
              <td className={styles.td}>{row.cityName}</td>
              <td className={styles.td}>{row.countryName}</td>
              <td className={styles.td}>{row.worldName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
