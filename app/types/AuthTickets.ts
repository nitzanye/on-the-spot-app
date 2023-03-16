export type AuthTickets = {
  email: string
  id: string
  image: string
  name: string
  tickets: {
    createdAt: string
    id: string
    location: string
    date: string
    artist: string
    amount: number
    price: number
    userId: string
    genre: string
    ticketId: string
  }[]
}