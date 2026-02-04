import { useMemo } from 'react'
import { BrandsSection } from '../components/BrandsSection/BrandsSection'
import { RatingTable } from '../components/RatingTable/RatingTable'
import { ticketTableRows } from '../data/ticketTableRows'

export function HomePage() {
  const brands = useMemo(
    () => [
      'Burger King',
      'KFC',
      'McDonald’s',
      'Subway',
      'Domino’s',
      'Papa Johns',
      'Dodo Pizza',
      'Taco Bell',
    ],
    [],
  )

  return (
    <>
      <BrandsSection id="brands" brands={brands} showHeader={false} />
      <RatingTable id="table" title="Таблица" rows={ticketTableRows} />
    </>
  )
}
