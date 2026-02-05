import { useEffect, useState } from 'react'
import styles from './App.module.css'
import { AppHeader } from './components/AppHeader/AppHeader'
import { BrandsSection } from './components/BrandsSection/BrandsSection'
import { BottomNav, type NavKey } from './components/BottomNav/BottomNav'
import { HomePage } from './pages/HomePage'
import { ChampionsPage } from './pages/ChampionsPage'
import { PromosPage } from './pages/PromosPage'
import { MenuPage } from './pages/MenuPage'
import { ProfilePage } from './pages/ProfilePage'
import { brands } from './data/brands'

export default function App() {
  const stats = [
    { label: 'Город', value: 360, icon: 'city' as const },
    { label: 'Страны', value: 2400, icon: 'countries' as const },
    { label: 'Мир', value: 8200, icon: 'world' as const },
  ]

  const [route, setRoute] = useState<'home' | 'champions' | 'promos' | 'menu' | 'profile'>(() => {
    const hash = window.location.hash
    const m = hash.match(/^#\/(champions|promos|menu|profile)$/)
    return m ? (m[1] as 'champions' | 'promos' | 'menu' | 'profile') : 'home'
  })

  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash
      const m = hash.match(/^#\/(champions|promos|menu|profile)$/)
      setRoute(m ? (m[1] as 'champions' | 'promos' | 'menu' | 'profile') : 'home')
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const handleNavigate = (key: NavKey) => {
    if (key === 'table') {
      if (window.location.hash !== '#/') window.location.hash = '#/'
      requestAnimationFrame(() => {
        const el = document.getElementById('table')
        el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
      return
    }
    window.location.hash = `#/${key}`
  }

  const activeKey: NavKey = route === 'home' ? 'table' : route

  return (
    <div className={styles.app}>
      <a className={styles.skipLink} href={route === 'home' ? '#table' : '#/'}>
        Перейти к таблице рейтинга
      </a>

      <AppHeader stats={stats} />

      <main className={styles.main} aria-label="Контент">
        <div className={styles.brandsBar}>
          <BrandsSection id="brands" brands={brands} showHeader={false} />
        </div>
        {route === 'home' && <HomePage />}
        {route === 'champions' && <ChampionsPage />}
        {route === 'promos' && <PromosPage />}
        {route === 'menu' && <MenuPage />}
        {route === 'profile' && <ProfilePage />}
      </main>

      <BottomNav activeKey={activeKey} onNavigate={handleNavigate} />
    </div>
  )
}
