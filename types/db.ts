export type ProductRow = {
  id: string
  slug: string
  title: string
  description?: string
  image_url: string
  is_active: boolean
}

export type UserAccessRow = {
  user_id: string
  product_id: string
  created_at?: string
}

export type ModuleRow = {
  id: string
  product_id: string
  title: string
  order_index: number
  slug?: string
  release_days?: number | null
}

export type ChapterRow = {
  id: string
  module_id: string
  title: string
  content: string
  order_index: number
}
