import { useState } from 'react'
import styles from './Page.module.css'

export function PromosPage() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <section className={styles.section} aria-labelledby="promos-title">
      <div className={styles.headerRow}>
        <h2 id="promos-title" className={styles.h2}>
          Акции и бонусы
        </h2>
        <button
          type="button"
          className={styles.toggleBtn}
          onClick={() => setIsExpanded(!isExpanded)}
          aria-expanded={isExpanded}
          aria-controls="promos-content"
        >
          {isExpanded ? (
            <>
              <span>Скрыть</span>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                <path d="M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
              </svg>
            </>
          ) : (
            <>
              <span>Раскрыть</span>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z" />
              </svg>
            </>
          )}
        </button>
      </div>

      {isExpanded && (
        <div id="promos-content" className={styles.grid} role="list" aria-label="Список карточек">
        <article className={styles.card} role="listitem" aria-label="Лотерея">
          <div className={styles.cardTop}>
            <div className={styles.rank} aria-hidden="true">
              1
            </div>
            <div className={styles.name}>Лотерея</div>
          </div>
          <p className={styles.p}>
            Каждая покупка накопительно отражается в общем рейтинге. Твоя сумма определяет твоё место в таблице. Чем
            выше место, тем больше билетов ты получишь перед главным розыгрышем в конце месяца.
          </p>
        </article>

        <article className={styles.card} role="listitem" aria-label="Lucky check">
          <div className={styles.cardTop}>
            <div className={styles.rank} aria-hidden="true">
              2
            </div>
            <div className={styles.name}>Lucky check</div>
          </div>
          <p className={styles.p}>
            Это ежедневный розыгрыш среди чеков. Каждая покупка — это чек, а значит шанс выиграть вне зависимости от
            твоего места в таблице.
          </p>
        </article>

        <article className={styles.card} role="listitem" aria-label="Кубок рефералов">
          <div className={styles.cardTop}>
            <div className={styles.rank} aria-hidden="true">
              3
            </div>
            <div className={styles.name}>Кубок рефералов</div>
          </div>
          <p className={styles.p}>
            Отправь рефералку другу. В случае если твой адресат пройдёт регистрацию, ты получишь 1 балл в таблице
            рефералов. Победитель кубка рефералов выиграет приз. А тот, кто пройдёт регистрацию, получит скидочные
            купоны. Все в плюсе.
          </p>
        </article>
        </div>
      )}
    </section>
  )
}
