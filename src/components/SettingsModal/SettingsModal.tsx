import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import styles from './SettingsModal.module.css'
import { Button } from '@/components/ui/button'
import { Settings } from 'lucide-react'

export function SettingsModal({
  open,
  onOpenChange,
}: {
  open: boolean
  onOpenChange: (next: boolean) => void
}) {
  const [notifications, setNotifications] = useState(() => {
    const v = localStorage.getItem('settings:notifications')
    if (v === 'true') return true
    if (v === 'false') return false
    return true
  })

  useEffect(() => {
    if (!open) return
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prevOverflow
    }
  }, [open])

  useEffect(() => {
    localStorage.setItem('settings:notifications', String(notifications))
  }, [notifications])

  if (!open) return null

  const onClose = () => onOpenChange(false)

  return createPortal(
    <div className={styles.overlay} role="presentation" onMouseDown={onClose}>
      <div
        className={styles.dialog}
        role="dialog"
        aria-modal="true"
        aria-label="Настройки"
        onMouseDown={(e) => e.stopPropagation()}
        onKeyDown={(e) => {
          if (e.key === 'Escape') onClose()
        }}
      >
        <div className={styles.header}>
          <div className={styles.title}>
            <Settings size={18} aria-hidden="true" />
            Настройки
          </div>
          <Button size="sm" variant="ghost" type="button" onClick={onClose} aria-label="Закрыть">
            ✕
          </Button>
        </div>

        <div className={styles.body}>
          <div className={styles.row}>
            <div className={styles.rowTitle}>
              <div className={styles.rowLabel}>Уведомления</div>
              <div className={styles.rowHint}>Ежедневные результаты и важные новости</div>
            </div>
            <button
              type="button"
              className={styles.toggle}
              role="switch"
              aria-checked={notifications}
              onClick={() => setNotifications((v) => !v)}
            >
              <span className={styles.knob} aria-hidden="true" />
            </button>
          </div>

          <div className={styles.footer}>
            <Button type="button" variant="secondary" onClick={onClose}>
              Готово
            </Button>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  )
}
