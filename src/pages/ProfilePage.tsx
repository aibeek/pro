import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { SettingsModal } from '@/components/SettingsModal/SettingsModal'
import { SupportModal } from '@/components/SupportModal/SupportModal'
import styles from './Page.module.css'

export function ProfilePage() {
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [supportOpen, setSupportOpen] = useState(false)

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
        <div className={styles.row}>
          <span className={styles.muted}>Номер телефона</span>
          <span className={styles.strong}>+7 999 000-00-00</span>
        </div>
        <div className={styles.row}>
          <span className={styles.muted}>Город</span>
          <span className={styles.strong}>Москва</span>
        </div>
        <div className={styles.row}>
          <span className={styles.muted}>Страна</span>
          <span className={styles.strong}>Россия</span>
        </div>
        <div className={styles.row}>
          <span className={styles.muted}>Место в таблице</span>
          <span className={styles.strong}>128</span>
        </div>
      </div>

      <div className={styles.grid} role="list" aria-label="Дополнительно">
        <article className={styles.card} role="listitem" aria-label="Настройки">
          <div className={styles.name}>Настройки</div>
          <p className={styles.p}>Уведомления и параметры приложения.</p>
          <Button type="button" size="sm" variant="secondary" onClick={() => setSettingsOpen(true)}>
            Настроить
          </Button>
        </article>
        <article className={styles.card} role="listitem" aria-label="Служба поддержки">
          <div className={styles.name}>Служба поддержки</div>
          <p className={styles.p}>Вопросы и помощь по приложению.</p>
          <Button type="button" size="sm" variant="secondary" onClick={() => setSupportOpen(true)}>
            Связаться
          </Button>
        </article>
      </div>

      <SettingsModal open={settingsOpen} onOpenChange={setSettingsOpen} />
      <SupportModal open={supportOpen} onOpenChange={setSupportOpen} />
    </section>
  )
}
