export type TicketTableRow = {
  id: string
  name: string
  amount: number
  percent: number
  ticketsCount: number
}

export const ticketTableRows: TicketTableRow[] = [
  { id: '1', name: 'Пона', amount: 200, percent: 20, ticketsCount: 20 },
  { id: '2', name: 'Теа', amount: 180, percent: 18, ticketsCount: 18 },
  { id: '3', name: 'Саза', amount: 160, percent: 16, ticketsCount: 16 },
  { id: '4', name: 'Пипен', amount: 150, percent: 15, ticketsCount: 15 },
  { id: '5', name: 'Илу', amount: 120, percent: 12, ticketsCount: 12 },
  { id: '6', name: 'Гвэн', amount: 80, percent: 8, ticketsCount: 8 },
  { id: '7', name: 'Терра', amount: 50, percent: 5, ticketsCount: 5 },
  { id: '8', name: 'Коби', amount: 30, percent: 3, ticketsCount: 3 },
  { id: '9', name: 'Фифи', amount: 20, percent: 2, ticketsCount: 2 },
  { id: '10', name: 'Джо', amount: 10, percent: 1, ticketsCount: 1 },
]
