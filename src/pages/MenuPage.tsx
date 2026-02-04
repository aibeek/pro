import styles from './Page.module.css'

export function MenuPage() {
  return (
    <section className={styles.section} aria-labelledby="menu-title">
      <h2 id="menu-title" className={styles.h2}>
        Меню (Акции и бонусы)
      </h2>

      <div className={styles.grid} role="list" aria-label="Список карточек">
        <article className={styles.card} role="listitem" aria-label="Акция недели">
          <div className={styles.name}>Акция недели</div>
          <p className={styles.p}>Комбо со скидкой 20% при заказе в приложении.</p>
        </article>
        <article className={styles.card} role="listitem" aria-label="Бонусы">
          <div className={styles.name}>Бонусы</div>
          <p className={styles.p}>Кешбэк баллами за каждый заказ и подарки за уровни.</p>
        </article>
      </div>
    </section>
  )
}
