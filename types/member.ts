import { ComponentOptions } from "nuxt/dist/app/compat/capi"

export type Link = {
  site: 'x' | 'soundcloud' | 'youtube' | 'niconico' | 'misskey_io'
  href: string
}

export type Member = {
  name: string
  avatarUrl?: string
  avatar: ComponentOptions | string
  isLeader: boolean
  links: Link[]
}