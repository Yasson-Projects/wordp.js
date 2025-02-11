import { Embedded, Fieds, OrderByType, OrderType } from "./enums/args.enum"

export interface Posts {
  fields: Fieds[]
  embed: Embedded[]
  page: number
  per_page: number
  order?: OrderType
  orderBy?: OrderByType
  offset?: number
}

export interface Post extends Omit<Posts, "order" | "orderBy" | "offset" | "page" | "per_page"> {
  id: number
}