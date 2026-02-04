export type TicketTableRow = {
  id: string
  name: string
  amount: number
  percent: number
  ticketsCount: number
}

export const ticketTableRows: TicketTableRow[] = [
  { id: '1', name: 'Burger King', amount: 1250000, percent: 12, ticketsCount: 520 },
  { id: '2', name: 'KFC', amount: 980000, percent: 9, ticketsCount: 410 },
  { id: '3', name: 'McDonald’s', amount: 1540000, percent: 14, ticketsCount: 610 },
  { id: '4', name: 'Subway', amount: 640000, percent: 6, ticketsCount: 260 },
  { id: '5', name: 'Domino’s', amount: 890000, percent: 8, ticketsCount: 330 },
  { id: '6', name: 'Papa Johns', amount: 720000, percent: 7, ticketsCount: 290 },
  { id: '7', name: 'Dodo Pizza', amount: 1110000, percent: 10, ticketsCount: 470 },
  { id: '8', name: 'Taco Bell', amount: 560000, percent: 5, ticketsCount: 220 },
]
