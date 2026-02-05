import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import styles from './SupportModal.module.css'
import { Button } from '@/components/ui/button'
import { Headset, Mail, Phone } from 'lucide-react'

export function SupportModal({
  open,
  onOpenChange,
}: {
  open: boolean
  onOpenChange: (next: boolean) => void
}) {
  useEffect(() => {
    if (!open) return
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prevOverflow
    }
  }, [open])

  if (!open) return null

  const onClose = () => onOpenChange(false)

  return createPortal(
    <div className={styles.overlay} role="presentation" onMouseDown={onClose}>
      <div
        className={styles.dialog}
        role="dialog"
        aria-modal="true"
        aria-label="Служба поддержки"
        onMouseDown={(e) => e.stopPropagation()}
        onKeyDown={(e) => {
          if (e.key === 'Escape') onClose()
        }}
      >
        <div className={styles.header}>
          <div className={styles.title}>
            <Headset size={18} aria-hidden="true" />
            Служба поддержки
          </div>
          <Button size="sm" variant="ghost" type="button" onClick={onClose} aria-label="Закрыть">
            ✕
          </Button>
        </div>

        <div className={styles.body}>
          <p className={styles.text}>Если что-то не работает или есть вопросы — напишите или позвоните.</p>

          <div className={styles.actions}>
            <Button asChild variant="secondary" size="sm">
              <a href="mailto:support@luckypay.local">
                <Mail />
                Email
              </a>
            </Button>
            <Button asChild size="sm">
              <a href="tel:+79990000000">
                <Phone />
                Позвонить
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  )
}
