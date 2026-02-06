import { useState } from 'react'
import styles from './Page.module.css'

const promos = [
  {
    id: 1,
    name: 'Лотерея',
    text: 'Каждая покупка накопительно отражается в общем рейтинге. Твоя сумма определяет твоё место в таблице. Чем выше место, тем больше билетов ты получишь перед главным розыгрышем в конце месяца.',
  },
  {
    id: 2,
    name: 'Lucky check',
    text: 'Это ежедневный розыгрыш среди чеков. Каждая покупка — это чек, а значит шанс выиграть вне зависимости от твоего места в таблице.',
  },
  {
    id: 3,
    name: 'Кубок рефералов',
    text: 'Отправь рефералку другу. В случае если твой адресат пройдёт регистрацию, ты получишь 1 балл в таблице рефералов. Победитель кубка рефералов выиграет приз. А тот, кто пройдёт регистрацию, получит скидочные купоны. Все в плюсе.',
  },
]

export function PromosPage() {
  const [expandedIds, setExpandedIds] = useState<number[]>([])

  const toggleCard = (id: number) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    )
  }

  return (
    <section className={styles.section} aria-labelledby="promos-title">
      <h2 id="promos-title" className={styles.h2}>
        Акции и бонусы
      </h2>

      <div className={styles.grid} role="list" aria-label="Список карточек">
        {promos.map((promo) => {
          const isExpanded = expandedIds.includes(promo.id)
          return (
            <article key={promo.id} className={styles.card} role="listitem" aria-label={promo.name}>
              <div className={styles.cardTop}>
                <div className={styles.rank} aria-hidden="true">
                  {promo.id}
                </div>
                <div className={styles.name}>{promo.name}</div>
                <button
                  type="button"
                  className={styles.cardToggleBtn}
                  onClick={() => toggleCard(promo.id)}
                  aria-expanded={isExpanded}
                >
                  {isExpanded ? (
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                      <path d="M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                      <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z" />
                    </svg>
                  )}
                </button>
              </div>
              {isExpanded && <p className={styles.p}>{promo.text}</p>}
            </article>
          )
        })}
      </div>
    </section>
  )
}
