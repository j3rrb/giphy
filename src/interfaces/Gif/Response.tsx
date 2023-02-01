import type { Gif } from '.'

export interface GifResponse {
  data: Gif[]
  pagination: {
    offset: number
    total_count: number
    count: number
  }
  meta: {
    msg: string
    status: string
    response_id: string
  }
}
