import styles from './Page.module.css'

export function ProfilePage() {
  return (
    <section className={styles.section} aria-labelledby="profile-title">
      <h2 id="profile-title" className={styles.h2}>
        Профиль
      </h2>

      <div className={styles.card} role="group" aria-label="Профиль пользователя">
        <div className={styles.row}>
          <span className={styles.muted}>Имя</span>
          <span className={styles.strong}>Гость</span>
        </div>
        <div className={styles.row}>
          <span className={styles.muted}>Любимый бренд</span>
          <span className={styles.strong}>Plum Violet</span>
        </div>
        <div className={styles.row}>
          <span className={styles.muted}>Уровень</span>
          <span className={styles.strong}>Starter</span>
        </div>
      </div>
    </section>
  )
}
