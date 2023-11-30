<script setup lang="ts">
import type { ComponentOptions } from 'nuxt/dist/app/compat/capi'
import Avatar6cha9n from '@/assets/avatar/6cha9n.jpg'
import AvatarH0pe from '@/assets/avatar/h0pe.jpg'
import AvatarSnowsphere from '@/assets/avatar/snowsphere.jpg'
import type { Member } from '@/types/member'

const members: Member[] = [
  {
    name: 'りょくちゃくん',
    avatar: Avatar6cha9n,
    isLeader: true,
    isFinalStriker: false,
    links: [
      { site: 'x', href: 'https://twitter.com/6cha9n' },
      { site: 'soundcloud', href: 'https://soundcloud.com/shadecount' },
    ],
  },
  {
    name: 'h0pe',
    avatar: AvatarH0pe,
    isLeader: false,
    isFinalStriker: true,
    links: [
      { site: 'x', href: 'https://twitter.com/hope__rice' },
      { site: 'soundcloud', href: 'https://soundcloud.com/uesmm' },
    ],
  },
  {
    name: 'snowsphere',
    avatar: AvatarSnowsphere,
    isLeader: false,
    isFinalStriker: false,
    links: [
      { site: 'portal', href: 'https://portal.snowsphere.net/' },
    ],
  },
]
</script>

<template>
  <div class="mt-8 space-y-12">
    <MemberListItem
      v-for="item of members"
      :key="item.name"
      :name="item.name"
      :avatar="item.avatar"
      :is-leader="item.isLeader"
      :is-final-striker="item.isFinalStriker"
      :links="item.links"
    ></MemberListItem>
  </div>
</template>
