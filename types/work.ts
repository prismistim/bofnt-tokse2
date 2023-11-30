export type Work = {
  id: number
  title: string
  artist: string
  genre: string
  bpm: {
    min: number | null
    max: number | null
  }
  soundcloud: {
    id: number
    url: string
    title: string
    user: {
      id: string
      userName: string
    }
  }
}
