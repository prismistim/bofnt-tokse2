export type Work = {
  title: string,
  artist: string,
  genre: string,
  bpm: {
    min: number|null,
    max: number|null
  }
}
