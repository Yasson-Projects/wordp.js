export interface WpPostContent {
  id: number;
  date: string;
  date_gmt: string;
  guid: Guid;
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: Guid;
  content: Content;
  excerpt: Content;
  author: number;
  featured_media: number;
  comment_status: string;
  ping_status: string;
  sticky: boolean;
  template: string;
  format: string;
  meta: Meta;
  categories: number[];
  tags: number[];
  class_list: string[];
  _links: Links;
  _embedded: Embedded;
}

interface Embedded {
  author: Author2[];
  'wp:featuredmedia': Wpfeaturedmedia[];
  'wp:term': Wpterm2[][];
}

interface Wpterm2 {
  id: number;
  link: string;
  name: string;
  slug: string;
  taxonomy: string;
  _links: Links4;
}

interface Links4 {
  self: Self[];
  collection: Collection[];
  about: Collection[];
  'wp:post_type': Collection[];
  curies: Cury[];
}

interface Wpfeaturedmedia {
  id: number;
  date: string;
  slug: string;
  type: string;
  link: string;
  title: Guid;
  author: number;
  featured_media: number;
  caption: Guid;
  alt_text: string;
  media_type: string;
  mime_type: string;
  media_details: Mediadetails;
  source_url: string;
  _links: Links3;
}

interface Links3 {
  self: Self[];
  collection: Collection[];
  about: Collection[];
  author: Author[];
  replies: Author[];
}

interface Mediadetails {
  width: number;
  height: number;
  file: string;
  filesize: number;
  sizes: Sizes;
  image_meta: Imagemeta;
}

interface Imagemeta {
  aperture: string;
  credit: string;
  camera: string;
  caption: string;
  created_timestamp: string;
  copyright: string;
  focal_length: string;
  iso: string;
  shutter_speed: string;
  title: string;
  orientation: string;
  keywords: string[];
}

type Sizes = object

interface Author2 {
  id: number;
  name: string;
  url: string;
  description: string;
  link: string;
  slug: string;
  avatar_urls: Avatarurls;
  _links: Links2;
}

interface Links2 {
  self: Self[];
  collection: Collection[];
}

interface Avatarurls {
  '24': string;
  '48': string;
  '96': string;
}

interface Links {
  self: Self[];
  collection: Collection[];
  about: Collection[];
  author: Author[];
  replies: Author[];
  'version-history': Versionhistory[];
  'predecessor-version': Predecessorversion[];
  'wp:featuredmedia': Author[];
  'wp:attachment': Collection[];
  'wp:term': Wpterm[];
  curies: Cury[];
}

interface Cury {
  name: string;
  href: string;
  templated: boolean;
}

interface Wpterm {
  taxonomy: string;
  embeddable: boolean;
  href: string;
}

interface Predecessorversion {
  id: number;
  href: string;
}

interface Versionhistory {
  count: number;
  href: string;
}

interface Author {
  embeddable: boolean;
  href: string;
}

interface Collection {
  href: string;
}

interface Self {
  href: string;
  targetHints: TargetHints;
}

interface TargetHints {
  allow: string[];
}

interface Meta {
  footnotes: string;
}

interface Content {
  rendered: string;
  protected: boolean;
}

interface Guid {
  rendered: string;
}