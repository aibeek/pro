import styles from './Page.module.css'

export function MenuPage() {
  return (
    <section className={styles.section} aria-labelledby="menu-title">
      <h2 id="menu-title" className={styles.h2}>
        Меню
      </h2>

      <div className={styles.grid} role="list" aria-label="Список карточек">
        <article className={styles.card} role="listitem" aria-label="Бургеры">
          <div className={styles.name}>Бургеры</div>
          <p className={styles.p}>Классика, острые и вегетарианские варианты.</p>
        </article>
        <article className={styles.card} role="listitem" aria-label="Комбо">
          <div className={styles.name}>Комбо</div>
          <p className={styles.p}>Сеты с напитком и гарниром по выгодной цене.</p>
        </article>
      </div>
    </section>
  )
}
