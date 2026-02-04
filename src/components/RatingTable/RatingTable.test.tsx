import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { RatingTable } from './RatingTable'
import type { FastFoodPlace } from '../../data/fastFoodPlaces'

const rows: FastFoodPlace[] = [
  {
    id: 'a',
    name: 'A',
    city: 'X',
    country: 'RU',
    rating: 4.9,
    reviews: 10,
    avgWaitMin: 8,
    cashbackPercent: 2,
  },
  {
    id: 'b',
    name: 'B',
    city: 'Y',
    country: 'RU',
    rating: 4.1,
    reviews: 20,
    avgWaitMin: 12,
    cashbackPercent: 5,
  },
  {
    id: 'c',
    name: 'C',
    city: 'Z',
    country: 'RU',
    rating: 4.5,
    reviews: 5,
    avgWaitMin: 6,
    cashbackPercent: 1,
  },
]

describe('RatingTable', () => {
  it('sorts by rating descending by default and toggles to ascending', async () => {
    const user = userEvent.setup()
    render(<RatingTable id="table" title="Рейтинг" rows={rows} />)

    const table = screen.getByRole('table')
    const bodyRows = within(table).getAllByRole('row').slice(1)
    expect(bodyRows.length).toBe(3)
    expect(within(bodyRows[0]).getByText('A')).toBeInTheDocument()

    const ratingHeader = screen.getByRole('button', { name: 'Сортировать по: Рейтинг' })
    await user.click(ratingHeader)

    const bodyRowsAfter = within(table).getAllByRole('row').slice(1)
    expect(within(bodyRowsAfter[0]).getByText('B')).toBeInTheDocument()

    const ratingTh = ratingHeader.closest('th')
    expect(ratingTh).toHaveAttribute('aria-sort', 'ascending')
  })
})
