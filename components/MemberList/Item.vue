<script setup lang="ts">
import XLogo from '@/assets/logo/x.svg'
import SCLogo from '@/assets/logo/sc.png'
import YTLogo from '@/assets/logo/yt.png'
import MiIoLogo from '@/assets/logo/miio.jpg'
import type { Member, Link } from '@/types/member'

type Props = {
  name: string
  avatar: string
  isLeader: boolean
  isFinalStriker: boolean
  links: Link[]
}

const props = defineProps<Props>()
</script>

<template>
  <div class="lg:flex lg:space-x-8">
    <img :src="props.avatar" />
    <div class="mt-4 lg:mt-0">
      <div>
        <span class="text-3xl tracking-wide font-medium">
          {{ props.name }}
        </span>
        <span v-show="props.isLeader" class="ml-2 text-2xl material-symbols-outlined">verified</span>
        <span v-show="props.isFinalStriker" class="ml-2 text-2xl material-symbols-outlined">rocket_launch</span>
      </div>
      <div class="mt-4 flex space-x-6 items-center">
        <span v-for="item of links" :key="item.site">
          <a :href="item.href" target="_blank" class="hover:opacity-50 transition duration-500">
            <XLogo v-if="item.site === 'x'" :src="XLogo" :font-controlled="false" class="w-8 text-neutral-900 dark:text-neutral-100 transition-all" />
            <img v-else-if="item.site === 'misskey_io'" :src="MiIoLogo" class="w-8 grayscale invert" />
            <img v-else-if="item.site === 'soundcloud'" :src="SCLogo" class="w-8 dark:invert transition-all" />
            <img v-else-if="item.site === 'youtube'" :src="YTLogo" class="w-8" />
            <span v-else-if="item.site === 'portal'" class="material-symbols-outlined w-8">
              <span class="text-[1.75rem]">
                link
              </span>
            </span>
          </a>
        </span>
      </div>
    </div>
  </div>
</template>

<style lang="postcss">
img {
  @apply w-56 lg:w-40;
}
</style>
