import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import { brands } from '@/data/brands'
import pageStyles from './Page.module.css'
import styles from './MenuPage.module.css'

export function MenuPage() {
  const [query, setQuery] = useState('')

  const filteredBrands = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return brands
    return brands.filter((b) => b.toLowerCase().includes(q))
  }, [query])

  return (
    <section className={pageStyles.section} aria-labelledby="menu-title">
      <h2 id="menu-title" className={pageStyles.h2}>
        Меню
      </h2>

      <div className={styles.searchSection} aria-label="Поиск">
        <div className={styles.orbit} style={{ ['--radius' as never]: 'clamp(9.75rem, 30vw, 13rem)' }}>
          <div className={styles.center}>
            <label className={styles.srOnly} htmlFor="menu-search">
              Поиск по меню
            </label>
            <div className={styles.search}>
              <Search className={styles.searchIcon} size={18} aria-hidden="true" />
              <input
                id="menu-search"
                className={styles.searchInput}
                placeholder="Поиск"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
          </div>

          {brands.map((brand, idx) => {
            const angle = `${(360 / brands.length) * idx}deg`
            const angleNeg = `-${angle}`
            const isActive = query.trim().toLowerCase() === brand.toLowerCase()
            return (
              <div
                key={brand}
                className={styles.brand}
                style={{ ['--angle' as never]: angle, ['--angleNeg' as never]: angleNeg }}
              >
                <button
                  type="button"
                  className={`${styles.brandBtn} ${isActive ? styles.brandBtnActive : ''}`}
                  onClick={() => setQuery(brand)}
                  aria-label={`Выбрать бренд: ${brand}`}
                >
                  {brand}
                </button>
              </div>
            )
          })}
        </div>
      </div>

      <div className={`${pageStyles.grid} ${styles.list}`} role="list" aria-label="Список брендов">
        {filteredBrands.map((brand) => (
          <article key={brand} className={pageStyles.card} role="listitem" aria-label={brand}>
            <div className={pageStyles.name}>{brand}</div>
            <p className={pageStyles.p}>Выбрать бренд</p>
          </article>
        ))}
      </div>
    </section>
  )
}
