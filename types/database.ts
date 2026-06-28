export interface Restaurant {
  id: string
  name: string
  slug: string
  image: string
  address: string
  location: string
  phone: string
  cuisine: string[]
  description: string
  open_time: string
  close_time: string
  rating: number
  total_reviews: number
  delivery_time_min: number
  delivery_time_max: number
  delivery_fee: number
  is_open: boolean
  featured: boolean
}

export interface MenuItem {
  id: string
  restaurant_id: string
  name: string
  image: string
  category: string
  price: number
  discount_price: number | null
  ingredients: string[]
  prep_time_min: number
  rating: number
  reviews_count: number
  stock_quantity: number
  is_sold_out: boolean
  available: boolean
  popular: boolean
}
