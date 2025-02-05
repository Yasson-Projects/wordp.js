export enum Fieds {
  AUTHOR = "author",
  ID = "id",
  EXCERPT = "excerpt",
  TITLE = "title",
  LINK = "_links",
  DATE = "date",
  MODIFY = "modified",
  STATUS = "status",
  CONTENT = "content"
}
export enum Embedded {
  AUTHOR = "author",
  MEDIA = "wp:featuredmedia",
  TERM = "wp:term"
}
export interface Posts {
  fields: Fieds[],
  embed: Embedded[]
}

export interface Post extends Posts {
  id: number
}