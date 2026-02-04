import { useEffect, useState } from 'react'
import styles from './App.module.css'
import { AppHeader } from './components/AppHeader/AppHeader'
import { BottomNav, type NavKey } from './components/BottomNav/BottomNav'
import { HomePage } from './pages/HomePage'
import { ChampionsPage } from './pages/ChampionsPage'
import { MenuPage } from './pages/MenuPage'
import { ProfilePage } from './pages/ProfilePage'

export default function App() {
  const [route, setRoute] = useState<'home' | 'champions' | 'menu' | 'profile'>(() => {
    const hash = window.location.hash
    const m = hash.match(/^#\/(champions|menu|profile)$/)
    return m ? (m[1] as 'champions' | 'menu' | 'profile') : 'home'
  })
  const [homeActive, setHomeActive] = useState<NavKey>('brands')

  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash
      const m = hash.match(/^#\/(champions|menu|profile)$/)
      setRoute(m ? (m[1] as 'champions' | 'menu' | 'profile') : 'home')
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const handleNavigate = (key: NavKey) => {
    if (key === 'brands' || key === 'table') {
      if (window.location.hash !== '#/') window.location.hash = '#/'
      setHomeActive(key)
      requestAnimationFrame(() => {
        const el = document.getElementById(key)
        el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
      return
    }
    window.location.hash = `#/${key}`
  }

  const activeKey: NavKey = route === 'home' ? homeActive : route

  return (
    <div className={styles.app}>
      <a className={styles.skipLink} href={route === 'home' ? '#table' : '#/'}>
        Перейти к таблице рейтинга
      </a>

      <AppHeader />

      <main className={styles.main} aria-label="Контент">
        {route === 'home' && <HomePage />}
        {route === 'champions' && <ChampionsPage />}
        {route === 'menu' && <MenuPage />}
        {route === 'profile' && <ProfilePage />}
      </main>

      <BottomNav activeKey={activeKey} onNavigate={handleNavigate} />
    </div>
  )
}
