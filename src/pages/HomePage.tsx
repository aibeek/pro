import { useMemo } from 'react'
import { StatsRow } from '../components/StatsRow/StatsRow'
import { BrandsSection } from '../components/BrandsSection/BrandsSection'
import { RatingTable } from '../components/RatingTable/RatingTable'
import { fastFoodPlaces } from '../data/fastFoodPlaces'

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
      <StatsRow
        items={[
          { label: 'Город', value: 128 },
          { label: 'Страны', value: 42 },
          { label: 'Мир', value: 1340 },
        ]}
      />

      <BrandsSection id="brands" title="Бренды" brands={brands} />

      <RatingTable id="table" title="Рейтинг фастфуд-объектов" rows={fastFoodPlaces} />
    </>
  )
}
