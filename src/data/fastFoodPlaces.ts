export type FastFoodPlace = {
  id: string
  name: string
  city: string
  country: string
  rating: number
  reviews: number
  avgWaitMin: number
  cashbackPercent: number
}

export const fastFoodPlaces: FastFoodPlace[] = [
  {
    id: 'bk-spb-1',
    name: 'Burger King',
    city: 'Санкт‑Петербург',
    country: 'Россия',
    rating: 4.7,
    reviews: 1832,
    avgWaitMin: 9,
    cashbackPercent: 5,
  },
  {
    id: 'kfc-msk-1',
    name: 'KFC',
    city: 'Москва',
    country: 'Россия',
    rating: 4.5,
    reviews: 2410,
    avgWaitMin: 11,
    cashbackPercent: 4,
  },
  {
    id: 'mcd-par-1',
    name: "McDonald's",
    city: 'Париж',
    country: 'Франция',
    rating: 4.2,
    reviews: 12980,
    avgWaitMin: 14,
    cashbackPercent: 2,
  },
  {
    id: 'sub-ny-1',
    name: 'Subway',
    city: 'Нью‑Йорк',
    country: 'США',
    rating: 4.0,
    reviews: 5210,
    avgWaitMin: 10,
    cashbackPercent: 3,
  },
  {
    id: 'dp-lon-1',
    name: "Domino's",
    city: 'Лондон',
    country: 'Великобритания',
    rating: 4.4,
    reviews: 7850,
    avgWaitMin: 18,
    cashbackPercent: 6,
  },
  {
    id: 'dodo-ekb-1',
    name: 'Dodo Pizza',
    city: 'Екатеринбург',
    country: 'Россия',
    rating: 4.6,
    reviews: 6120,
    avgWaitMin: 16,
    cashbackPercent: 7,
  },
  {
    id: 'tb-mex-1',
    name: 'Taco Bell',
    city: 'Мехико',
    country: 'Мексика',
    rating: 4.1,
    reviews: 3390,
    avgWaitMin: 12,
    cashbackPercent: 4,
  },
  {
    id: 'pj-rom-1',
    name: 'Papa Johns',
    city: 'Рим',
    country: 'Италия',
    rating: 4.3,
    reviews: 2740,
    avgWaitMin: 17,
    cashbackPercent: 5,
  },
]
