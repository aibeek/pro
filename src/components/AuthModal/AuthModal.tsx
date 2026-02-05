import { type FormEvent, useEffect, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import styles from './AuthModal.module.css'
import { Button } from '@/components/ui/button'
import { LogIn, UserPlus } from 'lucide-react'

type AuthMode = 'login' | 'register'

export function AuthModal({
  open,
  onOpenChange,
  initialMode = 'login',
}: {
  open: boolean
  onOpenChange: (next: boolean) => void
  initialMode?: AuthMode
}) {
  const [mode, setMode] = useState<AuthMode>(initialMode)
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  const [registerName, setRegisterName] = useState('')
  const [registerEmail, setRegisterEmail] = useState('')
  const [registerPassword, setRegisterPassword] = useState('')
  const [registerPassword2, setRegisterPassword2] = useState('')

  const firstInputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    if (!open) return
    setMode(initialMode)
  }, [open, initialMode])

  useEffect(() => {
    if (!open) return
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prevOverflow
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    requestAnimationFrame(() => {
      firstInputRef.current?.focus()
    })
  }, [open, mode])

  const registerError = useMemo(() => {
    if (!registerPassword2) return ''
    if (registerPassword !== registerPassword2) return 'Пароли не совпадают'
    return ''
  }, [registerPassword, registerPassword2])

  if (!open) return null

  const onClose = () => onOpenChange(false)

  const onSubmitLogin = (e: FormEvent) => {
    e.preventDefault()
    onClose()
  }

  const onSubmitRegister = (e: FormEvent) => {
    e.preventDefault()
    if (registerPassword !== registerPassword2) return
    onClose()
  }

  return createPortal(
    <div className={styles.overlay} role="presentation" onMouseDown={onClose}>
      <div
        className={styles.dialog}
        role="dialog"
        aria-modal="true"
        aria-label="Авторизация"
        onMouseDown={(e) => e.stopPropagation()}
        onKeyDown={(e) => {
          if (e.key === 'Escape') onClose()
        }}
      >
        <div className={styles.header}>
          <div className={styles.titleRow}>
            <div className={styles.title}>
              {mode === 'login' ? <LogIn size={18} aria-hidden="true" /> : <UserPlus size={18} aria-hidden="true" />}
              {mode === 'login' ? 'Авторизация' : 'Регистрация'}
            </div>
            <Button size="sm" variant="ghost" type="button" onClick={onClose} aria-label="Закрыть">
              ✕
            </Button>
          </div>

          <div className={styles.tabs} role="tablist" aria-label="Выбор режима">
            <button
              type="button"
              className={styles.tab}
              role="tab"
              aria-selected={mode === 'login'}
              onClick={() => setMode('login')}
            >
              Вход
            </button>
            <button
              type="button"
              className={styles.tab}
              role="tab"
              aria-selected={mode === 'register'}
              onClick={() => setMode('register')}
            >
              Регистрация
            </button>
          </div>
        </div>

        {mode === 'login' ? (
          <form className={styles.body} onSubmit={onSubmitLogin}>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="login-email">
                Email
              </label>
              <input
                ref={firstInputRef}
                id="login-email"
                className={styles.input}
                type="email"
                autoComplete="email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                required
              />
            </div>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="login-password">
                Пароль
              </label>
              <input
                id="login-password"
                className={styles.input}
                type="password"
                autoComplete="current-password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                required
              />
            </div>

            <div className={styles.footer}>
              <Button type="button" variant="secondary" onClick={onClose}>
                Отмена
              </Button>
              <Button type="submit" disabled={!loginEmail || !loginPassword}>
                Войти
              </Button>
            </div>
          </form>
        ) : (
          <form className={styles.body} onSubmit={onSubmitRegister}>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="register-name">
                Имя
              </label>
              <input
                ref={firstInputRef}
                id="register-name"
                className={styles.input}
                type="text"
                autoComplete="name"
                value={registerName}
                onChange={(e) => setRegisterName(e.target.value)}
                required
              />
            </div>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="register-email">
                Email
              </label>
              <input
                id="register-email"
                className={styles.input}
                type="email"
                autoComplete="email"
                value={registerEmail}
                onChange={(e) => setRegisterEmail(e.target.value)}
                required
              />
            </div>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="register-password">
                Пароль
              </label>
              <input
                id="register-password"
                className={styles.input}
                type="password"
                autoComplete="new-password"
                value={registerPassword}
                onChange={(e) => setRegisterPassword(e.target.value)}
                required
              />
            </div>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="register-password2">
                Повторите пароль
              </label>
              <input
                id="register-password2"
                className={styles.input}
                type="password"
                autoComplete="new-password"
                value={registerPassword2}
                onChange={(e) => setRegisterPassword2(e.target.value)}
                required
              />
              {registerError ? <div className={styles.error}>{registerError}</div> : null}
            </div>

            <div className={styles.footer}>
              <Button type="button" variant="secondary" onClick={onClose}>
                Отмена
              </Button>
              <Button
                type="submit"
                disabled={
                  !registerName ||
                  !registerEmail ||
                  !registerPassword ||
                  !registerPassword2 ||
                  Boolean(registerError)
                }
              >
                Создать аккаунт
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>,
    document.body,
  )
}
