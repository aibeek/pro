import { useMemo } from 'react'
import { BrandsSection } from '../components/BrandsSection/BrandsSection'
import { RatingTable } from '../components/RatingTable/RatingTable'
import { ticketTableRows } from '../data/ticketTableRows'

export function HomePage() {
  const brands = useMemo(
    () => [
      'Don Shaurmeone',
      'Kebab',
      'Хинкалайсын',
      'Lucky Taste',
      'Дон Хинкалионе',
      'Toast Time',
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
