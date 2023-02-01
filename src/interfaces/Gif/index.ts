export interface User {
  display_name: string
}

export interface Image {
  url: string
  width: string
  height: string
}

export interface Gif {
  type: string
  id: string
  slug: string
  url: string
  bitly_url: string
  embed_url: string
  username: string
  source: string
  rating: string
  user: User
  title: string
  images: {
    fixed_height: Image
  }
}
