import { useMemo } from 'react'
import styles from './Page.module.css'
import { fastFoodPlaces } from '../data/fastFoodPlaces'

export function ChampionsPage() {
  const champions = useMemo(() => {
    return [...fastFoodPlaces].sort((a, b) => b.rating - a.rating).slice(0, 10)
  }, [])

  return (
    <section className={styles.section} aria-labelledby="champions-title">
      <h2 id="champions-title" className={styles.h2}>
        Чемпионы
      </h2>
      <p className={styles.p} aria-label="Описание">
        Топ объектов по рейтингу (демо-данные).
      </p>

      <div className={styles.grid} role="list" aria-label="Список чемпионов">
        {champions.map((place, idx) => (
          <div key={place.id} className={styles.card} role="listitem">
            <div className={styles.cardTop}>
              <span className={styles.rank} aria-label={`Место ${idx + 1}`}>
                {idx + 1}
              </span>
              <span className={styles.name}>{place.name}</span>
            </div>
            <div className={styles.meta}>
              <span>{place.city}</span>
              <span aria-label={`Рейтинг ${place.rating}`}>{place.rating.toFixed(1)}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
