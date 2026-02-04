import styles from './BrandsSection.module.css'

export function BrandsSection({
  id,
  title,
  brands,
}: {
  id: string
  title: string
  brands: string[]
}) {
  return (
    <section id={id} className={styles.section} aria-labelledby={`${id}-title`}>
      <div className={styles.headerRow}>
        <h2 id={`${id}-title`} className={styles.title}>
          {title}
        </h2>
        <span className={styles.badge} aria-label={`Количество брендов: ${brands.length}`}>
          {brands.length}
        </span>
      </div>
      <div className={styles.grid} role="list" aria-label="Список брендов">
        {brands.map((brand) => (
          <div key={brand} className={styles.brand} role="listitem">
            {brand}
          </div>
        ))}
      </div>
    </section>
  )
}
