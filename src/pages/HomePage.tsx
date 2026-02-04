import { RatingTable } from '../components/RatingTable/RatingTable'
import { ticketTableRows } from '../data/ticketTableRows'

export function HomePage() {
  return (
    <>
      <RatingTable id="table" title="Таблица" rows={ticketTableRows} />
    </>
  )
}
