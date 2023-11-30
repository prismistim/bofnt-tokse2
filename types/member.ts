import { ComponentOptions } from "nuxt/dist/app/compat/capi"

export type Link = {
  site: 'x' | 'soundcloud' | 'youtube' | 'niconico' | 'misskey_io' | 'portal'
  href: string
}

export type Member = {
  name: string
  avatarUrl?: string
  avatar: ComponentOptions | string
  isLeader: boolean
  isFinalStriker: boolean
  links: Link[]
}
