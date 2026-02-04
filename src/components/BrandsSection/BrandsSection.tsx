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
  const marqueeBrands = [...brands, ...brands]

  return (
    <div id={id} className={styles.root} aria-labelledby={hasHeader ? titleId : undefined} aria-label={hasHeader ? undefined : 'Бренды'}>
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
      <div className={hasHeader ? styles.marquee : styles.marqueeTight} role="region" aria-label="Бегущая строка брендов">
        <div className={styles.track}>
          {marqueeBrands.map((brand, idx) => {
            const isHiddenCopy = idx >= brands.length
            return (
              <div
                key={`${brand}-${idx}`}
                className={styles.brand}
                role={isHiddenCopy ? undefined : 'listitem'}
                aria-hidden={isHiddenCopy ? 'true' : undefined}
              >
                {brand}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
