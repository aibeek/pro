import { useState } from 'react'
import { Search } from 'lucide-react'
import { brands } from '@/data/brands'
import pageStyles from './Page.module.css'
import styles from './MenuPage.module.css'

export function MenuPage() {
  const [query, setQuery] = useState('')

  return (
    <section className={pageStyles.section} aria-labelledby="menu-title">
      <h2 id="menu-title" className={pageStyles.h2}>
        Меню
      </h2>

      <div className={styles.orbitWrap}>
        <div className={styles.orbit}>
          <div className={styles.center}>
            <div className={styles.search}>
              <Search className={styles.searchIcon} size={16} aria-hidden="true" />
              <input
                className={styles.searchInput}
                placeholder="Поиск"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
          </div>

          {brands.map((brand, idx) => {
            const angle = (360 / brands.length) * idx
            const isActive = query.trim().toLowerCase() === brand.toLowerCase()
            return (
              <button
                key={brand}
                type="button"
                className={`${styles.brandBtn} ${isActive ? styles.brandBtnActive : ''}`}
                style={{
                  '--angle': `${angle}deg`,
                } as React.CSSProperties}
                onClick={() => setQuery(brand)}
              >
                {brand}
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
