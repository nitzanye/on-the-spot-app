export type TicketsType = {
  title: string
  id: string
  date? : string
  location? : string
  createdAt? : string
  artist? : string
  genre? : string
  amount? : number
  price? : number
  user: {
    name: string
    image: string
  }
}