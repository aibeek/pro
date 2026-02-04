import styles from './BrandsSection.module.css'

export function BrandsSection({
  id,
  title,
  brands,
  showHeader = true,
}: {
  id: string
  title?: string
  brands: string[]
  showHeader?: boolean
}) {
  const titleId = `${id}-title`
  const hasHeader = showHeader && Boolean(title)

  return (
    <section
      id={id}
      className={styles.section}
      aria-labelledby={hasHeader ? titleId : undefined}
      aria-label={hasHeader ? undefined : 'Бренды'}
    >
      {hasHeader && (
        <div className={styles.headerRow}>
          <h2 id={titleId} className={styles.title}>
            {title}
          </h2>
          <span className={styles.badge} aria-label={`Количество брендов: ${brands.length}`}>
            {brands.length}
          </span>
        </div>
      )}
      <div className={styles.marquee} role="region" aria-label="Бегущая строка брендов">
        <div className={styles.track}>
          <div className={styles.group} role="list" aria-label="Список брендов">
            {brands.map((brand) => (
              <div key={brand} className={styles.brand} role="listitem">
                {brand}
              </div>
            ))}
          </div>
          <div className={styles.group} aria-hidden="true">
            {brands.map((brand) => (
              <div key={`${brand}-dup`} className={styles.brand}>
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
